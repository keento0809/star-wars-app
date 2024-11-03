type Label = "概要" | "お問い合わせ" | "カウンター";
type RouteKeyword = "contact" | "about" | "counter";

type BreadCrumbObject = {
  label: Label;
  routeKeyword: RouteKeyword;
};

export const BREADCRUMB_ARRAY: BreadCrumbObject[] = [
  { label: "概要", routeKeyword: "about" },
  { label: "お問い合わせ", routeKeyword: "contact" },
  { label: "カウンター", routeKeyword: "counter" },
] as const;
