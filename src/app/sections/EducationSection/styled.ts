import styled, { css } from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const EducationSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 6em;
  padding-bottom: 6em;
`;

export const TitleWrapper = styled.div`
  @media only screen and (min-width: 1300px) {
    width: 100%;
  }
`;

export const StudyStage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StudyTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const MainText = styled.div`
  display: flex;
  color: ${colors.white};

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

export const SecondText = styled.div`
  display: flex;
  color: ${colors.greenThemeColor};

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

export const ImageWithButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  max-width: 1200px;
  margin-top: 2rem;
  gap: 20px;
`;

export const TextParagraph = styled.div<{
  $firsrColor?: string;
  $secondColor?: string;
}>`
  display: flex;
  color: ${colors.white};

  ${({ $firsrColor }) =>
    $firsrColor &&
    css`
      color: ${$firsrColor};
    `}

  :last-child {
    ${({ $secondColor }) =>
      $secondColor &&
      css`
        color: ${$secondColor};
      `}
  }

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["12px"]}
    gap: 6px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["16px"]}
    gap: 8px;
  }
  @media only screen and (min-width: 768px) {
    ${typography.text.bold["20px"]}
    gap: 10px;
  }
`;
