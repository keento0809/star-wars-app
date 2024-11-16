import { FC, ReactNode } from "react";
import { Footer } from "../footer/Footer";
import { NavContainer } from "../nav";
import { PortalContainer } from "../portal";
import { BreadCrumbContainer } from "../breadCrumb";
import { cookies } from "next/headers";

type LayoutProps = {
  children: ReactNode;
};

export const RootClient: FC<LayoutProps> = ({ children }) => {
  const nextCookies = cookies();

  return (
    <div className="w-full min-h-[100svh]">
      <PortalContainer />
      <NavContainer />
      <BreadCrumbContainer />
      {children}
      <Footer />
    </div>
  );
};
