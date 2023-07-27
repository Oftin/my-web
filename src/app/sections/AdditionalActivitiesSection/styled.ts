import styled, { css } from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const AdditionalActivitiesSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 6em;
  padding-bottom: 6em;
  max-width: 1200px;
`;

export const TitleWrapper = styled.div`
  @media only screen and (min-width: 1300px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  width: 80vw;
  max-width: 1200px;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media only screen and (min-width: 1300px) {
    margin-top: 10rem;
  }
`;

export const MainText = styled.div`
  display: flex;
  color: ${colors.white};

  :last-child {
    color: ${colors.greenThemeColor};
  }

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
  color: ${colors.white};

  :last-child {
    color: ${colors.greenThemeColor};
  }

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

export const TextParagraph = styled.div<{ $color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};

  :last-child {
    color: ${colors.greenThemeColor};
  }

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["12px"]}
    width: 300px;
    gap: 6px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["16px"]}
    width: 400px;
    gap: 8px;
  }
  @media only screen and (min-width: 768px) {
    ${typography.text.bold["20px"]}
    max-width:  500px;
    gap: 10px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  max-width: 80vw;
  margin-bottom: 1rem;
`;
