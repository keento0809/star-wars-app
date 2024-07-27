import { HomePage } from "@/app/HomePage";
import { render, screen } from "@testing-library/react";
import { MockedResponse } from "@apollo/client/testing";
import { QUERY_FILMS } from "@/app/graphql/client";
import { Film, FilmsQuery } from "@/app/graphql/generated";
import "@testing-library/jest-dom";

const mockData: MockedResponse<FilmsQuery>[] = [
  {
    request: {
      query: QUERY_FILMS,
    },
    result: {
      data: {
        allFilms: {
          films: [
            {
              id: "1",
              title: "A New Hope",
              releaseDate: "1977-05-25",
              created: "2021-01-01",
              director: "George Lucas",
              characterConnection: {
                __typename: "FilmCharactersConnection",
                totalCount: 10,
                characters: [
                  {
                    __typename: "Person",
                    birthYear: "19BBY",
                    created: "2021-01-01",
                    edited: "2021-01-01",
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
];

const mockFilms: Film[] = [
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
