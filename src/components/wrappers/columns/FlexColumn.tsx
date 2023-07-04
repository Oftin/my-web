import { ReactNode } from "react";
import { FlexColumnWrapper } from "./styled";

interface FlexColumnProps {
  children: ReactNode;
  direction?: "column" | "row";
  items: "start" | "center" | "end";
  justify: "start" | "center" | "end" | "space-between";
  styles?: string;
}

export const FlexColumn = ({
  children,
  direction = "column",
  items,
  justify,
  styles,
}: FlexColumnProps) => {
  return (
    <FlexColumnWrapper
      direction={direction}
      items={items}
      justify={justify}
      styles={styles}
    >
      {children}
    </FlexColumnWrapper>
  );
};
