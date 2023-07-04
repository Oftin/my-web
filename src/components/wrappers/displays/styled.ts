import styled, { css } from "styled-components";

export const DisplayGridWrapper = styled.div<{
  numberOfColumn?: number;
  numberOfRows?: number;
  styles?: string;
}>`
  display: grid;
  justify-items: center;
  align-items: center;

  ${(props) =>
    props.numberOfColumn &&
    css`
      grid-template-columns: repeat(${props.numberOfColumn}, minmax(0, 1fr));
    `}

  ${(props) =>
    props.numberOfRows &&
    css`
      grid-template-rows: repeat(${props.numberOfRows}, minmax(0, 1fr));
    `}

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}
`;
