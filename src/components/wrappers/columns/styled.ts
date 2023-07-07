import styled, { css } from "styled-components";

export const ColumnWrapper = styled.div<{
  columns: number;
  gap: number;
  styles: string;
  extraSpaceFromEdgeOfScreen?: boolean;
}>`
  display: grid;

  ${(props) =>
    props.columns &&
    css`
      grid-template-columns: repeat(${props.columns}, minmax(0, 1fr));
    `}

  gap: ${(props) => props.gap}px;

  ${(props) =>
    props.extraSpaceFromEdgeOfScreen &&
    css`
      padding-left: 8rem;
      padding-right: 4rem;
    `}

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `};
`;

export const FlexColumnWrapper = styled.div<{
  direction: "column" | "row";
  items: string;
  justify: string;
  styles?: string;
  extraSpaceFromEdgeOfScreen?: boolean;
  minusExtraSpaceFromEdgeOfScreen?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.items};
  justify-content: ${(props) => props.justify};

  ${(props) =>
    props.extraSpaceFromEdgeOfScreen &&
    css`
      padding-left: 8em;
      padding-right: 4em;
    `}

  ${(props) =>
    props.minusExtraSpaceFromEdgeOfScreen &&
    css`
      padding-left: -8em;
      padding-right: -4em;
    `}

    ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}
`;
