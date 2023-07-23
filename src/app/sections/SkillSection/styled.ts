import styled from "styled-components";

export const SkillSectionWrapper = styled.div`
  @media only screen and (max-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 6em;
    padding-bottom: 6em;
  }

  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 50vh;
    align-items: center;
  }
`;

export const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: baseline;
  justify-content: center;
  justify-items: center;
`;

export const ButtonForLargeScreen = styled.div`
  @media only screen and (max-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

export const ButtonForSmallScreen = styled.div`
  margin-top: 2rem;

  @media only screen and (min-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;
