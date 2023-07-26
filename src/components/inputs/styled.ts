import styled from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { borderRadius } from "@/styles/borderRadius";

export const InputWrapper = styled.input`
  background-color: ${colors.background.ebonyClay};
  color: ${colors.white};
  ${borderRadius["8px"]}
  border: none;

  &:disabled {
    background-color: ${colors.disabledColor};
  }

  @media only screen and (max-width: 767px) {
    ${typography.text.normal["12px"]}
    padding: 15px 20px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.normal["16px"]}
    padding: 15px 30px;
  }
`;

export const TextAreaWrapper = styled.textarea`
  background-color: ${colors.background.ebonyClay};
  color: ${colors.white};
  ${borderRadius["8px"]}
  border: none;
  resize: none;

  &:disabled {
    background-color: ${colors.disabledColor};
  }

  @media only screen and (max-width: 767px) {
    ${typography.text.normal["12px"]}
    padding: 15px 20px;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.normal["16px"]}
    padding: 20px 30px;
  }
`;
