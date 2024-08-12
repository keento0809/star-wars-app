import { Film } from "@/app/_graphql/generated";
import { formatDate } from "@/app/_utils";
import Link from "next/link";

type ListProps<T> = {
  data: Array<T>;
};

export const List = <T extends Film>({ data }: ListProps<T>) => {
  console.log("d: ", data[0]);
  return (
    <ul className="flex flex-wrap items-center gap-8">
      {data?.map((d) => {
        return (
          <li key={d.id} className="p-2">
            <div className="py-1 underline">{d.title}</div>
            <div className="py-1 mb-4">
              {d.created ? formatDate(d.created) : ""} {d.edited}
            </div>
            <Link
              className="px-6 py-1.5 rounded-xl border border-pink-500 text-xs"
              href={`/film/${d.id}`}
            >
              Move
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
