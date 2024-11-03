type Label = "概要" | "お問い合わせ" | "カウンター";
type RouteKeyword = "contact" | "about" | "counter";

type BreadCrumbObj = {
  label: Label;
  routeKeyword: RouteKeyword;
};

export type { Label, RouteKeyword, BreadCrumbObj };
