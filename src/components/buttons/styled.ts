import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { borderRadius } from "@/styles/borderRadius";

export const Button = styled.button<{ styles?: string; $margin?: string }>`
  color: ${colors.white};
  background-color: ${colors.greenThemeColor};
  border: none;
  cursor: pointer;
  ${borderRadius["8px"]}

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

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}

  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `}
`;

export const ArrowBackWrapper = styled.button`
  position: absolute;
  top: 6rem;
  margin-left: 8rem;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  @media only screen and (max-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

export const RequestButtonWrapper = styled.button`
  background-color: ${colors.greenThemeColor};
  color: ${colors.white};
  ${borderRadius["8px"]}
  padding: 15px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: grey;
    cursor: default;
  }

  @media only screen and (max-width: 575px) {
    ${typography.text.bold["16px"]}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.text.bold["20px"]}
    margin-top: 1rem;
  }

  @media only screen and (min-width: 768px) {
    ${typography.text.bold["24px"]}
    padding: 20px;
    margin-top: 1.5rem;
  }
`;
