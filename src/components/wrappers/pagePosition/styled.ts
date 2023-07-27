import styled from "styled-components";

export const PagePositionWrapper = styled.div<{
  $backgroundColor?: string;
  $paddingPlus?: boolean;
  $paddingMinus?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;

  background-color: ${(props) => props.$backgroundColor};
  margin-bottom: auto;
`;
