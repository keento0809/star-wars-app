import { useCountStore } from "@/app/_store/store";
import { FC } from "react";

export const AddButton: FC = () => {
  const { inc, count } = useCountStore();
  return (
    <>
      <p className="pb-4 text-orange-400">Current Count: {count}</p>
      <button
        className="bg-blue-600 rounded-xl px-8 py-2 text-md"
        onClick={inc}
      >
        AddButton
      </button>
    </>
  );
};
