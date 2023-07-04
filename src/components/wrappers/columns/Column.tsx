import { ReactNode } from "react";
import { ColumnWrapper } from "./styled";

interface ColumnProps {
  children: ReactNode;
  numberOfColumns: number;
  gap?: number;
  styles?: string;
  layoutMargin?: boolean;
}

export const Column = ({
  children,
  numberOfColumns,
  gap,
  styles,
  layoutMargin,
}: ColumnProps) => {
  return (
    <ColumnWrapper
      numberOfColumns={numberOfColumns}
      gap={gap || 0}
      styles={styles || ""}
      layoutMargin={layoutMargin}
    >
      {children}
    </ColumnWrapper>
  );
};
