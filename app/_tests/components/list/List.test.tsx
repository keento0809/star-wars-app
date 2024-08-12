import { List } from "@/app/_components/list/List";
import { Film } from "@/app/_graphql/generated";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("List", () => {
  const mockData: Film[] = [
    {
      created: "2014-12-10T14:23:31.880000Z",
      director: "George Lucas",
      id: "ZmlsbXM6MQ==aji0u0243hjofhqio3jho4f",
      releaseDate: "1977-05-25",
      title: "A New Hope",
    },
    {
      created: "2014-12-10T14:23:31.880000Z",
      director: "George Lucas",
      id: "ZmlsbXqhu99q2394M6MQ==",
      releaseDate: "1977-05-25",
      title: "A New Hope",
    },
  ];

  const renderComponent = () => {
    render(<List data={mockData} />);

    const user = userEvent.setup();
    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    return { user, list, listItems };
  };

  it("should render data from graphql", () => {
    const { list, listItems } = renderComponent();

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(mockData.length);

    listItems.forEach((item) => {
      const title = screen.getByText(`${item.title}`);
      expect(title).toBeInTheDocument();
    });
  });
});
