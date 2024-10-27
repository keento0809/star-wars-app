// import { useFilmsStore } from '@/lib/store';
import { X } from "lucide-react";

export function FilmModal() {
  //   const { selectedFilm, setSelectedFilm } = useFilmsStore();
  //   if (!selectedFilm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
        <button
          //   onClick={() => setSelectedFilm(null)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          data-testid="close-modal"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          aaa
          {/* {selectedFilm.title} */}
        </h2>
        <div className="mb-4 flex gap-4 text-sm text-gray-600">
          <p>
            Released: 2024/08/19
            {/* {new Date(selectedFilm.releaseDate).toLocaleDateString()} */}
          </p>
          <p>
            Director: George Lucas
            {/* {selectedFilm.director} */}
          </p>
        </div>
        <p className="whitespace-pre-line text-gray-700">
          openingCrawl
          {/* {selectedFilm.openingCrawl} */}
        </p>
      </div>
    </div>
  );
}
