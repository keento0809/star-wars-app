import { create } from "zustand";
import { FilmsStore } from "../../_types/films/films";
import { filmsStoreCreator } from "../../store";

export const useFilmsStore = create<FilmsStore>()(filmsStoreCreator);
