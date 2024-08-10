type Label = "応募" | "お問い合わせ";
type RouteKeyword = "contact" | "apply";

type BreadCrumbObject = {
  label: Label;
  routeKeyword: RouteKeyword;
};

export const BREADCRUMB_ARRAY: BreadCrumbObject[] = [
  { label: "応募", routeKeyword: "apply" },
  { label: "お問い合わせ", routeKeyword: "contact" },
] as const;
