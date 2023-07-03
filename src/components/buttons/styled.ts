import Link from "next/link";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

export const LinkStyled = styled(Link)`
  margin-top: 2rem;
  ${typography.text["24px"]}
  color: ${colors.white};
  border-radius: 10px;
  padding: 20px;
`;
