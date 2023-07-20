import styled, { css } from "styled-components";

export const PositionWrapper = styled.div<{
  $flexDirection?: "column" | "row";
  $justifyContent?: "start" | "center" | "end" | "space-between";
  $alignItems?: "start" | "center" | "end";
  $alignContent?: "start" | "center" | "end";
  $styles?: string;
}>`
  display: flex;

  flex-direction: ${(props) => props.$flexDirection};

  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  align-content: ${(props) => props.$alignContent};

  ${(props) =>
    props.$styles &&
    css`
      ${props.$styles}
    `}
`;
