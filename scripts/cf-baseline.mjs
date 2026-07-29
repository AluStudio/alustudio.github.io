/**
 * Pull the Cloudflare traffic numbers the SEO/AEO baseline needs, as markdown.
 *
 * Reading these off the dashboard twice - once now, once thirty days later -
 * invites two different definitions of the same number. This reads the same
 * fields both times so the comparison is meaningful.
 *
 * Auth reuses the local wrangler OAuth token; nothing is stored in the repo.
 * Run `wrangler login` first if it is missing or expired.
 *
 * Usage: node scripts/cf-baseline.mjs [--days 30]
 *
 * Free-plan limits worth knowing, both hit while writing this:
 *   - httpRequestsAdaptiveGroups (the only dataset with a userAgent dimension)
 *     rejects any range wider than 1 day.
 *   - httpRequests1dGroups has no userAgent dimension at all, so daily totals
 *     and the crawler breakdown cannot come from one query.
 */

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const ZONE_NAME = "alu-studio.com";
const API = "https://api.cloudflare.com/client/v4";

/** Crawlers worth tracking by name; everything else is summarised as "other". */
const CRAWLERS = [
  ["GPTBot", /GPTBot/i],
  ["OAI-SearchBot", /OAI-SearchBot/i],
  ["ChatGPT-User", /ChatGPT-User/i],
  ["ClaudeBot", /ClaudeBot/i],
  ["Claude-User / Claude-SearchBot", /Claude-(User|SearchBot|Web)/i],
  ["PerplexityBot", /PerplexityBot/i],
  ["CCBot", /CCBot/i],
  ["Google-Extended", /Google-Extended/i],
  ["Bytespider", /Bytespider/i],
  ["Applebot", /Applebot/i],
  ["Amazonbot", /Amazonbot/i],
  ["meta-externalagent", /meta-external/i],
  ["Googlebot", /Googlebot(?!-Image)/i],
  ["Googlebot-Image", /Googlebot-Image/i],
  ["bingbot", /bingbot/i],
  ["YandexBot", /YandexBot/i],
  ["Google-adstxt", /Google-adstxt/i],
  ["facebookexternalhit", /facebookexternalhit/i],
];

function wranglerToken() {
  const path = join(homedir(), ".config", ".wrangler", "config", "default.toml");
  const match = /oauth_token\s*=\s*"([^"]+)"/.exec(readFileSync(path, "utf8"));
  if (!match) throw new Error(`No oauth_token in ${path} — run: wrangler login`);
  return match[1];
}

async function cf(token, path) {
  const res = await fetch(`${API}${path}`, { headers: { Authorization: `Bearer ${token}` } });
  const body = await res.json();
  if (!body.success) throw new Error(JSON.stringify(body.errors));
  return body.result;
}

async function graphql(token, query) {
  const res = await fetch(`${API}/graphql`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  const body = await res.json();
  if (body.errors?.length) throw new Error(body.errors.map((e) => e.message).join("; "));
  return body.data;
}

const iso = (d) => d.toISOString().replace(/\.\d+Z$/, "Z");
const day = (d) => d.toISOString().slice(0, 10);

async function main() {
  const days = Number(process.argv[process.argv.indexOf("--days") + 1]) || 30;
  const token = wranglerToken();

  const [zone] = await cf(token, `/zones?name=${ZONE_NAME}`);
  if (!zone) throw new Error(`Zone ${ZONE_NAME} not found on this account`);

  const now = new Date();
  const from = new Date(now.getTime() - days * 86400_000);

  const daily = (
    await graphql(
      token,
      `query { viewer { zones(filter: { zoneTag: "${zone.id}" }) {
        httpRequests1dGroups(limit: ${days + 1}, filter: { date_geq: "${day(from)}" }, orderBy: [date_ASC]) {
          dimensions { date } sum { requests bytes } uniq { uniques }
        } } } }`
    )
  ).viewer.zones[0].httpRequests1dGroups;

  // Adaptive dataset is capped at a 1-day window on this plan.
  const uaFrom = new Date(now.getTime() - 86400_000);
  const uaRows = (
    await graphql(
      token,
      `query { viewer { zones(filter: { zoneTag: "${zone.id}" }) {
        httpRequestsAdaptiveGroups(limit: 200, filter: { datetime_geq: "${iso(uaFrom)}", datetime_leq: "${iso(now)}" }, orderBy: [count_DESC]) {
          count dimensions { userAgent }
        } } } }`
    )
  ).viewer.zones[0].httpRequestsAdaptiveGroups;

  const totalRequests = daily.reduce((n, d) => n + d.sum.requests, 0);
  const totalUniques = daily.reduce((n, d) => n + d.uniq.uniques, 0);

  const out = [];
  out.push(`### Cloudflare 流量（\`${ZONE_NAME}\`，${zone.plan.name}）`);
  out.push("");
  out.push(`擷取時間：${iso(now)}　產生方式：\`node scripts/cf-baseline.mjs\``);
  out.push("");
  if (daily.length === 0) {
    out.push("查無資料。");
  } else {
    out.push(
      `資料涵蓋 **${daily[0].dimensions.date} ~ ${daily[daily.length - 1].dimensions.date}**` +
        `（${daily.length} 天，非完整 ${days} 天——zone 建立時間所限）`
    );
    out.push("");
    out.push(`- 總請求數：**${totalRequests.toLocaleString()}**`);
    out.push(`- 不重複訪客合計：**${totalUniques.toLocaleString()}**`);
    out.push("");
    out.push("| 日期 | 請求數 | 不重複訪客 |");
    out.push("|------|--------|------------|");
    for (const d of daily) {
      out.push(
        `| ${d.dimensions.date} | ${d.sum.requests.toLocaleString()} | ${d.uniq.uniques.toLocaleString()} |`
      );
    }
  }

  out.push("");
  out.push(`### 爬蟲請求數（近 24 小時，Free 方案的 userAgent 查詢上限）`);
  out.push("");
  const counts = new Map(CRAWLERS.map(([name]) => [name, 0]));
  let matched = 0;
  for (const row of uaRows) {
    const ua = row.dimensions.userAgent ?? "";
    for (const [name, re] of CRAWLERS) {
      if (re.test(ua)) {
        counts.set(name, counts.get(name) + row.count);
        matched += row.count;
        break;
      }
    }
  }
  out.push("| Crawler | 近 24h 請求數 |");
  out.push("|---------|---------------|");
  for (const [name] of CRAWLERS) {
    const n = counts.get(name);
    out.push(`| ${name} | ${n === 0 ? "0（未出現）" : n.toLocaleString()} |`);
  }
  const total24 = uaRows.reduce((n, r) => n + r.count, 0);
  out.push("");
  out.push(
    `近 24h 全部請求 ${total24.toLocaleString()}，其中已辨識爬蟲 ${matched.toLocaleString()}` +
      `（${((matched / total24) * 100).toFixed(1)}%），其餘為一般流量與未分類自動請求。`
  );

  console.log(out.join("\n"));
}

main().catch((err) => {
  console.error(`cf-baseline failed: ${err.message}`);
  process.exit(1);
});
