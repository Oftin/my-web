import styled from "styled-components";
export const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: start;
  width: 80vw;
  min-height: 100vh;
  gap: 40px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 992px) {
    order: 1;
  }

  @media only screen and (min-width: 1024px) {
    width: 550px;
  }
`;

export const RigthSide = styled.div``;
