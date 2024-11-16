import { BreadCrumbObj } from "../_types/breadCrumb";

export const BREADCRUMB_ARRAY: BreadCrumbObj[] = [
  { label: "概要", routeKeyword: "about" },
  { label: "お問い合わせ", routeKeyword: "contact" },
  { label: "カウンター", routeKeyword: "counter" },
  { label: "キャラクター", routeKeyword: "characters" },
] as const;
