import styled from "styled-components";

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ColumnSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }
`;
