import styled, { css } from "styled-components";

export const TitleSectionWrapper = styled.div<{ $width: string }>`
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
    `}
`;
