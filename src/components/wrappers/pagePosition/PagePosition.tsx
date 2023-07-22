import { ReactNode } from "react";
import { PagePositionWrapper } from "./styled";
import { PageSize } from "@/components/wrappers/pageSize";

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
      <PageSize>{children}</PageSize>
    </PagePositionWrapper>
  );
};
