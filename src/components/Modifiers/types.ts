import { StaticImageData } from "next/image";

export interface ImageProps {
  src: StaticImageData;
  alt: string;
}

export interface ImageWithLinkProps extends ImageProps {
  href: string;
  margin?: string;
}
