import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { ShortTileInfo } from "@/components/shortTileInfo";
import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { BlogSectionWrapper, TileWrapper } from "./styled";
import { BlogSectionProps } from "./type";

const threeLastArticles = [
  {
    title: "Pro tips in JavaScripts",
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "/blog",
  },
  {
    title: "Burnout ?!",
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "/blog",
  },
  {
    title: "Soft skills in IT",
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "/blog",
  },
];

export const BlogSection = ({ backgroundColor }: BlogSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} id="blog">
      <BlogSectionWrapper>
        <Text text="Blog" color={colors.greenThemeColor} size="36px" />
        <Text
          text="Latest Articles"
          color={colors.white}
          size="48px"
          styles="margin-bottom: 3.5rem"
        />

        <TileWrapper>
          {threeLastArticles.map((article) => {
            return (
              <ShortTileInfo
                key={article.title}
                title={article.title}
                href={article.href}
                shortInfo={article.short}
              />
            );
          })}
        </TileWrapper>

        <CallToActionButton
          name="All Articles"
          href="/blog#top"
          styles="margin-top: 5rem"
        />
      </BlogSectionWrapper>
    </PagePosition>
  );
};
