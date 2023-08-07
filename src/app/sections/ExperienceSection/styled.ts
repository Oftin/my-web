import styled from "styled-components";

export const ExperienceSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  justify-self: center;
  padding-top: 6em;
  padding-bottom: 6em;
  width: 80vw;
  max-width: 1200px;

  @media only screen and (min-width: 992px) {
    height: 100vh;
  }
`;

export const TimeLineHorizontalForLargeScreenWidth = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

export const TimeLineVerticalForSmallScreenWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 5rem 0;
  width: 60vw;

  @media only screen and (min-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

export const Heading = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  z-index: 10;
  justify-items: center;
  align-items: center;
  width: 90vw;
  margin-bottom: 4px;
`;

export const FourColumns = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  gap: 1.25rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

export const FiveRows = styled.div`
  z-index: 20;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  gap: 1.25rem;
  grid-template-rows: repeat(5, minmax(0, 1fr));
`;

export const TextPosition = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const IconWrapper = styled.div`
  @media only screen and (max-width: 575px) {
    width: 55px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: 70px;
  }

  @media only screen and (min-width: 768px) {
    width: 85px;
  }
`;

export const SmallScreenContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;
