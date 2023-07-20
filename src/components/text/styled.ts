import styled, { css } from "styled-components";
import { typography } from "@/styles/typography";
import { TextSize } from "./types";
import { colors } from "@/styles/colors";

export const TwoWordsTextWrapper = styled.div<{ styles?: string }>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}
`;

export const TextParagraphWrapper = styled.p<{
  size?: TextSize;
  styles?: string;
}>`
  color: ${colors.white};

  opacity: 0.6;

  ${(props) =>
    props.size &&
    css`
      ${typography.text[`${props.size}`]}
    `}

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}
`;

export const TextStyle = styled.div<{
  color: string;
  size: TextSize;
  styles?: string;
}>`
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${(props) =>
    props.size &&
    css`
      ${typography.text[`${props.size}`]}
    `};

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `};
`;
