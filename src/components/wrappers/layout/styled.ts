import styled from "styled-components";
import { colors } from "@/styles/colors";

export const LayoutBackgroundColors = styled.div`
  background-color: ${colors.background.mirage};

  :nth-child(2n + 1) {
    background-color: ${colors.background.ebonyClay};
  }
`;
