# Site glossary — 日本語 (ja)

Copied from `_template.md`. The ja translator fills it before translating any packet, and the reviewer holds every ja value to it.

The Babbby app has its own glossary (`l10n/glossary/ja.md` in the babbby-ios repo, `packet.glossary.app`): activity, the eight activity categories, Today's plan, Library, Stats, free trial, Lifetime and every other app term come from there, never from this file. This file holds only the words the website repeats that the app glossary does not define, so every page says them the same way. Never contradict the app glossary.

Fill "Term in language" with the one word or phrase every page will use, as a parent in that market searches for it. Add a row for any other site-only word that repeats across pages.

| en | Term in language | Note |
|----|------------------|------|
| Baby activity app (the product category, as parents search for it) | 赤ちゃんのあそびアプリ | 「赤ちゃん あそび アプリ」と検索される形。「アクティビティ」は使わない（アプリ用語集の あそび に合わせる）。0〜12か月を超える文脈では 子どものあそびアプリ |
| Activity ideas (daily play ideas for ages 0–6) | あそびのアイデア | 毎日のあそびの提案。例: 毎日のあそびのアイデア |
| Ages 0–6 (the age span, as the pages write it) | 0〜6歳 | アプリ用語集の形（〜、歳）。0〜12か月の範囲は 0〜12か月 |
| Parents and guardians | 保護者 | プライバシーポリシー・利用規約・免責の文言で使う。訴求文では パパ・ママ も可（子どもの性別は決めない） |
| FAQ / frequently asked questions | よくある質問 | ナビ・ページ見出し・フッターすべて同じ。「FAQ」の英字は使わない |
| Privacy Policy | プライバシーポリシー | from app glossary（UI vocabulary: Privacy Policy） |
| Terms of Use | 利用規約 | from app glossary（UI vocabulary: Terms of Use） |
| Service Provider (the legal party in the policy and terms) | サービス提供者 | 定義語。初出で「（以下「サービス提供者」）」。Alu Studio を指す |
| Application (the legal name for the app in the policy and terms) | 本アプリ | 定義語。初出で「Babbby アプリ（以下「本アプリ」）」。法的文書でのみ使い、他のページは Babbby / アプリ |
| Stored on your device (data never leaves the phone) | お使いのデバイスにのみ保存 | 「〜に保存され、外部に送信されることはありません」と続ける。iOS の標準語に合わせ デバイス（「端末」は使わない） |
| Contact Us | お問い合わせ | フッター・各ポリシーの見出し。アプリの文言（お問い合わせください）と同じ語 |
| Children's profile (name, birth date stored in the app) | お子さんのプロフィール | 法的文書・FAQ の文中。アプリ内の画面名 赤ちゃん とは別に、文中は お子さん（性別を決めない）。出生日は 生年月日 |
| Milestones (as in "track milestones") | 成長の節目 | 医学的な発達評価ではなく、完了したあそびの記録であることを保つ（発達診断を思わせる語は使わない） |
| Track / tracking (completed activities over time) | 記録 | 動詞は 記録する。統計画面の名称は 統計（from app glossary: Stats） |
| Local database | ローカルデータベース | GRDB/SQLite は英字のまま |
| Third-party services | サードパーティのサービス | Firebase Analytics などを指す見出し・本文の語 |
| Effective Date | 施行日 | 書式は 施行日：2026年3月13日 |
| Buy the Developer a Coffee (optional one-time sponsor purchase) | 開発者にコーヒーをおごる | 購入項目の名称は「」で囲む。説明は 任意の一回限りの支援。Lifetime（買い切り）とは別物として書く |
| No ads / advertising identifier (IDFA) | 広告なし／広告用識別子（IDFA） | iOS の標準語は 広告用識別子。IDFA は括弧で英字を残す |
| Account / sign-up | アカウント登録 | 「アカウント登録は不要」。ログインという語は使わない |
| Pediatrician | 小児科医 | 免責・FAQ。職種名として使う（「かかりつけ医」にしない） |
| Settings → Privacy & Security → Analytics & Improvements (iOS path) | 設定 → プライバシーとセキュリティ → 解析および改善 | iOS 日本語の表記。矢印は → のまま。設定は from app glossary。iOS 上の表示名を確認して最終決定 |
| App Store categories Lifestyle and Education | ライフスタイルと教育 | App Store 日本の表記 |
