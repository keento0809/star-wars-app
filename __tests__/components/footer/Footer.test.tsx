import { Footer } from "@/app/_components/footer/Footer";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Footer", () => {
  const renderComponent = () => {
    render(<Footer />);

    const select = screen.getByRole("combobox");
    const user = userEvent.setup();

    return { select, user };
  };

  it("should display selected option when an option is selected", async () => {
    const { select, user } = renderComponent();
    const mockOption = "ENG";

    await user.selectOptions(select, mockOption);

    expect(await screen.findByText(mockOption)).toBeInTheDocument();
  });
});
