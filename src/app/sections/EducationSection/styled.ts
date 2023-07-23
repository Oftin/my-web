import styled from "styled-components";

export const EducationSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 6em;
  padding-bottom: 6em;
`;

export const TitleWrapper = styled.div`
  @media only screen and (min-width: 1300px) {
    width: 100%;
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
  height: 60%;
  margin-top: 4rem;

  @media only screen and (max-width: 1300px) {
    height: 60%;
  }
`;

export const StudyTime = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 15% 1fr 15%;
  }
`;
