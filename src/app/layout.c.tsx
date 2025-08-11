"use client";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { type FC, ReactNode } from "react";
interface ILay {
  children: ReactNode;
}

const LayoutSite: FC<ILay> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default LayoutSite;
