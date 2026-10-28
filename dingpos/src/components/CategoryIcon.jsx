import {
  Basket,
  ChartLineUp,
  CloudCheck,
  CreditCard,
  GraduationCap,
  Package,
  Question,
  Receipt,
  RocketLaunch,
  Signpost,
  Tag,
  Users,
} from "@phosphor-icons/react";

// FAQ categories name their icon with the bootstrap-icons class they were
// written with (`icon` in articles.<code>.js, copied to every language by the
// l10n tooling). The names stay as identifiers; this maps them to the SVG set.
const ICONS = {
  "bi-rocket-takeoff": RocketLaunch,
  "bi-basket3": Basket,
  "bi-receipt": Receipt,
  "bi-box-seam": Package,
  "bi-bar-chart-line": ChartLineUp,
  "bi-tags": Tag,
  "bi-cloud-check": CloudCheck,
  "bi-people": Users,
  "bi-credit-card": CreditCard,
  "bi-mortarboard": GraduationCap,
  "bi-signpost-split": Signpost,
};

function CategoryIcon({ name, size = 20 }) {
  const Icon = ICONS[name] ?? Question;
  return <Icon size={size} weight="duotone" aria-hidden="true" />;
}

export default CategoryIcon;
