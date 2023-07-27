import { useState } from "react";
import { Icons } from "@/components/icons";
import { Image } from "@/components/Modifiers";
import {
  ElementWithDropDownDescriptionWrapper,
  MainPanelWrapper,
  SpaceBetweenElements,
  DotAndTitleWrapper,
  GreenDot,
  OpenDropDown,
  CloseDropDown,
  TextWrapper,
  ImageWrapper,
} from "./styled";
import { ElementWithDropDownDescriptionProps } from "./types";

export const ElementWithDropDownDescription = ({
  text,
  backgroundColor,
  dropDownText,
}: ElementWithDropDownDescriptionProps) => {
  const [showDropDownText, setShowDropDownText] = useState(false);

  return (
    <ElementWithDropDownDescriptionWrapper>
      <MainPanelWrapper
        backgroundColor={backgroundColor}
        onClick={() => setShowDropDownText((state) => !state)}
      >
        <SpaceBetweenElements>
          <DotAndTitleWrapper>
            <GreenDot />
            <TextWrapper>{text}</TextWrapper>
          </DotAndTitleWrapper>
          <ImageWrapper $showDropDownText={showDropDownText}>
            <Image src={Icons.DropDownArrow} alt="DropDownArrow" />
          </ImageWrapper>
        </SpaceBetweenElements>
      </MainPanelWrapper>
      {showDropDownText ? (
        <OpenDropDown>{dropDownText}</OpenDropDown>
      ) : (
        <CloseDropDown />
      )}
    </ElementWithDropDownDescriptionWrapper>
  );
};
