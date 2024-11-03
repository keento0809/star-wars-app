import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TEMPLATE_OBJ_ARRAY } from "../_constants/forming";
import { useRouter } from "next/navigation";

export type TemplateObj = {
  title: string;
  body: string;
};

type FormingSchemaType = z.infer<typeof formingSchema>;

const formingSchema = z.object({
  select: z.string(),
  body: z
    .string({ required_error: "入力してください" })
    .min(1, { message: "ボディを入力してください" }),
});

export const useForming = () => {
  const [templateObjs, setTemplateObjs] =
    useState<TemplateObj[]>(TEMPLATE_OBJ_ARRAY);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm<FormingSchemaType>({
    resolver: zodResolver(formingSchema),
    defaultValues: {
      select: "",
      body: "",
    },
  });

  const handleSetTemplateObjs = (newTemplateObj: TemplateObj) => {
    setTemplateObjs([...templateObjs, newTemplateObj]);
  };

  const onSubmit = async () => {
    const values = getValues();
    console.log("onSubmit...", values);
  };

  return {
    router,
    errors,
    watch,
    control,
    handleSubmit,
    onSubmit,
    templateObjs,
    handleSetTemplateObjs,
  };
};
