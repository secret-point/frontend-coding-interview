import type React from "react";
import Header from "./Header";
import Container from "../Container";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col overflow-hidden h-[100vh]">
      <Header />
      <div className="flex-grow h-full overflow-y-auto">
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default Layout;
