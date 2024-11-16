"use client";

import { useEffect } from "react";
import { Wrapper } from "./_components/wrapper/Wrapper";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Wrapper>
      <div className="text-center font-md pt-10">
        <p className="py-6">Error has occurred!!</p>
        <button
          className="border border-slate-600 rounded-lg py-1.5 px-8 text-sm"
          onClick={() => reset()}
        >
          try again
        </button>
      </div>
    </Wrapper>
  );
}
