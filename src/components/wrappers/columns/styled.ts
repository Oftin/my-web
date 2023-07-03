import styled, { css } from "styled-components";

export const TwoColumnWrapper = styled.div<{ gap: number; styles: string }>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${(props) => props.gap}px;

  padding-left: 8rem;
  padding-right: 4rem;

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `};
`;

export const FlexColumnWrapper = styled.div<{
  items: string;
  justify: string;
  styles?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.items};
  justify-content: ${(props) => props.justify};

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}
`;
