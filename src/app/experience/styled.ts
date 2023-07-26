import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media only screen and (max-width: 575px) {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    margin-top: 8rem;
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 10rem;
    margin-bottom: 6rem;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 575px) {
    grid-template-columns: 290px 10%;
    padding: 0.5rem 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: 400px 15%;
    padding: 1rem 0;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 550px 20%;
    padding: 2rem 0;
  }
`;

export const Ul = styled.div`
  color: ${colors.white};

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["8px"]}
    gap: 6px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["12px"]}
    gap: 8px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["16px"]}
    gap: 10px;
  }
`;

export const Li = styled.li`
  color: ${colors.white};
  padding-bottom: 0.25em;
`;

export const MainText = styled.div`
  color: ${colors.white};
  margin-bottom: 2rem;

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

  :first-child {
    color: ${colors.greenThemeColor};
  }

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["12px"]}
    padding-bottom: 0.125rem;
    gap: 6px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["16px"]}
    padding-bottom: 0.25rem;
    gap: 8px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["20px"]}
    padding-bottom: 0.25rem;
    gap: 10px;
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 150px;

  @media only screen and (max-width: 575px) {
    padding-top: 1.5rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    padding-top: 1.75rem;
  }

  @media only screen and (min-width: 768px) {
    padding-top: 2rem;
  }
`;
