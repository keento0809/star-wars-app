import { useCounterStore } from "@/app/_store/_hooks/counter/useCounterStore";
import { FC } from "react";

export const Counter: FC = () => {
  const { count, inc } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold">Counter Store</h2>
      <h4 className="text-lg">{count}</h4>
      <button
        onClick={inc}
        className="border-blue-500 border text-blue-500 px-4 py-2 rounded-md"
      >
        One Up
      </button>
    </div>
  );
};
