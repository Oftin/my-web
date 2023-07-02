import { ReactNode } from "react";
import { FlexColumnWrapper } from "./styled";

interface FlexColumnProps {
  children: ReactNode;
  items: "start" | "center" | "end";
  justify: "start" | "center" | "end";
}

export const FlexColumn = ({ children, items, justify }: FlexColumnProps) => {
  return (
    <FlexColumnWrapper items={items} justify={justify}>
      {children}
    </FlexColumnWrapper>
  );
};
