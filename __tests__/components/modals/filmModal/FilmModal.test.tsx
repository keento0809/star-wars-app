import { FilmCard } from "@/app/_components/cards/filmCard/FilmCard";
import { Portal } from "@/app/_components/portal/Portal";
import { SearchBar } from "@/app/_components/searchBar/SearchBar";
import { useFilmsStore } from "@/app/_store/_hooks/films/useFilmsStore";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { before } from "node:test";

jest.mock("../../../../app/_store/_hooks/films/useFilmsStore");

const mockSelectedFilm = jest.fn();
const mockFilm = {
  id: "1",
  title: "Star Wars",
  releaseDate: "1977-05-25",
  director: "George Lucas",
  openingCrawl: "A long time ago...",
};

const renderFilmModal = () => {
  render(
    <>
      <Portal />
      <SearchBar />
      <FilmCard {...mockFilm} />
    </>
  );

  const modal = screen.queryByTestId("film-modal");
  const card = screen.getByTestId("film-card");

  return { modal, card };
};

describe("FilmModal", () => {
  beforeEach(() => {
    (useFilmsStore as unknown as jest.Mock).mockReturnValue({
      selectedFilm: null,
      setSelectedFilm: mockSelectedFilm,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render null when no film is selected", () => {
    const { modal } = renderFilmModal();

    expect(modal).toEqual(null);
  });

  it("should render modal when film is selected", async () => {
    const { card } = renderFilmModal();

    await act(async () => {
      await fireEvent.click(card);
    });

    expect(await screen.findByTestId("film-modal")).toBeInTheDocument();
  });
});
