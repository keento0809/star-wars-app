import { Breadcrumb } from "../_components/breadCrumb/BreadCrumb";
import { getFilmData } from "../_lib/client";

export default async function Page() {
  const films = await getFilmData();

  return (
    <div>
      <Breadcrumb />
      <ul className="list-none py-8">
        {films?.map((film) => {
          return (
            <li key={film.id}>
              <h4 className="py-2">{film.title}</h4>
              <p className="py-4">{film.openingCrawl}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
