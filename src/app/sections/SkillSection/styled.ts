import styled from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const SkillSectionWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    grid-template-columns: 25vw 50vw;
  }

  @media only screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const SkillWrapper = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: baseline;

  @media only screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    grid-template-columns: 0.5fr 0.5fr;
  }

  @media only screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonForLargeScreen = styled.div`
  @media only screen and (max-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

export const ButtonForSmallScreen = styled.div`
  margin-top: 1rem;

  @media only screen and (min-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

export const Ul = styled.div`
  color: ${colors.white};
  ${typography.textOld["24px"]}
  list-style: none;
  width: 100%;
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

export const SkillNumber = styled.div`
  text-align: end;

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

export const SkillName = styled.div`
  display: flex;
  flex-wrap: nowrap;
  text-align: start;
  width: 100%;

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["16px"]}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["20px"]}
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["24px"]}
  }

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    padding-left: 2vw;
    text-align: start;
    gap: 10px;
  }

  @media only screen and (min-width: 1440px) {
    text-align: start;
    gap: 10px;
  }
`;

export const TextParagraph = styled.div`
  color: ${colors.grayText};
  margin: 1rem 0;

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["12px"]}
    width: 250px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["16px"]}
    width: 300px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    ${typography.text.bold["20px"]}
    width: 400px;
  }

  @media only screen and (min-width: 1024px) {
    ${typography.text.bold["20px"]}
    max-width: 400px;
  }
`;
