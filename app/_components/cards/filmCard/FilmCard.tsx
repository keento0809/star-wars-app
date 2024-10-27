// import { useFilmsStore } from '@/lib/store';
import { Calendar, User } from "lucide-react";

interface FilmCardProps {
  id: string;
  title: string;
  releaseDate: string;
  director: string;
  openingCrawl: string;
}

export function FilmCard({
  id,
  title,
  releaseDate,
  director,
  openingCrawl,
}: FilmCardProps) {
  //   const { setSelectedFilm } = useFilmsStore();

  return (
    <div
      className="group cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl"
      //   onClick={() => setSelectedFilm({ id, title, releaseDate, director, openingCrawl })}
      data-testid="film-card"
    >
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{new Date(releaseDate).getFullYear()}</span>
        </div>
        <div className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>{director}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 line-clamp-3">{openingCrawl}</p>
    </div>
  );
}
