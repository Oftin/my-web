import styled, { css } from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const MasterDegreeProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 4rem;
  text-align: justify;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

export const LeftImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const Fig1Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80vw;
  justify-content: center;
  align-content: baseline;
  margin: 2rem 0;
  gap: 20px;
`;

export const Fig3Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  width: 80vw;
  align-items: center;
  justify-items: center;
  margin-bottom: 2rem;
`;

export const MainText = styled.div`
  text-align: center;
  color: ${colors.white};

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

export const SecondText = styled.div`
  text-align: center;
  color: ${colors.greenThemeColor};
  margin: 0.25rem 0 2rem 0;

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["16px"]}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["20px"]}
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["24px"]}
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

interface TextParagraphProps {
  $turnOffMarginBottom?: boolean;
}

export const TextParagraph = styled.div<TextParagraphProps>`
  color: ${colors.white};

  ${({ $turnOffMarginBottom }) =>
    !$turnOffMarginBottom &&
    css`
      margin-bottom: 1.5rem;
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
