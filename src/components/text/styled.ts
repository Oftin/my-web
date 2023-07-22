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
  $size?: TextSize;
  $width?: string;
  $styles?: string;
}>`
  color: ${colors.white};
  text-align: justify;
  text-justify: inter-word;

  opacity: 0.6;

  ${({ $size }) =>
    $size &&
    css`
      ${typography.text[`${$size}`]}
    `}

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
    `}

  ${({ $styles }) =>
    $styles &&
    css`
      ${$styles}
    `}
`;

export const TextStyle = styled.div<{
  $color: string;
  $size: TextSize;
  $centerText?: boolean;
  $styles?: string;
}>`
  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `};

  ${({ $size }) =>
    $size &&
    css`
      ${typography.text[`${$size}`]}
    `};

  ${({ $centerText }) =>
    $centerText &&
    css`
      text-align: center;
    `}

  ${({ $styles }) =>
    $styles &&
    css`
      ${$styles}
    `};
`;
