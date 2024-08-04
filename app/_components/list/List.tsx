import { Film } from "@/app/_graphql/generated";
import { formatDate } from "@/app/_utils";

type ListProps<T> = {
  data: Array<T>;
};

export const List = <T extends Film>({ data }: ListProps<T>) => {
  return (
    <ul>
      {data?.map((d) => {
        return (
          <li key={d.id} className="py-4">
            <div className="py-2">{d.title}</div>
            <div className="py-2">
              {d.created ? formatDate(d.created) : ""} {d.edited}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
