import { Footer } from "@/app/_components/footer/Footer";
import { screen, render } from "@testing-library/react";

describe("Footer", () => {
  const renderComponent = () => {
    const select = screen.getByRole("combobox");

    render(<Footer />);

    return { select };
  };

  it("should display selected option when an option is selected", () => {});
});
