import { useFilmsStore } from "@/app/_store/_hooks/films/useFilmsStore";
import { X } from "lucide-react";

export function FilmModal() {
  const { selectedFilm, setSelectedFilm } = useFilmsStore();

  if (!selectedFilm) return null;

  return (
    <>
      <div
        onClick={() => setSelectedFilm(null)}
        className="fixed inset-0 top-0 right-0 bottom-0 left-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4"
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[400px] max-h-[480px] overflow-y-auto rounded-lg bg-white p-6">
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
    </>
  );
}
