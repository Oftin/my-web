import { ReactNode } from "react";
import { LayoutBackgroundColors } from "./styled";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <LayoutBackgroundColors>{children}</LayoutBackgroundColors>;
};
