import { HomePage } from "@/app/HomePage";
import { render, screen } from "@testing-library/react";
import { Film } from "@/app/_graphql/generated";
import "@testing-library/jest-dom";

export const mockFilms: Film[] = [
  {
    id: "1",
    title: "A New Hope",
    releaseDate: "1977-05-25",
    created: "2021-01-01",
    director: "George Lucas",
  },
];

describe("homePage", () => {
  const renderComp = () => {
    const data = mockFilms;

    render(<HomePage data={data} />);
  };

  it("should render data when the page is loaded", () => {
    renderComp();

    const title = screen.getByText(/page/i);

    expect(title).toBeInTheDocument();
  });
});
