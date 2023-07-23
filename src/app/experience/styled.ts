import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: 10rem;
  margin-bottom: 6rem;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr 2fr;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr 3fr;
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ArrowPosition = styled.div`
  position: absolute;
  height: 40%;
  margin-top: 4rem;

  @media only screen and (max-width: 1300px) {
    height: 40%;
  }
`;

export const ImagesWrapper = styled.div`
  @media only screen and (max-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;
