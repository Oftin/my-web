import styled, { css } from "styled-components";
import { TextArea } from "@/components/inputs";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh + 80px);
`;

export const TopInputs = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin: 1rem;

  @media only screen and (max-width: 767px) {
    grid-template-columns: 40% 40%;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 315px 315px;
  }
`;

export const TextAreaModifier = styled(TextArea)`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 767px) {
    width: calc(80% + 20px);
    height: 200px;
  }

  @media only screen and (min-width: 768px) {
    width: 650px;
    height: 250px;
  }
`;

export const ReCAPTCHAWrapper = styled.div`
  @media only screen and (max-width: 575px) {
    transform: scale(0.5);
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    transform: scale(0.75);
    margin-top: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    transform: scale(0.9);
    margin-top: 1.5rem;
  }
`;

export const SecondText = styled.div<{ margin?: string }>`
  color: ${colors.white};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  @media only screen and (max-width: 575px) {
    ${typography.titleText["18px"]}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.titleText["24px"]}
  }

  @media only screen and (min-width: 768px) {
    ${typography.titleText["32px"]}
  }
`;

export const MainText = styled.div`
  color: ${colors.white};

  @media only screen and (max-width: 575px) {
    ${typography.titleText["28px"]}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.titleText["36px"]}
  }

  @media only screen and (min-width: 768px) {
    ${typography.titleText["48px"]}
  }
`;
