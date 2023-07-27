import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";

export const ArrowWrapper = styled.div<{ orientation: string }>`
  ${({ orientation }) =>
    orientation === "horizontal" &&
    css`
      display: flex;
      flex-direction: row;
      width: 100%;
      max-width: 1440px;
    `};

  ${({ orientation }) =>
    orientation === "vertical" &&
    css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `};

  align-items: center;
  justify-content: center;

  margin: auto;
`;

export const WhiteArrow = styled.div<{
  orientation: string;
  $showArrowhead?: boolean;
}>`
  ${({ orientation, $showArrowhead }) =>
    orientation === "vertical" && $showArrowhead
      ? css`
          width: 2px;
          height: 90vh;
          background-color: ${colors.white};
        `
      : css`
          width: 2px;
          height: 90vw;
          background-color: ${colors.white};
        `};

  ${({ orientation }) =>
    orientation === "horizontal" &&
    css`
      width: 85vw;
      height: 2px;
      background-color: ${colors.white};
      margin-right: -2px;
    `};
`;
