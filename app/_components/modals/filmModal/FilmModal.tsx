import { useFilmsStore } from "@/app/_store/_hooks/films/useFilmsStore";
import { X } from "lucide-react";

export function FilmModal() {
  const { selectedFilm, setSelectedFilm } = useFilmsStore();

  if (!selectedFilm) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div
        onClick={() => setSelectedFilm(null)}
        className="absolute inset-0 bg-black bg-opacity-50"
        data-testid="film-modal"
      />
      <div className="relative z-50 w-full max-w-[400px] max-h-[480px] overflow-y-auto rounded-lg bg-white p-6">
        <button
          onClick={() => setSelectedFilm(null)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          data-testid="close-modal"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          {selectedFilm.title}
        </h2>
        <div className="mb-4 flex gap-4 text-sm text-gray-600">
          <p>
            Released:{" "}
            {selectedFilm.releaseDate
              ? new Date(selectedFilm.releaseDate).toLocaleDateString()
              : ""}
          </p>
          <p>Director: {selectedFilm.director}</p>
        </div>
        <p className="whitespace-pre-line text-gray-700">
          {selectedFilm.openingCrawl}
        </p>
      </div>
    </div>
  );
}
