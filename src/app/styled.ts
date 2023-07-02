import styled from "styled-components";
import { colors } from "@/styles/colors";

export const MainPageWrapper = styled.div`
  padding-top: 4.375rem;

  background-color: ${colors.background.ebonyClay};

  :nth-child(2n + 1) {
    background-color: ${colors.background.mirage};
  }
`;
