import { ReactNode } from "react";
import { FlexColumnWrapper } from "./styled";

interface FlexColumnProps {
  children: ReactNode;
  direction?: "column" | "row";
  items: "start" | "center" | "end";
  justify: "start" | "center" | "end" | "space-between";
  styles?: string;
  extraSpaceFromEdgeOfScreen?: boolean;
  minusExtraSpaceFromEdgeOfScreen?: boolean;
  id?: string;
}

export const FlexColumn = ({
  children,
  direction = "column",
  items,
  justify,
  styles,
  extraSpaceFromEdgeOfScreen = false,
  minusExtraSpaceFromEdgeOfScreen,
  id,
}: FlexColumnProps) => {
  return (
    <FlexColumnWrapper
      direction={direction}
      items={items}
      justify={justify}
      styles={styles}
      extraSpaceFromEdgeOfScreen={extraSpaceFromEdgeOfScreen || undefined}
      minusExtraSpaceFromEdgeOfScreen={minusExtraSpaceFromEdgeOfScreen}
      id={id}
    >
      {children}
    </FlexColumnWrapper>
  );
};
