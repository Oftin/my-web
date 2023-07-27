import styled from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: start;
  width: 80vw;
  min-height: 100vh;
  gap: 40px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 992px) {
    order: 1;
  }

  @media only screen and (min-width: 1024px) {
    width: 550px;
  }
`;

export const RigthSide = styled.div``;

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

export const TextParagraph = styled.div`
  color: ${colors.grayText};
  margin-top: 1rem;

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["12px"]}
    width: 300px;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["16px"]}
    width: 400px;
    margin-bottom: 2.5rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    ${typography.text.bold["20px"]}
    width: 500px;
    margin-bottom: 2.5rem;
  }

  @media only screen and (min-width: 1024px) {
    ${typography.text.bold["20px"]}
    max-width:  500px;
    margin-bottom: 2.5rem;
  }
`;
