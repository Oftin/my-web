import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { Text, TextParagraph, WhiteAndGreenText } from "@/components/text";
import { colors } from "@/styles/colors";
import {
  SkillSectionWrapper,
  SkillWrapper,
  ButtonForLargeScreen,
  ButtonForSmallScreen,
} from "./styled";
import { SkillSectionProps } from "./types";

const firstSkillsColumn = [
  "TypeScript",
  "JavaScript",
  "React.js",
  "React Native",
];

const secondSkillsColumn = ["Styled Component", "Git & GitHub", "Cypress"];

export const SkillSection = ({ backgroundColor }: SkillSectionProps) => {
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
            <CallToActionButton name="Read More" href="/skills" />
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
          <CallToActionButton name="Read More" href="/skills" />
        </ButtonForSmallScreen>
      </SkillSectionWrapper>
    </PagePosition>
  );
};
