import { ReactNode } from "react";
import { ColumnWrapper } from "./styled";

interface ColumnProps {
  children: ReactNode;
  columns: number;
  gap?: number;
  styles?: string;
  extraSpaceFromEdgeOfScreen?: boolean;
}

export const Column = ({
  children,
  columns,
  gap,
  styles,
  extraSpaceFromEdgeOfScreen = false,
}: ColumnProps) => {
  return (
    <ColumnWrapper
      columns={columns}
      gap={gap || 0}
      styles={styles || ""}
      extraSpaceFromEdgeOfScreen={extraSpaceFromEdgeOfScreen || undefined}
    >
      {children}
    </ColumnWrapper>
  );
};
