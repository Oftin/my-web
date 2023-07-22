import styled, { css } from "styled-components";

export const PositionWrapper = styled.div<{
  $flexDirection?: "column" | "row";
  $justifyContent?: "start" | "center" | "end" | "space-between";
  $alignItems?: "start" | "center" | "end";
  $alignContent?: "start" | "center" | "end";
  $styles?: string;
}>`
  display: flex;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.$flexDirection &&
    css`
      flex-direction: column;

      @media only screen and (min-width: 992px) {
        flex-direction: ${props.$flexDirection};
      }
    `};

  ${(props) =>
    props.$justifyContent &&
    css`
      justify-content: center;

      @media only screen and (min-width: 992px) {
        justify-content: ${props.$justifyContent};
      }
    `};

  ${(props) =>
    props.$alignItems &&
    css`
      align-items: center;

      @media only screen and (min-width: 992px) {
        align-items: ${props.$alignItems};
      }
    `};

  ${(props) =>
    props.$alignContent &&
    css`
      align-content: center;

      @media only screen and (min-width: 992px) {
        align-content: ${props.$alignContent};
      }
    `};

  ${(props) =>
    props.$styles &&
    css`
      ${props.$styles}
    `};
`;
