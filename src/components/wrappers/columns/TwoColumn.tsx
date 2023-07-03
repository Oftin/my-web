import { ReactNode } from "react";
import { TwoColumnWrapper } from "./styled";

interface TwoColumnProps {
  children: ReactNode;
  gap?: number;
  styles?: string;
}

export const TwoColumn = ({ children, gap, styles }: TwoColumnProps) => {
  return (
    <TwoColumnWrapper gap={gap || 0} styles={styles || ""}>
      {children}
    </TwoColumnWrapper>
  );
};
