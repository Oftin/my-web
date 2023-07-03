import { ReactNode } from "react";
import { FlexColumnWrapper } from "./styled";

interface FlexColumnProps {
  children: ReactNode;
  items: "start" | "center" | "end";
  justify: "start" | "center" | "end";
  styles?: string;
}

export const FlexColumn = ({
  children,
  items,
  justify,
  styles,
}: FlexColumnProps) => {
  return (
    <FlexColumnWrapper items={items} justify={justify} styles={styles}>
      {children}
    </FlexColumnWrapper>
  );
};
