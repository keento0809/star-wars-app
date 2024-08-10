"use client";

import { FC } from "react";
import { Film } from "./_graphql/generated";
import { List } from "./_components/list/List";
import { Footer } from "./_components/footer/Footer";
import { useModalStore } from "./_store/store";
import { notificationToast } from "./_components/toast/Toast";
import Link from "next/link";

type HomePageProps = {
  data: Film[];
};

export const HomePage: FC<HomePageProps> = ({ data }) => {
  const { openModal } = useModalStore();

  const newData = data.map((d) => {
    return { ...d, type: "film" };
  });

  return (
    <div className="p-6">
      <Link
        href="/apply"
        className="bg-blue-300 py-2 px-8 rounded-2xl border border-blue-700"
      >
        Apply
      </Link>
      <List data={newData} />
      <div className="text-purple-500 font-bold text-xl w-1/4 mx-auto">
        <div className="py-8 flex flex-col gap-8">
          <button
            className="border-purple-500 border py-2 px-6 rounded-lg"
            onClick={() => openModal(<div>aaaaaaa</div>)}
          >
            Open Modal
          </button>
          <button
            className="border-blue-400 rounded-md font-lg font-semibold px-6 py-1.5"
            onClick={notificationToast}
          >
            Show Toast
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
