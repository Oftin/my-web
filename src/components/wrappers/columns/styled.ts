import styled from "styled-components";

export const TwoColumnWrapper = styled.div<{ gap: number }>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${(props) => props.gap}px;
`;

export const FlexColumnWrapper = styled.div<{
  items: string;
  justify: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.items};
  justify-content${(props) => props.justify};
`;
