import { useState, useEffect } from "react";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { colors } from "@/styles/colors";
import {
  SkillSectionWrapper,
  SkillWrapper,
  ButtonForLargeScreen,
  ButtonForSmallScreen,
  Ul,
  MainText,
  SecondText,
  SkillNumber,
  SkillName,
  TextParagraph,
  LeftSide,
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
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smallScreen = () => {
    return windowWidth <= 1023;
  };

  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="skills">
      <SkillSectionWrapper>
        <LeftSide>
          <SecondText>
            <div>Favorite</div>
            <div>Skills</div>
          </SecondText>
          <MainText>
            <div>My</div>
            <div>Skills</div>
          </MainText>

          <TextParagraph>
            &quot;I always do what I can&apos;t, so I can figure out how to do
            it&quot; ~ Pablo Picasso
          </TextParagraph>

          <ButtonForLargeScreen>
            <CallToActionButton name="Read More" href="/skills#top" />
          </ButtonForLargeScreen>
        </LeftSide>

        <SkillWrapper>
          <Ul>
            {firstSkillsColumn.map((skill) => {
              return (
                <li
                  key={skill}
                  style={{
                    display: "flex",
                    marginBottom: "1.25rem",
                    gap: "10px",
                  }}
                >
                  {smallScreen() ? (
                    <>
                      <span
                        style={{
                          color: `${colors.greenThemeColor}`,
                          width: "100%",
                          textAlign: "end",
                        }}
                      >
                        <SkillNumber>
                          {`0${
                            firstSkillsColumn.findIndex((el) => el === skill) +
                            1
                          }.`}
                        </SkillNumber>
                      </span>
                      <SkillName>{skill}</SkillName>{" "}
                    </>
                  ) : (
                    <SkillName>
                      <span
                        style={{
                          color: `${colors.greenThemeColor}`,
                        }}
                      >
                        {`0${
                          firstSkillsColumn.findIndex((el) => el === skill) + 1
                        }. `}
                      </span>
                      {skill}
                    </SkillName>
                  )}
                </li>
              );
            })}
          </Ul>

          <Ul>
            {secondSkillsColumn.map((skill) => {
              return (
                <li
                  key={skill}
                  style={{
                    display: "flex",
                    marginBottom: "1.25rem",
                    gap: "10px",
                  }}
                >
                  {smallScreen() ? (
                    <>
                      <span
                        style={{
                          color: `${colors.greenThemeColor}`,
                          width: "100%",
                          textAlign: "end",
                        }}
                      >
                        <SkillNumber>
                          {`0${
                            secondSkillsColumn.findIndex((el) => el === skill) +
                            5
                          }.`}
                        </SkillNumber>
                      </span>
                      <SkillName>{skill}</SkillName>
                    </>
                  ) : (
                    <SkillName>
                      <span
                        style={{
                          color: `${colors.greenThemeColor}`,
                        }}
                      >
                        {`0${
                          secondSkillsColumn.findIndex((el) => el === skill) + 5
                        }.`}
                      </span>
                      {skill}
                    </SkillName>
                  )}
                </li>
              );
            })}
          </Ul>
        </SkillWrapper>

        <ButtonForSmallScreen>
          <CallToActionButton name="Read More" href="/skills#top" />
        </ButtonForSmallScreen>
      </SkillSectionWrapper>
    </PagePosition>
  );
};
