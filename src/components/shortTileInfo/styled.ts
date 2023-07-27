import styled from "styled-components";
import { borderRadius } from "@/styles/borderRadius";
import { colors } from "@/styles/colors";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${colors.background.ebonyClay};
  width: 20rem;
  height: fit-content;
  border: 2px solid red;
  ${borderRadius["8px"]}
  cursor: pointer;
`;
