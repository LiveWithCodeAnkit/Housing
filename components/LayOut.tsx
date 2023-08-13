import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
