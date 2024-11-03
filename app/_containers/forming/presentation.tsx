"use client";

import { Wrapper } from "@/app/_components/wrapper/Wrapper";
import { PropsWithChildren } from "react";
import { Controller } from "react-hook-form";
import { useForming } from "./_hooks/useForming";

export const FormingPresentation = ({ children }: PropsWithChildren) => {
  const {
    router,
    errors,
    control,
    handleSubmit,
    onSubmit,
    templateObjs,
    watch,
  } = useForming();

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-10 lg:max-w-md mx-auto">
          <Controller
            name="select"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <select
                {...field}
                onChange={onChange}
                value={value}
                className="px-1 py-1.5 border border-slate-600 rounded-lg cursor-pointer"
              >
                <option value="">Select</option>
                {templateObjs.map((obj, idx) => (
                  <option key={obj.title + idx} value={obj.title}>
                    {obj.title}
                  </option>
                ))}
              </select>
            )}
          />
          <div className="w-full">
            {errors.body?.message && (
              <p className="text-red-500 pb-1.5">{errors.body.message}</p>
            )}
            <Controller
              name="body"
              control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <textarea
                  {...field}
                  onChange={onChange}
                  value={
                    templateObjs.find((obj) => obj.title === watch("select"))
                      ?.body
                      ? templateObjs.find(
                          (obj) => obj.title === watch("select")
                        )?.body
                      : value
                  }
                  className="border border-slate-600 rounded-lg pt-1 pl-1 w-full"
                />
              )}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="border border-slate-600 rounded-md px-8 py-1.5"
            >
              Submit
            </button>
          </div>
        </div>
        <div></div>
      </form>
      {children}
    </Wrapper>
  );
};
