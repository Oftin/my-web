import styled from "styled-components";

export const TestWrapper = styled.div`
  background-color: red;

  :nth-child(2n + 1) {
    background-color: black;
  }
`;
