import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import { borderRadius } from "@/styles/borderRadius";

export const LinkModifier = styled(Link)<{ $margin?: string }>`
  @media only screen and (max-width: 575px) {
    width: 136px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: 160px;
  }

  @media only screen and (min-width: 768px) {
    width: 196px;
  }

  ${({ $margin }) => css`
    margin: ${$margin};
  `}
`;

export const ImageModifier = styled(Image)`
  width: 100%;
  height: 100%;
  ${borderRadius["8px"]}
`;
