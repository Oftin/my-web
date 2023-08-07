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
      ${typography.textOld[`${$size}`]}
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

export const MainText = styled.div<{
  $color?: string;
  $marginTop?: string;
  $marginBottom?: string;
}>`
  display: flex;
  color: ${colors.white};

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}

  :last-child {
    color: ${colors.greenThemeColor};
  }

  ${({ $marginTop }) =>
    $marginTop &&
    css`
      margin-top: ${$marginTop};
    `}

  ${({ $marginBottom }) =>
    $marginBottom &&
    css`
      margin-bottom: ${$marginBottom};
    `}

  @media only screen and (max-width: 575px) {
    ${typography.titleText["28px"]}
    gap: 6px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.titleText["36px"]}
    gap: 8px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.titleText["48px"]}
    gap: 10px;
  }
`;

export const SecondText = styled.div<{
  $color?: string;
  $lastChildColor?: string;
  $marginTop?: string;
  $marginBottom?: string;
}>`
  display: flex;
  color: ${colors.white};

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}

  :last-child {
    color: ${colors.greenThemeColor};

    ${({ $lastChildColor }) =>
      $lastChildColor &&
      css`
        color: ${$lastChildColor};
      `}
  }

  ${({ $marginTop }) =>
    $marginTop &&
    css`
      margin-top: ${$marginTop};
    `}

  ${({ $marginBottom }) =>
    $marginBottom &&
    css`
      margin-bottom: ${$marginBottom};
    `}


  @media only screen and (max-width: 575px) {
    ${typography.titleText["18px"]}
    gap: 6px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.titleText["24px"]}
    gap: 8px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.titleText["32px"]}
    gap: 10px;
  }
`;

export const ThirdText = styled.div<{
  $color?: string;
  $margin?: string;
  $displayFlex?: boolean;
}>`
  color: ${colors.white};

  ${({ $displayFlex }) =>
    $displayFlex &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}

  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `}

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["12px"]}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["16px"]}
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["20px"]}
  }
`;

export const TitleParagraph = styled.div`
  color: ${colors.greenThemeColor};
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["16px"]}
    align-self: center;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["20px"]}
    align-self: center;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["24px"]}
    align-self: start;
  }
`;

export const TextParagraph = styled.div<{
  $color?: string;
  $width?: string[];
  $margin?: string;
  $marginTop?: string;
  $marginBottom?: string[];
  $displayFlex?: boolean;
  $justifyContent?: "start" | "center" | "end";
  $alignItems?: "start" | "center" | "end";
  $gap?: string[];
  $lastChildColor?: string;
}>`
  color: ${colors.grayText};

  ${({ $displayFlex }) =>
    $displayFlex &&
    css`
      display: flex;
    `}

  ${({ $displayFlex, $justifyContent, $alignItems }) =>
    $displayFlex &&
    $justifyContent &&
    $alignItems &&
    css`
      display: flex;
      justify-content: ${$justifyContent};
      align-items: ${$alignItems};
    `}

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}

    :last-child {
    ${({ $lastChildColor }) =>
      $lastChildColor &&
      css`
        color: ${$lastChildColor};
      `}
  }

  ${({ $marginTop }) =>
    $marginTop &&
    css`
      margin-top: ${$marginTop};
    `}

  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `}

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["12px"]}

    ${({ $marginBottom }) =>
      $marginBottom &&
      css`
        margin-bottom: ${$marginBottom[0]};
      `}

    ${({ $width }) =>
      $width &&
      css`
        width: ${$width[0]};
      `}

      ${({ $displayFlex, $gap }) =>
      $displayFlex &&
      $gap &&
      css`
        gap: ${$gap[0]};
      `}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["16px"]}

    ${({ $marginBottom }) =>
      $marginBottom &&
      css`
        margin-bottom: ${$marginBottom[1]};
      `}

    ${({ $width }) =>
      $width &&
      css`
        width: ${$width[1]};
      `}

      ${({ $displayFlex, $gap }) =>
      $displayFlex &&
      $gap &&
      css`
        gap: ${$gap[1]};
      `}
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    ${typography.text.bold["20px"]}

    ${({ $marginBottom }) =>
      $marginBottom &&
      css`
        margin-bottom: ${$marginBottom[2]};
      `}

    ${({ $width }) =>
      $width &&
      css`
        width: ${$width[2]};
      `}

      ${({ $displayFlex, $gap }) =>
      $displayFlex &&
      $gap &&
      css`
        gap: ${$gap[2]};
      `}
  }

  @media only screen and (min-width: 1024px) {
    ${typography.text.bold["20px"]}

    ${({ $marginBottom }) =>
      $marginBottom &&
      css`
        margin-bottom: ${$marginBottom[3]};
      `}

    ${({ $width }) =>
      $width &&
      css`
        max-width: ${$width[3]};
      `}

      ${({ $displayFlex, $gap }) =>
      $displayFlex &&
      $gap &&
      css`
        gap: ${$gap[3]};
      `}
  }
`;

export const PageTitleMainText = styled.div<{ $marginBottom?: string }>`
  display: flex;
  text-align: center;
  color: ${colors.white};

  ${({ $marginBottom }) =>
    $marginBottom &&
    css`
      margin-bottom: ${$marginBottom};
    `}

  @media only screen and (max-width: 575px) {
    ${typography.titleText["24px"]}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.titleText["32px"]}
  }

  @media only screen and (min-width: 768px) {
    ${typography.titleText["36px"]}
  }
`;

export const PageTitleSecondText = styled.div<{
  $color?: string;
  $margin?: string;
}>`
  display: flex;
  text-align: center;
  color: ${colors.white};

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}

  :last-child {
    color: ${colors.greenThemeColor};
  }

  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `}

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["16px"]}
    gap: 6px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["20px"]}
    gap: 8px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["24px"]}
    gap: 10px;
  }
`;
