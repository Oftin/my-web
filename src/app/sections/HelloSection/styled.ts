import styled from "styled-components";
import { Link as ReactScrollLink } from "react-scroll";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";
import { borderRadius } from "@/styles/borderRadius";

export const HelloSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  width: 80vw;
  min-height: 100vh;
  gap: 40px;

  @media only screen and (max-width: 575px) {
    padding-top: 30vw;
    padding-bottom: 10vw;
  }

  @media only screen and (min-width: 576px) and (max-width: 1023px) {
    padding-top: 20vw;
    padding-bottom: 10vw;
    gap: 50px;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 100px;
  }
`;

export const LeftSide = styled.div``;

export const RigthSide = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 1024px) {
    width: 550px;
  }
`;

export const ContactButton = styled(ReactScrollLink)`
  color: ${colors.white};
  background-color: ${colors.greenThemeColor};
  ${borderRadius["8px"]}
  cursor: pointer;

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["12px"]}
    padding: 12px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["16px"]}
    padding: 12px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["20px"]}
    padding: 20px;
  }
`;
