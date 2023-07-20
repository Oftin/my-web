import styled, { css } from "styled-components";

export const ColumnWrapper = styled.div<{
  $columns: number;
  $gap?: number;
  $styles?: string;
}>`
  display: grid;

  ${(props) =>
    props.$columns &&
    css`
      grid-template-columns: repeat(${props.$columns}, minmax(0, 1fr));
    `}

  gap: ${(props) => props.$gap}px;

  ${(props) =>
    props.$styles &&
    css`
      ${props.$styles}
    `};
`;
