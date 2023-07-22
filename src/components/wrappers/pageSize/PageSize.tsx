import { ReactNode } from "react";
import { PageSizeWrapper } from "./styled";

interface PageSizeProps {
  children: ReactNode;
}

export const PageSize = ({ children }: PageSizeProps) => {
  return <PageSizeWrapper>{children}</PageSizeWrapper>;
};
