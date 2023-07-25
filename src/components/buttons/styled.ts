import Link from "next/link";
import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { borderRadius } from "@/styles/borderRadius";

export const LinkStyled = styled(Link)<{ styles?: string; $margin?: string }>`
  color: ${colors.white};
  ${borderRadius["8px"]}
  padding: 15px;

  @media only screen and (max-width: 575px) {
    ${typography.textForScreen["bold"].from361pxTo575pxIs16px}
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    ${typography.textForScreen["bold"].from768pxTo1023pxIs20px}
  }

  @media only screen and (min-width: 768px) {
    ${typography.textForScreen["bold"].from1440pxIs24px}
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
  width: 285px;
  height: 85px;
  padding: auto;
  background-color: ${colors.greenThemeColor};
  color: ${colors.white};
  font-size: 24px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  margin-top: 1.5rem;
  cursor: pointer;

  &:disabled {
    background-color: grey;
    cursor: default;
  }
`;
