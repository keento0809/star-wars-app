"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BREADCRUMB_ARRAY } from "./_constants";

export const Breadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const separator = <span className="inline-block px-2">＞</span>;
  const defaultBreadCrumb = (
    <li className="font-medium leading-8 hover:cursor-pointer">
      <Link href="/">トップページ</Link>
    </li>
  );

  // スラッグでタイトルを変える
  const getBreadcrumbTitle = (link: (typeof pathNames)[0]) => {
    const correspondingObj = BREADCRUMB_ARRAY.find(
      (obj) => obj["routeKeyword"] === link
    );
    if (!correspondingObj) {
      return null;
    }
    return correspondingObj["label"];
  };

  return (
    <ul className="mx-auto px-8 pt-2 xl:max-w-7xl xl:px-2 flex items-center gap-1 text-xs text-gray-purple">
      {defaultBreadCrumb}
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const breadCrumbTitle = getBreadcrumbTitle(link);

        return (
          <li key={link}>
            {index === 0 && breadCrumbTitle !== null && separator}
            <span className="font-medium leading-8 hover:cursor-pointer">
              <Link href={href}>{breadCrumbTitle}</Link>
            </span>
            {pathNames.length !== index + 1 &&
              breadCrumbTitle !== null &&
              separator}
          </li>
        );
      })}
    </ul>
  );
};
