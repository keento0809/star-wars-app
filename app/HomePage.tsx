"use client";

import { useState } from "react";
import { Film } from "./_graphql/generated";
import { List } from "./_components/list/List";
import { Breadcrumb } from "./_components/breadCrumb/BreadCrumb";
import { Modal } from "./_components/modal/Modal";
import { Footer } from "./_components/footer/Footer";

type HomePageProps = {
  data: Film[];
};

export const HomePage = ({ data }: HomePageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const newData = data.map((d) => {
    return { ...d, type: "film" };
  });

  return (
    <div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div>Modal contents</div>
        </Modal>
      )}
      <div className="text-purple-500 font-bold text-xl">
        <h2 className="pb-4">この下は、breadCrumb</h2>
        <div className="py-8">
          <button
            className="border-purple-500 border py-2 px-6 rounded-lg"
            onClick={() => setIsOpen(true)}
          >
            Open
          </button>
        </div>
        <Breadcrumb />
      </div>
      <List data={newData} />
      <Footer />
    </div>
  );
};
