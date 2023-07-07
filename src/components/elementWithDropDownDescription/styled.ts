import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";

export const ElementWithDropDownDescriptionWrapper = styled.div<{
  backgroundColor: string;
}>`
  z-index: 100;
  width: 100%;
  display: flex;
  list-style: none;
  color: ${colors.white};
  font-size: 1.5rem;
  line-height: 1.875rem;
  font-weight: 700;
  padding: 0.75rem;
  margin: 0.5rem;
  border-radius: 8px;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;
