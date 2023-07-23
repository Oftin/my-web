import styled from "styled-components";

export const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;

  @media only screen and (max-width: 992px) {
    padding-top: 6em;
    padding-bottom: 6em;
  }

  @media only screen and (min-width: 992px) {
    height: 100vh;

    flex-direction: row;
    justify-content: space-around;
  }
`;

export const LeftSide = styled.div`
  @media only screen and (max-width: 992px) {
    margin-top: 6rem;
    order: 1;
    align-items: center;
  }
`;

export const RigthSide = styled.div`
  width: 390px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 992px) {
    margin: 2rem;
  }
`;
