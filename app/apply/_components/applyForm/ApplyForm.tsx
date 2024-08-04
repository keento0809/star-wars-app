"use client";

import { getFilmData } from "@/app/_lib/client";
import { FC } from "react";

export const ApplyForm: FC = () => {
  getFilmData()
    .then((res) => console.log("res: ", res))
    .catch((error) => console.log(error));
  return <div>ApplyForm</div>;
};

export default ApplyForm;
