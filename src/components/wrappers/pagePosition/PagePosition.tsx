import { ReactNode } from "react";
import { PagePositionWrapper } from "./styled";

interface PagePositionProps {
  children: ReactNode;
  backgroundColor?: string;
  paddingPlus?: boolean;
  paddingMinus?: boolean;
  id?: string;
}

export const PagePosition = ({
  children,
  backgroundColor,
  paddingPlus,
  paddingMinus,
  id,
}: PagePositionProps) => {
  return (
    <PagePositionWrapper
      $backgroundColor={backgroundColor}
      $paddingPlus={paddingPlus}
      $paddingMinus={paddingMinus}
      id={id}
    >
      {children}
    </PagePositionWrapper>
  );
};
