import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-7xl bg-white px-4 md:px-5 mx-auto ">{children}</div>
  );
};
export default Container;
