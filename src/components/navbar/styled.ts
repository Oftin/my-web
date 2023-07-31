import styled from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

export const NavbarPositionFixed = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 999;
  top: -1px;

  background-color: ${colors.background.mirage};
  border-bottom: 1px solid ${colors.greenThemeColor};

  &:hover {
    box-shadow: 0px 0px 10px 0px ${colors.greenThemeColor};
  }
`;

export const NavbarUlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  height: 5rem;

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["16px"]}
    padding: 0 10vw;
    gap: 6px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["20px"]}
    padding: 0 10vw;
    gap: 8px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["24px"]}
    padding: 0 10vw;
    gap: 10px;
  }
`;

export const LeftSideLi = styled.li`
  margin-right: auto;
  cursor: pointer;
`;

export const RightSideLiHorizontal = styled.li`
  display: flex;
  cursor: pointer;
  margin-left: 1rem;
  ${typography.textOld["24px"]}
  color: ${colors.white};

  &:hover {
    color: ${colors.greenThemeColor};
  }
`;

export const RightSideLiVertical = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  ${typography.textOld["36px"]}
  color: ${colors.white};
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
`;

export const MenuItems = styled.div`
  margin: 0.25rem;
`;

export const MainText = styled.div`
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

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const SpanWrapper = styled.span`
  color: ${colors.greenThemeColor};
  ${typography.text.bold["24px"]}
`;

export const SpanInside = styled.span`
  color: ${colors.white};
  ${typography.text.bold["24px"]}

  &:hover {
    color: ${colors.greenThemeColor};
  }
`;
