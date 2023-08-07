import styled, { css } from "styled-components";

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ColumnSkills = styled.div`
  display: grid;

  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media only screen and (min-width: 576px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`;

export const SectionWrapper = styled.div<{ $backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-bottom: 4rem;

  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${$backgroundColor};
    `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;
