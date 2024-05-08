import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-7xl px-5 md:px-8 mx-auto">{children}</div>;
};
export default Container;
