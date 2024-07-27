import { Film } from "@/app/graphql/generated";
import { formatDate } from "@/app/utils";

type ListProps<T> = {
  data: Array<T>;
};

export const List = <T extends Film>({ data }: ListProps<T>) => {
  console.log("data in a child component: ", data);
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
