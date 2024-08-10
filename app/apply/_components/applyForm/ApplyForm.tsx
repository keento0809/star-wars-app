"use client";

import { FC } from "react";

type FormSchema = {
  id: string;
  name: string;
  age: number;
  isOk: boolean;
};

export const ApplyForm: FC = () => {
  return <div>ApplyForm</div>;
};

export default ApplyForm;

function isFormSchema(item: unknown): item is FormSchema {
  if (typeof item !== "object" && item === null) return false;
}
