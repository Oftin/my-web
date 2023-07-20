import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { Text, WhiteAndGreenText } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { colors } from "@/styles/colors";
import { scrollUserToTopView } from "@/helpers";

interface SkillSectionProps {
  backgroundColor: string;
}

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
      <Position styles={`width: 100%; height: 60vh;`}>
        <Column columns={2} styles="width: 100%; height: 50vh">
          <Position alignItems="start" styles="width: 100%;">
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
            <p
              style={{
                color: `${colors.white}`,
                fontSize: "1.5rem",
                lineHeight: "1,875rem",
                opacity: 0.7,
              }}
            >
              &quot;I always do what I can&apos;t, so I can figure<br></br>out
              how to do it&quot; ~ Pablo Picasso
            </p>

            <CallToActionButton
              name="Read More"
              href="/skills"
              styles="margin-top: 3rem"
              onClick={() => scrollUserToTopView()}
            />
          </Position>

          <Position>
            <Column columns={2} gap={5}>
              <Position alignItems="start">
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
                            firstSkillsColumn.findIndex((el) => el === skill) +
                            1
                          }.`}{" "}
                        </span>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </Position>

              <Position alignItems="start">
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
                            secondSkillsColumn.findIndex((el) => el === skill) +
                            5
                          }.`}{" "}
                        </span>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </Position>
            </Column>
          </Position>
        </Column>
      </Position>
    </PagePosition>
  );
};
