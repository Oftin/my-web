import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";

export const ArrowWrapper = styled.div<{ orientation: string }>`
  ${({ orientation }) =>
    orientation === "horizontal" &&
    css`
      display: flex;
      flex-direction: row;
      width: 100%;
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
`;

export const WhiteArrow = styled.div<{
  orientation: string;
  showArrowhead?: boolean;
}>`
  ${({ orientation, showArrowhead }) =>
    orientation === "vertical" && showArrowhead
      ? css`
          width: 2px;
          height: 100%;
          background-color: ${colors.white};
          margin-bottom: -2px;
        `
      : css`
          width: 2px;
          height: 100%;
          background-color: ${colors.white};
          margin-bottom: -2px;
        `};

  ${({ orientation }) =>
    orientation === "horizontal" &&
    css`
      width: 85%;
      height: 2px;
      background-color: ${colors.white};
      margin-right: -2px;
    `};
`;
