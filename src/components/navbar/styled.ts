import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 999;

  padding-top: 1rem;
  padding-bottom: 1rem;

  background-color: ${colors.background.mirage};
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 8rem;
  margin-right: 4rem;
  list-style-type: none;
`;

export const LeftSideLi = styled.li`
  margin-right: auto;
  cursor: pointer;
`;

export const RightSideLi = styled.li`
  display: flex;
  color: ${colors.white};
  margin-left: 1rem;
  ${typography.text["24px"]}
  cursor: pointer;

  &:hover {
    color: ${colors.greenThemeColor};
  }
`;
