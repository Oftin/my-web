import styled from "styled-components";
import { colors } from "@/styles/colors";
import { borderRadius } from "@/styles/borderRadius";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 7rem 0;
  width: 80vw;
  max-width: 1200px;

  @media only screen and (min-width: 992px) {
    margin-top: 12rem;
  }
`;

export const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleWrapper = styled.div`
  @media only screen and (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  @media only screen and (max-width: 992px) {
    order: 1;
    width: 100%;
  }
`;

export const InterestsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

export const InterestsTileWrapper = styled.div`
  display: grid;
  margin-top: 2rem;

  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
`;

export const InterestTile = styled.div`
  ${borderRadius["8px"]}
  box-shadow: 0px 0px 10px 2px ${colors.greenThemeColor};

  @media only screen and (max-width: 575px) {
    padding: 8px;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    padding: 8px;
  }

  @media only screen and (min-width: 768px) {
    padding: 24px;
  }
`;

export const TileItem = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 575px) {
    margin: 0.5rem;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    margin: 0.5rem;
  }

  @media only screen and (min-width: 768px) {
    margin: 1rem;
  }
`;
