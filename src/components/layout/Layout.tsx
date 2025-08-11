import { type FC, ReactNode } from "react";

interface ILay {
  children: ReactNode;
}

const Layout: FC<ILay> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
