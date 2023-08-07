import styled, { css } from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainTextForNorFound = styled.div`
  display: flex;
  color: ${colors.white};

  @media only screen and (max-width: 575px) {
    ${typography.titleText.notFound.small}
    gap: 6px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.titleText.notFound.medium}
    gap: 8px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.titleText.notFound.large}
    gap: 10px;
  }
`;

export const SecondTextForNorFound = styled.div`
  color: ${colors.greenThemeColor};

  @media only screen and (max-width: 575px) {
    ${typography.titleText["18px"]}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.titleText["24px"]}
  }

  @media only screen and (min-width: 768px) {
    ${typography.titleText["36px"]}
  }
`;

export const ThirdTextForNorFound = styled.div<{ margin?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
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
