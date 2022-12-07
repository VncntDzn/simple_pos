import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return <div>{children}</div>;
};

MainLayout.propTypes = {};

export default MainLayout;
