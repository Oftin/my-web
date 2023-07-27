import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { borderRadius } from "@/styles/borderRadius";

export const ElementWithDropDownDescriptionWrapper = styled.div`
  width: 100%;
`;

export const MainPanelWrapper = styled.div<{
  backgroundColor: string;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: ${colors.white};
  ${borderRadius["8px"]}
  cursor: pointer;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};
`;

export const SpaceBetweenElements = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem 0 0.5rem;
`;

export const DotAndTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GreenDot = styled.div`
  background-color: ${colors.greenThemeColor};
  border-radius: 0.375rem;
  margin: 0.625rem 0.75rem;

  @media only screen and (max-width: 575px) {
    width: 0.4688rem;
    height: 0.4688rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: 0.5rem;
    height: 0.5rem;
  }

  @media only screen and (min-width: 768px) {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const CloseDropDown = styled.div`
  background-color: ${colors.greenThemeColorHover};
  color: ${colors.white};
  align-content: center;
  overflow-wrap: break-word;
  margin: 0 1rem 1rem 1rem;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  z-index: 10;

  @media only screen and (max-width: 575px) {
    width: 140px;
    padding-bottom: 0.25rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: 230px;
    padding-bottom: 0.25rem;
  }

  @media only screen and (min-width: 767px) and (max-width: 1023px) {
    width: 320px;
    padding-bottom: 0.5rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 280px;
    padding-bottom: 0.5rem;
  }
`;

export const OpenDropDown = styled(CloseDropDown)`
  @media only screen and (max-width: 575px) {
    ${typography.text.normal["8px"]}
    padding: 0.5rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.normal["12px"]}
    padding: 0.75rem;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.normal["16px"]}
    padding: 0.75rem;
  }
`;

export const TextWrapper = styled.div`
  @media only screen and (max-width: 575px) {
    ${typography.text.bold["12px"]}
    padding: 10px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["16px"]}
    padding: 12px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["20px"]}
    padding: 15px;
  }
`;

export const ImageWrapper = styled.div<{ $showDropDownText: boolean }>`
  display: flex;

  ${({ $showDropDownText }) =>
    $showDropDownText &&
    css`
      rotate: 180deg;
    `}

  @media only screen and (max-width: 575px) {
    width: 0.9375rem;
    height: 0.9375rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media only screen and (min-width: 768px) {
    width: 1.875rem;
    height: 1.875rem;
  }
`;
