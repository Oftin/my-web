import Link from "next/link";
import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

export const LinkStyled = styled(Link)<{ styles?: string }>`
  margin-top: 2rem;
  ${typography.text["24px"]}
  color: ${colors.white};
  border-radius: 10px;
  padding: 20px;

  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
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
