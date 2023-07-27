import styled from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  padding-bottom: 0;
  margin-bottom: 0;
  height: 100%;
  border-top: 1px solid ${colors.greenThemeColor};
  background-color: ${colors.background.mirage};

  &:hover {
    box-shadow: 0px 0px 10px 0px ${colors.greenThemeColor};
  }

  @media only screen and (max-width: 575px) {
    min-height: 4rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    min-height: 5rem;
  }

  @media only screen and (min-width: 768px) {
    min-height: 6rem;
  }
`;

export const LeftTopText = styled.div`
  display: flex;
  color: ${colors.white};

  :last-child {
    color: ${colors.greenThemeColor};
  }

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["10px"]}
    gap: 1px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["20px"]}
    gap: 3px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["24px"]}
    gap: 5px;
  }
`;

export const LeftBottomText = styled.div`
  display: flex;
  color: ${colors.white};

  :last-child {
    color: ${colors.greenThemeColor};
  }

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["8px"]}
    gap: 1px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["12px"]}
    gap: 3px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["16px"]}
    gap: 5px;
  }
`;

export const RightText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: ${colors.white};

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["6px"]}
    gap: 1px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["8px"]}
    gap: 3px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["12px"]}
    gap: 5px;
  }
`;

export const FooterImage = styled.div`
  width: 60%;

  @media only screen and (min-width: 768px) {
    width: 150px;
  }
`;
