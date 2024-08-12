import { Modal } from "@/app/_components/modal/Modal";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Modal", () => {
  const renderComponent = () => {
    const onCloseMock = jest.fn();
    const user = userEvent.setup();

    render(<Modal />);

    const modalContents = screen.getByText(/modal/i);
    const closeButton = screen.getByLabelText("close");
    const link = screen.getByRole("link", { name: /apply/i });

    return { user, onCloseMock, modalContents, closeButton, link };
  };

  it("should render child components", () => {
    const { modalContents } = renderComponent();

    expect(modalContents).toBeInTheDocument();
  });

  it("should call onClose function when the close button is clicked", async () => {
    const { user, closeButton, onCloseMock } = renderComponent();

    await user.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("should transfer to the page when the link is clicked", async () => {
    const { link, user } = renderComponent();

    await user.click(link);

    expect(link).toHaveAttribute("href", "/apply");
  });
});
