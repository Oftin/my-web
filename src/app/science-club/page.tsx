"use client";

import { PagePosition } from "@/components/wrappers/pagePosition";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TextParagraph, WhiteAndGreenText } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { colors } from "@/styles/colors";
import styled from "styled-components";

const ScienceClubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: 8rem;
  margin-bottom: 4rem;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: start;
  width: 80vw;
  gap: 20px;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function ScienceClub() {
  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.ebonyClay}>
        <ScienceClubWrapper>
          <WhiteAndGreenText
            firstText="University"
            secondText="Time"
            textSize="32px"
          />
          <WhiteAndGreenText
            firstText="Science"
            secondText="Club"
            textSize="48px"
          />
          <ColumnWrapper>
            <div
              style={{
                backgroundColor: "pink",
                width: 500,
                height: 500,
                marginTop: "5rem",
              }}
            />
            <div>
              <TextParagraph
                text={
                  "As a member of a research club during my studies, I had the unusual opportunity to work in a team of about 20 talented people. Our team was extremely diverse, including mechanics, electronics engineers, programmers, 3D designers, and communication and power people."
                }
                size="24px"
                styles="margin-top: 5rem;"
              />
              <TextParagraph
                text={
                  "Through an intensive 9 months of dedicated work and collaboration, we were able to achieve an incredible goal - the creation of a Mars rover. It was a huge challenge, but thanks to our combined effort, determination and commitment, we managed to turn our ideas into real solutions."
                }
                size="24px"
                styles="margin-top: 1rem; margin-bottom: 1rem;"
              />
              <TextParagraph
                text={
                  "Our work did not go unnoticed, as we had the opportunity to participate in the prestigious ERC2019 competition. This was not only a unique experience, but also a proof that our work was appreciated by the scientific community. We measured ourselves against other talented teams, and our Mars rover attracted the attention and interest of many people."
                }
                size="24px"
                styles="margin-top: 1rem; margin-bottom: 1rem;"
              />
              <TextParagraph
                text={
                  "Being part of this study circle was inspiring and educational for me. Not only did I broaden my technical skills, but I also learned how to work in a team, how to solve problems and how to operate under difficult conditions. It was an unforgettable experience that will always remain in my memory."
                }
                size="24px"
              />
            </div>
          </ColumnWrapper>
        </ScienceClubWrapper>
      </PagePosition>
      <Footer />
    </>
  );
}
