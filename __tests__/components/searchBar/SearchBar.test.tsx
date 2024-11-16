import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "../../../app/_components/searchBar/SearchBar";
import React from "react";
import userEvent from "@testing-library/user-event";
import { useFilmsStore } from "@/app/_store/_hooks/films/useFilmsStore";

jest.mock("../../../app/_store/_hooks/films/useFilmsStore");

const renderSearchBar = () => {
  render(<SearchBar />);

  const input = screen.getByRole("textbox");
  const placeholder = screen.getByPlaceholderText(/search/i);
  const user = userEvent.setup();

  return { input, placeholder, user };
};

describe("SearchBar", () => {
  const mockSetSearchQuery = jest.fn();

  beforeEach(() => {
    (useFilmsStore as unknown as jest.Mock).mockReturnValue({
      searchQuery: "",
      setSearchQuery: mockSetSearchQuery,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render search input with placeholder", () => {
    const { input, placeholder } = renderSearchBar();

    expect(input).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
  });

  it("should update search query when typing", async () => {
    const { input } = renderSearchBar();

    await fireEvent.change(input, { target: { value: "test" } });

    expect(mockSetSearchQuery).toHaveBeenCalledWith("test");
  });

  it("should display correct search query value on SearchBar", async () => {
    const mockValue = "Star Wars";

    (useFilmsStore as unknown as jest.Mock).mockReturnValue({
      searchQuery: "Star Wars",
      setSearchQuery: mockSetSearchQuery,
    });

    const { input } = renderSearchBar();

    await fireEvent.change(input, { target: { value: mockValue } });

    expect(input).toHaveValue(mockValue);
  });
});
