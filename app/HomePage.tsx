"use client";

import { Film } from "./graphql/generated";
import { List } from "./components/list/List";

type HomePageProps = {
  data: Film[];
};

export const HomePage = ({ data }: HomePageProps) => {
  const newData = data.map((d) => {
    return { ...d, type: "film" };
  });
  return (
    <div>
      <h4>HomePage</h4>
      <List data={newData} />
    </div>
  );
};
