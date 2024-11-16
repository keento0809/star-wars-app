type Label = "概要" | "お問い合わせ" | "カウンター" | "キャラクター";
type RouteKeyword = "contact" | "about" | "counter" | "characters";

type BreadCrumbObj = {
  label: Label;
  routeKeyword: RouteKeyword;
};

export type { Label, RouteKeyword, BreadCrumbObj };
