import { ReactNode } from "react";
import { FlexColumnWrapper } from "./styled";

interface FlexColumnProps {
  children: ReactNode;
  direction?: "column" | "row";
  items: "start" | "center" | "end";
  justify: "start" | "center" | "end" | "space-between";
  styles?: string;
  layoutMargin?: boolean;
}

export const FlexColumn = ({
  children,
  direction = "column",
  items,
  justify,
  styles,
  layoutMargin,
}: FlexColumnProps) => {
  return (
    <FlexColumnWrapper
      direction={direction}
      items={items}
      justify={justify}
      styles={styles}
      layoutMargin={layoutMargin}
    >
      {children}
    </FlexColumnWrapper>
  );
};
