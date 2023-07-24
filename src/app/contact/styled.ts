import styled from "styled-components";
import { TextArea } from "@/components/inputs";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 2rem;
`;

export const TopInputs = styled.div`
  display: grid;
  grid-template-columns: 315px 315px;
  gap: 20px;
  margin: 1rem;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 250px 250px;
  }
`;

export const TextAreaModifier = styled(TextArea)`
  width: 650px;

  @media only screen and (max-width: 700px) {
    width: 520px;
  }
`;
