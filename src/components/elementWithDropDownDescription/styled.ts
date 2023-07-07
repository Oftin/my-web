import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";

export const ElementWithDropDownDescriptionWrapper = styled.div`
  width: 100%;
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
  padding: 0.75rem;
  margin: 0.5rem;
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
  width: 20rem;
  background-color: ${colors.greenThemeColorHover};
  margin-top: -0.5rem;
  margin-left: 1rem;
  overflow-wrap: break-word;
  padding: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  color: ${colors.white};
`;

export const OpenDropDown = styled(CloseDropDown)`
  padding: 0.75rem;
`;
