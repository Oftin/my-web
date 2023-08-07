import styled from "styled-components";

export const EducationSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 6em;
  padding-bottom: 3em;
`;

export const TitleWrapper = styled.div`
  @media only screen and (min-width: 1300px) {
    width: 100%;
  }
`;

export const StudyStage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StudyTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 575px) {
    margin: 1.5rem 0;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    margin: 2rem 0;
  }

  @media only screen and (min-width: 768px) {
    margin: 3rem 0;
  }
`;

export const ImageWithButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  max-width: 1200px;
  margin-top: 2rem;
  gap: 20px;
`;
