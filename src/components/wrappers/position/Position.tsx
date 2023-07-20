import { ReactNode } from "react";
import { PositionWrapper } from "./styled";

interface PositionProps {
  children: ReactNode;
  flexDirection?: "column" | "row";
  justifyContent?: "start" | "center" | "end" | "space-between";
  alignItems?: "start" | "center" | "end";
  alignContent?: "start" | "center" | "end";
  styles?: string;
}

export const Position = ({
  children,
  flexDirection = "column",
  justifyContent = "center",
  alignItems = "center",
  alignContent = "center",
  styles,
}: PositionProps) => {
  return (
    <PositionWrapper
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $alignContent={alignContent}
      $styles={styles}
    >
      {children}
    </PositionWrapper>
  );
};
