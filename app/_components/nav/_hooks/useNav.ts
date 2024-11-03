import { useFilmsStore } from "@/app/_store/_hooks/films/useFilmsStore";

export const useNav = () => {
  const { filteredFilmsCount } = useFilmsStore();

  return {
    filteredFilmsCount,
  };
};
