import styled from "styled-components";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const ContactButton = styled.div`
  ${typography.text["24px"]}
  border-radius: 10px;
  margin-top: 2rem;
  padding: 20px;
  color: ${colors.white};
  background-color: ${colors.greenThemeColor};
  cursor: pointer;
`;
