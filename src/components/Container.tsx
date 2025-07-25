import type React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-2xl mx-auto h-full w-full justify-center flex px-4">
      {children}
    </div>
  );
};

export default Container;
