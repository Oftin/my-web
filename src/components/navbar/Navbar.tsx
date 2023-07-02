import Link from "next/link";
import { WhiteAndGreenText } from "../text";
import { Nav, Ul, LeftSideLi, RightSideLi } from "./styled";

const webTabs = [
  "About",
  "Experience",
  "Education",
  "Skills",
  "Blog",
  "Projects",
  "Contact",
].map((e) => e.toLowerCase());

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
