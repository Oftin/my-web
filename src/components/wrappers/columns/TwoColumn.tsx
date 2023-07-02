import { ReactNode } from "react";
import { TwoColumnWrapper } from "./styled";

interface TwoColumnProps {
  children: ReactNode;
  gap?: number;
}

export const TwoColumn = ({ children, gap }: TwoColumnProps) => {
  return <TwoColumnWrapper gap={gap || 0}>{children}</TwoColumnWrapper>;
};
