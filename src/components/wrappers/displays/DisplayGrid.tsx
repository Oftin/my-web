import { ReactNode } from "react";
import { DisplayGridWrapper } from "./styled";

interface DisplayGridProps {
  children: ReactNode;
  numberOfColumn?: number;
  numberOfRows?: number;
  styles?: string;
}

export const DisplayGrid = ({
  children,
  numberOfColumn,
  numberOfRows,
  styles,
}: DisplayGridProps) => {
  return (
    <DisplayGridWrapper
      $numberOfColumn={numberOfColumn}
      $numberOfRows={numberOfRows}
      styles={styles}
    >
      {children}
    </DisplayGridWrapper>
  );
};
