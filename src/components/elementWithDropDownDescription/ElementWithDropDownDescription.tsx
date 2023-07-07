import Image from "next/image";
import { colors } from "@/styles/colors";
import { ElementWithDropDownDescriptionWrapper } from "./styled";

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
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <ElementWithDropDownDescriptionWrapper backgroundColor={backgroundColor}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: `${colors.greenThemeColor}`,
                borderRadius: "0.375rem",
                margin: "0.625rem 0.75rem",
              }}
            />
            {text}
          </div>
          <div
            style={{
              width: "0.75rem",
              height: "0.75rem",
              backgroundColor: `${colors.white}`,
              borderRadius: "0.375rem",
              margin: "0.625rem 0.75rem",
            }}
          ></div>
        </div>
      </ElementWithDropDownDescriptionWrapper>
      {true && (
        <div
          style={{
            zIndex: 10,
            width: "20rem",
            backgroundColor: `${colors.greenThemeColorHover}`,
            marginTop: "-0.5rem",
            marginLeft: "1rem",
            overflowWrap: "break-word",
            padding: dropDownText ? "0.75rem" : "0.25rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            borderBottomLeftRadius: "6px",
            borderBottomRightRadius: "6px",
            color: `${colors.white}`,
          }}
        >
          {dropDownText}
        </div>
      )}
    </div>
  );
};
