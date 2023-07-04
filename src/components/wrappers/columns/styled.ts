import styled, { css } from "styled-components";

export const TwoColumnWrapper = styled.div<{
  gap: number;
  styles: string;
  layoutMargin?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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
`;
