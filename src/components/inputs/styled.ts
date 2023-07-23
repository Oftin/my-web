import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

export const InputWrapper = styled.input<{
  width?: string;
  height: string;
  styles?: string;
}>`
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  color: ${colors.white};
  background-color: ${colors.background.ebonyClay};

  ${typography.text["16px"]}
  font-weight: 400;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}

  &:disabled {
    background-color: ${colors.disabledColor};
  }
`;

export const TextAreaWrapper = styled.textarea<{
  width?: string;
  height: string;
  styles?: string;
}>`
  border: none;
  resize: none;
  padding: 30px 30px;
  border-radius: 8px;
  color: ${colors.white};
  background-color: ${colors.background.ebonyClay};
  width: 100%;

  ${typography.text["16px"]}
  font-weight: 400;
  line-height: 2;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}

  &:disabled {
    background-color: ${colors.disabledColor};
  }
`;
