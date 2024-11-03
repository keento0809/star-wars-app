import {
  FilmCard,
  FilmCardProps,
} from "@/app/_components/cards/filmCard/FilmCard";
import { Portal } from "@/app/_components/portal/Portal";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockProps: FilmCardProps = {
  id: "1",
  title: "A New Hope",
  releaseDate: "1977-05-25",
  director: "George Lucas",
  openingCrawl: "It is a period of civil war.",
};

const renderFilmCard = () => {
  render(
    <>
      <FilmCard {...mockProps} />
      <Portal />
    </>
  );

  const card = screen.getByTestId("film-card");
  const user = userEvent.setup();

  return { user, card };
};

describe("FilmCard", () => {
  it("should render FilmCard properly", () => {
    renderFilmCard();

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("should open modal when filmCard is clicked", async () => {
    const { user, card } = renderFilmCard();

    await user.click(card);

    const modal = await screen.findByTestId("film-modal");
    expect(modal).toBeInTheDocument();
  });
});
