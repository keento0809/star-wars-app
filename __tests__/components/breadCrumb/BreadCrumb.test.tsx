import { Breadcrumb } from "@/app/_components/breadCrumb/BreadCrumb";
import { BREADCRUMB_ARRAY } from "@/app/_components/breadCrumb/_constants/breadCrumb";
import {
  BreadCrumbObj,
  RouteKeyword,
} from "@/app/_components/breadCrumb/_types/breadCrumb";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("next/link", () => {
  // eslint-disable-next-line react/display-name
  return ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

const renderBreadCrumb = () => {
  render(<Breadcrumb />);

  const user = userEvent.setup();
  const homeLink = screen.getByRole("link", { name: "トップページ" });

  return { user, homeLink };
};

describe("BreadCrumb", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReset();
  });

  it("should render home link", () => {
    (usePathname as jest.Mock).mockReturnValue("/");

    const { homeLink } = renderBreadCrumb();

    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("should render separators correctly", async () => {
    const mockPathname: RouteKeyword = "about";
    (usePathname as jest.Mock).mockReturnValue(`/${mockPathname}`);
    renderBreadCrumb();

    const separators = await screen.findAllByText("＞");
    const correspondingObj: BreadCrumbObj | undefined = BREADCRUMB_ARRAY.find(
      (obj) => obj["routeKeyword"] === mockPathname
    );

    expect(separators).toHaveLength(1);
    expect(correspondingObj).not.toBeUndefined();
  });
});
