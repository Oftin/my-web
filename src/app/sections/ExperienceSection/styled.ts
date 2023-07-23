import styled from "styled-components";

export const ExperienceSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  justify-self: center;
  padding-top: 6em;
  padding-bottom: 6em;

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
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 80%;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

export const Heading = styled.div`
  width: 100%;
  padding-bottom: 4em;

  @media only screen and (max-width: 992px) {
    padding-left: 8em;
  }
`;

export const ArrowWrapper = styled.div`
  position: absolute;
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
