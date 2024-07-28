import { List } from "@/app/components/list/List";
import { screen, render } from "@testing-library/react";
import { mockFilms } from "../../homePage/HomePage.test";

describe("List", () => {
  const renderList = () => {
    render(<List data={mockFilms} />);
  };

  it("should render data when the page is loaded", () => {
    renderList();

    const lists = screen.getAllByRole("list");

    lists.forEach((list) => expect(list).toBeInTheDocument());
  });
});
