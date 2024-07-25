"use client";

import { FC } from "react";
import { TestQuery } from "./graphql/generated";

type HomePageProps = {
  data: TestQuery;
};

export const HomePage: FC<HomePageProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h4>HomePage</h4>
    </div>
  );
};
