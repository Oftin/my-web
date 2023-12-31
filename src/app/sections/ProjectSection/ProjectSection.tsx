import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { ShortTileInfo } from "@/components/shortTileInfo";
import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { ProjectSectionWrapper, TileWrapper } from "./styled";
import { ProjectSectionProps } from "./types";

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
      <ProjectSectionWrapper>
        <Text text="Last" color={colors.greenThemeColor} size="36px" />
        <Text
          text="Projects"
          color={colors.white}
          size="48px"
          styles="margin-bottom: 3.5rem"
        />

        <TileWrapper>
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
        </TileWrapper>

        <CallToActionButton
          name="All Projects"
          href="/projects#top"
          styles="margin-top: 5rem"
        />
      </ProjectSectionWrapper>
    </PagePosition>
  );
};
