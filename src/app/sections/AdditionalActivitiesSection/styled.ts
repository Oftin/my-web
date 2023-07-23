import styled from "styled-components";

export const AdditionalActivitiesSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 6em;
  padding-bottom: 6em;
`;

export const TitleWrapper = styled.div`
  @media only screen and (min-width: 1300px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1300px) {
    margin-top: 7.5rem;
  }
`;
