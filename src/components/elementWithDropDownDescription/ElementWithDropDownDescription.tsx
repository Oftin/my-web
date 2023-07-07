import Image from "next/image";
import { useState } from "react";
import {
  ElementWithDropDownDescriptionWrapper,
  MainPanelWrapper,
  SpaceBetweenElements,
  DotAndTitleWrapper,
  GreenDot,
  OpenDropDown,
  CloseDropDown,
} from "./styled";
import { Icons } from "../icons";

interface ElementWithDropDownDescriptionProps {
  text: string;
  backgroundColor: string;
  dropDownText: string;
}

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
            {text}
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
