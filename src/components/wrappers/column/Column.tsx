import { ReactNode } from "react";
import { ColumnWrapper } from "./styled";

interface ColumnProps {
  children: ReactNode;
  columns: number;
  gap?: number;
  styles?: string;
}

export const Column = ({ children, columns, gap, styles }: ColumnProps) => {
  return (
    <ColumnWrapper $columns={columns} $gap={gap} $styles={styles}>
      {children}
    </ColumnWrapper>
  );
};
