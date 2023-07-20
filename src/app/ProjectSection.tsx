import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { ShortTileInfo } from "@/components/shortTileInfo";
import { Text } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { colors } from "@/styles/colors";
import { scrollUserToTopView } from "@/helpers";

interface ProjectSectionProps {
  backgroundColor: string;
}

const threeLastProjects = [
  {
    title: "ChatGPT for Chrome",
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "/projects",
  },
  {
    title: "Better learn English",
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "/projects",
  },
  {
    title: "Crypto Comparison",
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "/projects",
  },
];

export const ProjectSection = ({ backgroundColor }: ProjectSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} id="projects">
      <Position styles={`height: 100vh;  width: 100%;`}>
        <Text text="Last" color={colors.greenThemeColor} size="36px" />
        <Text
          text="Projects"
          color={colors.white}
          size="48px"
          styles="margin-bottom: 3.5rem"
        />

        <Column columns={3} gap={50}>
          {threeLastProjects.map((project) => {
            return (
              <ShortTileInfo
                key={project.title}
                title={project.title}
                href={project.href}
                shortInfo={project.short}
              />
            );
          })}
        </Column>

        <CallToActionButton
          name="All Projects"
          href="/projects"
          styles="margin-top: 5rem"
          onClick={() => scrollUserToTopView()}
        />
      </Position>
    </PagePosition>
  );
};
