import { useFilmsStore } from "@/app/_store/store";
import { Search } from "lucide-react";
import { FC } from "react";

export const SearchBar: FC = () => {
  const { searchQuery, setSearchQuery } = useFilmsStore();

  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search films..."
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        data-testid="search-input"
      />
    </div>
  );
};
