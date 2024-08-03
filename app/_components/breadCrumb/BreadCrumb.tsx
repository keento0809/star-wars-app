"use client";

import { Fragment, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Breadcrumb = ({ separator }: { separator: ReactNode }) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  // スラッグでタイトルを変える
  const getBreadcrumbTitle = (link: (typeof pathNames)[0]) => {
    switch (link) {
      case "guidebooks":
        return "breadcrumbs.guidebook";

      case "beginner-guide":
        return "breadcrumbs.origamiBeginnerGuide";

      case "how-to-fold-origami":
        return "breadcrumbs.howToFoldOrigami";

      case "how-to-send-origami":
        return "breadcrumbs.howToSendOrigami";

      case "about-match":
        return "breadcrumbs.aboutMatch";

      case "about-marketplace":
        return "breadcrumbs.aboutMarketplace";

      default:
        return "Home";
    }
  };

  return (
    <ul className="flex items-center gap-1 text-xs text-gray-purple">
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;

        return (
          <Fragment key={link}>
            <li className="font-medium leading-8 hover:underline">
              <Link href={href}>{getBreadcrumbTitle(link)}</Link>
            </li>
            {pathNames.length !== index + 1 && separator}
          </Fragment>
        );
      })}
    </ul>
  );
};
