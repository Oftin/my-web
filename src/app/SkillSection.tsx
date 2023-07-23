import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { Text, TextParagraph, WhiteAndGreenText } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { colors } from "@/styles/colors";
import { scrollUserToTopView } from "@/helpers";
import styled from "styled-components";

interface SkillSectionProps {
  backgroundColor: string;
}

const SkillSectionWrapper = styled.div`
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

const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: baseline;
  justify-content: center;
  justify-items: center;
`;

const ButtonForLargeScreen = styled.div`
  @media only screen and (max-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

const ButtonForSmallScreen = styled.div`
  margin-top: 2rem;

  @media only screen and (min-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

export const SkillSection = ({ backgroundColor }: SkillSectionProps) => {
  const firstSkillsColumn = [
    "TypeScript",
    "JavaScript",
    "React.js",
    "React Native",
  ];

  const secondSkillsColumn = ["Styled Component", "Git & GitHub", "Cypress"];

  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="skills">
      <SkillSectionWrapper>
        <div>
          <WhiteAndGreenText
            firstText="Favorite"
            secondText="Skills"
            textSize="32px"
          />
          <Text
            text="My Skills"
            color={colors.greenThemeColor}
            size="48px"
            styles="margin-bottom: 1.25rem"
          />
          <TextParagraph
            text={`"I always do what I can't, so I can figureout how to do it" ~ Pablo Picasso`}
            size="20px"
            width="410px"
            styles="margin-bottom: 3rem;"
          />
          <ButtonForLargeScreen>
            <CallToActionButton
              name="Read More"
              href="/skills"
              onClick={() => scrollUserToTopView()}
            />
          </ButtonForLargeScreen>
        </div>

        <SkillWrapper>
          <ul
            style={{
              color: `${colors.white}`,
              fontSize: "1.5rem",
              lineHeight: "1,875rem",
              fontWeight: 700,
              listStyle: "none",
            }}
          >
            {firstSkillsColumn.map((skill) => {
              return (
                <li key={skill} style={{ marginBottom: "1.25rem" }}>
                  <span style={{ color: `${colors.greenThemeColor}` }}>
                    {`0${
                      firstSkillsColumn.findIndex((el) => el === skill) + 1
                    }.`}{" "}
                  </span>
                  {skill}
                </li>
              );
            })}
          </ul>

          <ul
            style={{
              color: `${colors.white}`,
              fontSize: "1.5rem",
              lineHeight: "1,875rem",
              fontWeight: 700,
              listStyle: "none",
            }}
          >
            {secondSkillsColumn.map((skill) => {
              return (
                <li key={skill} style={{ marginBottom: "1.25rem" }}>
                  <span style={{ color: `${colors.greenThemeColor}` }}>
                    {`0${
                      secondSkillsColumn.findIndex((el) => el === skill) + 5
                    }.`}{" "}
                  </span>
                  {skill}
                </li>
              );
            })}
          </ul>
        </SkillWrapper>
        <ButtonForSmallScreen>
          <CallToActionButton
            name="Read More"
            href="/skills"
            onClick={() => scrollUserToTopView()}
          />
        </ButtonForSmallScreen>
      </SkillSectionWrapper>
    </PagePosition>
  );
};
