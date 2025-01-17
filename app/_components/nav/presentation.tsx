"use client";

import { useFilmsStore } from "@/app/_store/_hooks/films/useFilmsStore";
import { Film } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const NavPresentation: FC = () => {
  const { filteredFilmsCount } = useFilmsStore();
  const pathname = usePathname();

  return (
    <div className="sticky flex justify-between top-0 left-0 w-full min-h-[30px] px-4 md:px-8 py-2 md:py-4 xl:max-w-7xl mx-auto xl:px-2">
      <Link href="/" className="flex items-center gap-2">
        <Film className="h-8 w-8 text-blue-600" />
        <span className="font-semibold">SWF</span>
      </Link>
      {pathname === "/" ? (
        <span>
          <strong>{filteredFilmsCount}</strong> hits
        </span>
      ) : null}
    </div>
  );
};
