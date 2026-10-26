import { useTranslation } from "react-i18next";
import {
  Check,
  Gift,
  Heart,
  LockSimple,
  PencilSimple,
  WarningCircle,
  WifiSlash,
} from "@phosphor-icons/react";

// Each scene is a decorative vignette of one app's core action. Its resting
// markup is the finished frame; the story loops in index.scss leave that frame
// and return to it, so no-JS, reduced-motion and prerendered HTML all show it.

function useScene(id) {
  const { t } = useTranslation();
  return t(`scene.${id}`, { returnObjects: true });
}

// Which ticket row each product tile produces; the bagel tile is never tapped.
const TILE_ROW = [0, 2, 1, null];

function DingposScene() {
  const s = useScene("dingpos");
  return (
    <div className="pos">
      <div className="pos__bar">
        <span className="pos__order">{s.order}</span>
        <span className="pos__status">
          <span className="pos__dot" />
          <WifiSlash size={12} weight="bold" />
          {s.offline}
        </span>
      </div>
      <div className="pos__main">
        <div className="pos__tiles">
          {s.tiles.map((tile, i) => (
            <div
              key={tile.name}
              className="pos__tile"
              style={TILE_ROW[i] === null ? undefined : { "--row": TILE_ROW[i] }}
              data-tapped={TILE_ROW[i] === null ? undefined : ""}
            >
              <span className={`pos__swatch pos__swatch--${i}`} />
              <span className="pos__tile-name">{tile.name}</span>
              <span className="pos__tile-price">{tile.price}</span>
            </div>
          ))}
        </div>
        <div className="pos__ticket">
          <ul className="pos__rows">
            {s.rows.map((row, i) => (
              <li key={row.name} className="pos__row" style={{ "--row": i }}>
                <span className="pos__row-name">{row.name}</span>
                <span className="pos__row-qty">{row.qty}</span>
                <span className="pos__row-price">{row.price}</span>
              </li>
            ))}
          </ul>
          <div className="pos__total">
            <span>{s.total_label}</span>
            <span>{s.total}</span>
          </div>
          <div className="pos__charge">
            {s.charge} {s.total}
          </div>
          <div className="pos__paid">
            <span className="pos__paid-icon">
              <Check size={20} weight="bold" />
            </span>
            {s.paid}
          </div>
        </div>
      </div>
    </div>
  );
}

const sottoIcons = { love: Heart, allergy: WarningCircle, birthday: Gift };

function SottoScene() {
  const s = useScene("sotto");
  return (
    <div className="person">
      <div className="person__head">
        <span className="person__avatar">{s.initials}</span>
        <div>
          <p className="person__name">{s.name}</p>
          <p className="person__meta">{s.meta}</p>
        </div>
      </div>
      <ul className="person__notes">
        <li className="person__note person__note--new">
          <PencilSimple size={16} weight="bold" />
          <span className="person__typing">
            <span>{s.new_note}</span>
            <span className="person__cover">
              <span className="person__caret" />
            </span>
          </span>
        </li>
        {s.notes.map((note) => {
          const Icon = sottoIcons[note.kind];
          return (
            <li key={note.kind} className={`person__note person__note--${note.kind}`}>
              <Icon size={16} weight={note.kind === "love" ? "fill" : "bold"} />
              <span>{note.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function PikgeonScene() {
  const s = useScene("pikgeon");
  return (
    <div className="scan">
      <div className="scan__frame">
        <div className="scan__card">
          <div className="scan__photo">
            <span className="scan__sun" />
            <span className="scan__hill scan__hill--back" />
            <span className="scan__hill scan__hill--front" />
            <span className="scan__flower" />
          </div>
          <span className="scan__caption" />
          <span className="scan__caption scan__caption--short" />
        </div>
        <span className="scan__line" />
        <span className="scan__corner scan__corner--tl" />
        <span className="scan__corner scan__corner--tr" />
        <span className="scan__corner scan__corner--bl" />
        <span className="scan__corner scan__corner--br" />
      </div>
      <div className="scan__result">
        <span className="scan__badge">
          <LockSimple size={12} weight="bold" />
          {s.badge}
        </span>
        <dl className="scan__fields">
          {s.fields.map((field, i) => (
            <div key={field.label} className="scan__field" style={{ "--row": i }}>
              <dt>{field.label}</dt>
              <dd>{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function BabbbyScene() {
  const s = useScene("babbby");
  return (
    <div className="today">
      <div className="today__head">
        <p className="today__title">{s.title}</p>
        <span className="today__age">{s.age}</span>
      </div>
      <div className="today__progress">
        <span className="today__progress-fill" />
      </div>
      <ul className="today__list">
        {s.activities.map((activity, i) => (
          <li key={activity.name} className={`today__row today__row--${i}`}>
            <span className={`today__dot today__dot--${i}`} />
            <span className="today__text">
              <span className="today__name">{activity.name}</span>
              <span className="today__category">{activity.category}</span>
            </span>
            <span className="today__check">
              <span className="today__check-fill">
                <Check size={12} weight="bold" />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const scenes = {
  dingpos: DingposScene,
  sotto: SottoScene,
  pikgeon: PikgeonScene,
  babbby: BabbbyScene,
};

export default function Scene({ app }) {
  const Component = scenes[app];
  return <Component />;
}
