import styled, { css } from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ColumnSkills = styled.div`
  display: grid;

  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media only screen and (min-width: 576px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`;

export const SectionWrapper = styled.div<{ $backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-bottom: 4rem;

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${$backgroundColor};
    `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

export const MainText = styled.div<{ $6remTopAndBottomMargin?: boolean }>`
  color: ${colors.white};
  margin-top: 8rem;

  ${({ $6remTopAndBottomMargin }) =>
    $6remTopAndBottomMargin &&
    css`
      margin-top: 6rem;
      margin-bottom: 6rem;
    `}

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

export const SecondText = styled.div`
  color: ${colors.white};
  margin-top: 4rem;
  margin-bottom: 2rem;

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
