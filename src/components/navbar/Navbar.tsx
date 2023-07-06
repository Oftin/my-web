import Link from "next/link";
import { WhiteAndGreenText } from "../text";
import { Nav, Ul, LeftSideLi, RightSideLi } from "./styled";
import { ArrowBack } from "../buttons";

const webTabs = [
  "About",
  "Experience",
  "Skills",
  "Education",
  "Projects",
  "Blog",
  "Contact",
].map((e) => e.toLowerCase());

interface NavbarProps {
  showArrowBack?: boolean;
}

export const Navbar = ({ showArrowBack = true }: NavbarProps) => {
  return (
    <>
      <Nav>
        <Ul>
          <LeftSideLi>
            <Link href="/">
              <WhiteAndGreenText
                firstText="Kamil"
                secondText="Bobrowki"
                textSize="32px"
              />
            </Link>
          </LeftSideLi>
          {webTabs.map((tab) => {
            return (
              <RightSideLi key={tab}>
                <Link href={`/${tab}`}>{`.${tab}()`}</Link>
              </RightSideLi>
            );
          })}
        </Ul>
      </Nav>
      {showArrowBack && <ArrowBack />}
    </>
  );
};
