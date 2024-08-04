"use client";

import { Film } from "./_graphql/generated";
import { List } from "./_components/list/List";
import { Breadcrumb } from "./_components/breadCrumb/BreadCrumb";

type HomePageProps = {
  data: Film[];
};

export const HomePage = ({ data }: HomePageProps) => {
  const newData = data.map((d) => {
    return { ...d, type: "film" };
  });
  return (
    <div>
      <div className="text-purple-500 font-bold text-xl">
        <h2 className="pb-4">この下は、breadCrumb</h2>
        <Breadcrumb />
      </div>
      <List data={newData} />
    </div>
  );
};
