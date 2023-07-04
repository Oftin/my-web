import styled, { css } from "styled-components";

export const ColumnWrapper = styled.div<{
  numberOfColumns: number;
  gap: number;
  styles: string;
  layoutMargin?: boolean;
}>`
  display: grid;

  ${(props) =>
    props.numberOfColumns &&
    css`
      grid-template-columns: repeat(${props.numberOfColumns}, minmax(0, 1fr));
    `}

  gap: ${(props) => props.gap}px;

  ${(props) =>
    props.layoutMargin &&
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
  layoutMargin?: boolean;
  minusLayoutMargin?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.items};
  justify-content: ${(props) => props.justify};

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}

  ${(props) =>
    props.layoutMargin &&
    css`
      padding-left: 8em;
      padding-right: 4em;
    `}

    ${(props) =>
    props.minusLayoutMargin &&
    css`
      padding-left: -8em;
      padding-right: -4em;
    `}
`;
