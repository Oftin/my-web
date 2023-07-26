import styled from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const EngineeringDegreeProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
