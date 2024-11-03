import { Film } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const Nav: FC = () => {
  return (
    <div className="sticky top-0 left-0 w-full min-h-[30px] px-4 md:px-8 py-2 md:py-4 xl:max-w-7xl mx-auto xl:px-2">
      <Link href="/" className="flex items-center gap-2">
        <Film className="h-8 w-8 text-blue-600" />
        <span className="font-semibold">SWF</span>
      </Link>
    </div>
  );
};
