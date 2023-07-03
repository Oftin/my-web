import styled, { css } from "styled-components";
import { typography } from "@/styles/typography";
import { TextSize } from "./types";
import { colors } from "@/styles/colors";

export const WhiteAndGreenTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TextParagraphWrapper = styled.p`
  color: ${colors.white};
  ${typography.text["20px"]}

  font-weight: 400;
  opacity: 0.6;

  width: 80%;
`;

export const TextStyle = styled.div<{
  color: string;
  size: TextSize;
}>`
  color: ${(props) => props.color};

  ${(props) =>
    props.size &&
    css`
      ${typography.text[`${props.size}`]}
    `};
`;
