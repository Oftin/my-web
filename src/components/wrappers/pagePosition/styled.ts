import styled, { css } from "styled-components";

export const PagePositionWrapper = styled.div<{
  $backgroundColor?: string;
  $paddingPlus?: boolean;
  $paddingMinus?: boolean;
}>`
  background-color: ${(props) => props.$backgroundColor};

  ${({ $paddingPlus }) =>
    $paddingPlus &&
    css`
      padding-right: 4rem;
      padding-left: 8rem;
    `}

  ${({ $paddingMinus }) =>
    $paddingMinus &&
    css`
      padding-right: 4rem;
      padding-left: 8rem;
    `}
`;
