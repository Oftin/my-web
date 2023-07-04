import { ReactNode } from "react";
import { TwoColumnWrapper } from "./styled";

interface TwoColumnProps {
  children: ReactNode;
  gap?: number;
  styles?: string;
  layoutMargin?: boolean;
}

export const TwoColumn = ({
  children,
  gap,
  styles,
  layoutMargin,
}: TwoColumnProps) => {
  return (
    <TwoColumnWrapper
      gap={gap || 0}
      styles={styles || ""}
      layoutMargin={layoutMargin}
    >
      {children}
    </TwoColumnWrapper>
  );
};
