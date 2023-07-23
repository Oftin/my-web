import styled from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const HelloSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;

  @media only screen and (max-width: 992px) {
    padding-top: 8em;
    padding-bottom: 6em;
  }

  @media only screen and (min-width: 992px) {
    height: 100vh;

    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div`
  @media only screen and (max-width: 992px) {
    margin-bottom: 4rem;
  }
`;

export const RigthSide = styled.div`
  @media only screen and (max-width: 992px) {
    margin: 2rem;
  }
`;

export const ContactButton = styled.div`
  ${typography.text["24px"]}
  border-radius: 10px;
  margin-top: 2rem;
  padding: 20px;
  color: ${colors.white};
  background-color: ${colors.greenThemeColor};
  cursor: pointer;
  width: fit-content;
`;
