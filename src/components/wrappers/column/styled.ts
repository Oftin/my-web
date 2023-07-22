import styled, { css } from "styled-components";

export const ColumnWrapper = styled.div<{
  $columns: number;
  $gap?: number;
  $styles?: string;
}>`
  display: grid;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.$columns &&
    css`
      grid-template-columns: 1fr;

      @media only screen and (min-width: 992px) {
        grid-template-columns: repeat(${props.$columns}, minmax(0, 1fr));
      }
    `}

  gap: ${(props) => props.$gap}px;

  ${(props) =>
    props.$styles &&
    css`
      ${props.$styles}
    `};
`;
