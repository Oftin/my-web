import styled from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

export const NavbarPositionFixed = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 999;

  background-color: ${colors.background.mirage};
  border-bottom: 1px solid ${colors.greenThemeColor};

  &:hover {
    box-shadow: 0px 0px 10px 0px ${colors.greenThemeColor};
  }
`;

export const NavbarUlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 5rem;
  margin-left: 8rem;
  margin-right: 8rem;
  list-style-type: none;

  @media only screen and (max-width: 1200px) {
    margin-left: 3rem;
    margin-right: 3rem;
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
  ${typography.text["24px"]}
  color: ${colors.white};

  &:hover {
    color: ${colors.greenThemeColor};
  }

  @media only screen and (max-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

export const RightSideLiVertical = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  ${typography.text["36px"]}
  color: ${colors.white};
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;

  @media only screen and (min-width: 991px) {
    visibility: hidden;
    display: none;
  }
`;

export const MenuItems = styled.div`
  margin: 1rem;
`;
