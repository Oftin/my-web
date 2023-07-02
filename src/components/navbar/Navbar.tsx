import Link from "next/link";
import { ColorText, WhiteAndGreenText } from "../text";
import { colors } from "@/styles/colors";
import { Nav, Ul, LeftSideLi, RightSideLi } from "./styled";

const webTabs = ["Home", "About", "Blog", "Project", "Contact"].map((e) =>
  e.toLowerCase()
);

export const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <LeftSideLi>
          <Link href={"/"}>
            <WhiteAndGreenText firstText="Kamil" secondText="Bobrowki" />
          </Link>
        </LeftSideLi>
        {webTabs.map((tab) => {
          return (
            <RightSideLi key={tab} style={{ display: "flex" }}>
              <Link href={`/${tab}`}>{`.${tab}()`}</Link>
            </RightSideLi>
          );
        })}
      </Ul>
    </Nav>
  );
};
