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
