import { Images } from "@/components/images";
import { ImageWithLink } from "@/components/Modifiers";
import { FooterProps } from "./types";
import {
  FooterWrapper,
  LeftTopText,
  LeftBottomText,
  FooterImage,
  RightText,
} from "./styled";

export const Footer = ({ backgroundColor }: FooterProps) => {
  return (
    <FooterWrapper $backgroundColor={backgroundColor}>
      <div>
        <LeftTopText>
          <div>Kamil</div>
          <div>Bobrowski</div>
        </LeftTopText>
        <LeftBottomText>Front-end Developer</LeftBottomText>
      </div>

      <FooterImage>
        <ImageWithLink
          href="https://www.linkedin.com/in/kamil-bobrowski-a8a276193/"
          src={Images.LinkedIn}
          alt=""
        />
      </FooterImage>

      <RightText>
        <div>© 2023 Kamil Bobrowski.</div>
        <div>All rights reserved.</div>
      </RightText>
    </FooterWrapper>
  );
};
