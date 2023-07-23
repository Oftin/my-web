import styled, { css } from "styled-components";

export const FooterWrapper = styled.div<{ $backgroundColor?: string }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  height: 6rem;

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${$backgroundColor};
    `}
`;
