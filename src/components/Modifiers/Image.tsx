import { ImageModifier } from "./styled";
import { ImageProps } from "./types";

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <ImageModifier src={src} alt={alt} layout="responsive" loading="eager" />
  );
};
