import { LinkModifier, ImageModifier } from "./styled";
import { ImageWithLinkProps } from "./types";

export const ImageWithLink = ({
  href,
  margin,
  src,
  alt,
}: ImageWithLinkProps) => {
  return (
    <LinkModifier href={href} target="_blank" $margin={margin}>
      <ImageModifier src={src} alt={alt} />
    </LinkModifier>
  );
};
