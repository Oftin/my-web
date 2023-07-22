import styled from "styled-components";

export const PageSizeWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    max-width: 600px;
  }

  @media only screen and (min-width: 600px) {
    max-width: 767px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 1199px;
  }

  @media only screen and (max-width: 992px) {
    /* margin-top: 6rem;
    margin-bottom: 6rem; */
  }

  @media only screen and (min-width: 1200px) {
    max-width: 80rem;
  }
`;
