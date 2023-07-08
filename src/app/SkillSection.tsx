import { CallToActionButton } from "@/components/buttons";
import { Text, WhiteAndGreenText } from "@/components/text";
import { FlexColumn, Column } from "@/components/wrappers/columns";
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
    <FlexColumn
      items="center"
      justify="center"
      styles={`width: 100vw; height: 60vh; background-color: ${backgroundColor}`}
    >
      <Column
        columns={2}
        styles="width: 100vw; height: 50vh"
        extraSpaceFromEdgeOfScreen={true}
      >
        <FlexColumn items="start" justify="center" styles="width: 100vw;">
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
            &quot;I always do what I can&apos;t, so I can figure<br></br>out how
            to do it&quot; ~ Pablo Picasso
          </p>

          <CallToActionButton
            name="Read More"
            href="/skills"
            styles="margin-top: 3rem"
            onClick={() => scrollUserToTopView()}
          />
        </FlexColumn>

        <FlexColumn items="center" justify="center">
          <Column columns={2} gap={5}>
            <FlexColumn items="start" justify="start">
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
            </FlexColumn>

            <FlexColumn items="start" justify="start">
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
            </FlexColumn>
          </Column>
        </FlexColumn>
      </Column>
    </FlexColumn>
  );
};
