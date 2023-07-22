import styled, { css } from "styled-components";

export const PagePositionWrapper = styled.div<{
  $backgroundColor?: string;
  $paddingPlus?: boolean;
  $paddingMinus?: boolean;
}>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$backgroundColor};

  ${({ $paddingPlus }) =>
    $paddingPlus &&
    css`
      @media only screen and (min-width: 992px) {
        padding-right: 8em;
        padding-left: 8em;
      }
    `};

  ${({ $paddingMinus }) =>
    $paddingMinus &&
    css`
      @media only screen and (min-width: 992px) {
        padding-right: 2em;
        padding-left: 4em;
      }

      @media only screen and (min-width: 1200px) {
        padding-right: 4em;
        padding-left: 8em;
      }
    `};
`;
