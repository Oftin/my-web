import Image from "next/image";
import { useState } from "react";
import { Icons } from "@/components/icons";
import {
  ElementWithDropDownDescriptionWrapper,
  MainPanelWrapper,
  SpaceBetweenElements,
  DotAndTitleWrapper,
  GreenDot,
  OpenDropDown,
  CloseDropDown,
  TextWrapper,
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
          <Image
            src={Icons.DropDownArrow}
            alt={""}
            width={30}
            height={30}
            style={{
              rotate: showDropDownText ? "" : "180deg",
            }}
          />
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
