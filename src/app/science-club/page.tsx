"use client";

import { PagePosition } from "@/components/wrappers/pagePosition";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { colors } from "@/styles/colors";
import {
  PageTitleMainText,
  PageTitleSecondText,
  TextParagraph,
} from "@/components/text";
import { ScienceClubWrapper, ContentWrapper } from "./styled";

export default function ScienceClub() {
  const marginBottomForTextParagraph = ["1.5rem", "1.5rem", "1.5rem", "1.5rem"];

  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.ebonyClay}>
        <ScienceClubWrapper>
          <ContentWrapper>
            <PageTitleSecondText>
              <div>University</div>
              <div>Time</div>
            </PageTitleSecondText>

            <PageTitleMainText $marginBottom="2rem">
              <div>Science</div>
              <div>Club</div>
            </PageTitleMainText>

            <TextParagraph $marginBottom={marginBottomForTextParagraph}>
              As a member of a research club during my studies, I had the
              unusual opportunity to work in a team of about 20 talented people.
              Our team was extremely diverse, including mechanics, electronics
              engineers, programmers, 3D designers, and communication and power
              people.
            </TextParagraph>

            <TextParagraph $marginBottom={marginBottomForTextParagraph}>
              Through an intensive 9 months of dedicated work and collaboration,
              we were able to achieve an incredible goal - the creation of a
              Mars rover. It was a huge challenge, but thanks to our combined
              effort, determination and commitment, we managed to turn our ideas
              into real solutions.
            </TextParagraph>

            <TextParagraph $marginBottom={marginBottomForTextParagraph}>
              Our work did not go unnoticed, as we had the opportunity to
              participate in the prestigious ERC2019 competition. This was not
              only a unique experience, but also a proof that our work was
              appreciated by the scientific community. We measured ourselves
              against other talented teams, and our Mars rover attracted the
              attention and interest of many people.
            </TextParagraph>

            <TextParagraph>
              Being part of this study circle was inspiring and educational for
              me. Not only did I broaden my technical skills, but I also learned
              how to work in a team, how to solve problems and how to operate
              under difficult conditions. It was an unforgettable experience
              that will always remain in my memory.
            </TextParagraph>
          </ContentWrapper>
        </ScienceClubWrapper>
      </PagePosition>
      <Footer />
    </>
  );
}
