import styled from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const ScienceClubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: justify;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

export const MainText = styled.div`
  display: flex;
  color: ${colors.white};
  margin-bottom: 2rem;

  :last-child {
    color: ${colors.greenThemeColor};
  }

  @media only screen and (max-width: 575px) {
    ${typography.titleText["24px"]}
    gap: 6px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.titleText["32px"]}
    gap: 8px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.titleText["36px"]}
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
