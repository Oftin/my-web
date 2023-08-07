import styled from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const ThanksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainTextForThanks = styled.div`
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

export const SecondTextForThanks = styled.div`
  color: ${colors.greenThemeColor};

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
