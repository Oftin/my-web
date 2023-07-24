import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

export const ElementWithDropDownDescriptionWrapper = styled.div`
  max-width: 100%;
`;

export const MainPanelWrapper = styled.div<{
  backgroundColor: string;
}>`
  width: 100%;
  display: flex;
  list-style: none;
  color: ${colors.white};
  font-size: 1.5rem;
  line-height: 1.875rem;
  font-weight: 700;
  padding: 0.75em;
  border-radius: 8px;
  cursor: pointer;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};
`;

export const SpaceBetweenElements = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const DotAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GreenDot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${colors.greenThemeColor};
  border-radius: 0.375rem;
  margin: 0.625rem 0.75rem;
`;

export const CloseDropDown = styled.div`
  z-index: 10;
  max-width: 100%;
  background-color: ${colors.greenThemeColorHover};
  margin: 0 1rem 1rem 1rem;
  overflow-wrap: break-word;
  padding: 0.25rem;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  color: ${colors.white};
  align-content: center;
`;

export const OpenDropDown = styled(CloseDropDown)`
  padding: 0.75rem;
  ${typography.text["16px"]}
`;

export const TextWrapper = styled.div`
  ${typography.text["24px"]}
`;
