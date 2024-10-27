import { useFilmsStore } from "@/app/_store/store";

export const useNav = () => {
  const { filteredFilmsCount } = useFilmsStore();

  return {
    filteredFilmsCount,
  };
};
