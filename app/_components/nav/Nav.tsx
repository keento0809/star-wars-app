import { useCountStore } from "@/app/_store/store";
import { FC } from "react";

export const Nav: FC = () => {
  const { count } = useCountStore();
  return (
    <div className="fixed top-0 left-0 w-full min-h-[30px] px-4 py-1">
      Count: {count}
    </div>
  );
};
