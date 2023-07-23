import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { useEffect, useState } from "react";
import { Link as ReactScrollLink } from "react-scroll";
import { WhiteAndGreenText } from "../text";
// import { Nav, Ul, LeftSideLi, RightSideLi } from "./styled";
import { ArrowBack } from "../buttons";
import { scrollUserToTopView } from "@/helpers";
import { styled } from "styled-components";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

const NavbarPositionFixed = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 999;

  background-color: ${colors.background.mirage};
  border-bottom: 1px solid ${colors.greenThemeColor};

  &:hover {
    box-shadow: 0px 0px 10px 0px ${colors.greenThemeColor};
  }
`;

const NavbarUlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 5rem;
  margin-left: 8rem;
  margin-right: 8rem;
  list-style-type: none;

  @media only screen and (max-width: 1200px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;

const LeftSideLi = styled.li`
  margin-right: auto;
  cursor: pointer;
`;

const RightSideLiHorizontal = styled.li`
  display: flex;
  cursor: pointer;
  margin-left: 1rem;
  ${typography.text["24px"]}
  color: ${colors.white};

  &:hover {
    color: ${colors.greenThemeColor};
  }

  @media only screen and (max-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

const RightSideLiVertical = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* margin-left: 1rem; */
  ${typography.text["36px"]}
  color: ${colors.white};
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;

  @media only screen and (min-width: 992px) {
    &:hover {
      color: ${colors.greenThemeColor};
    }
  }

  @media only screen and (min-width: 991px) {
    visibility: hidden;
    display: none;
  }
`;

const MenuItems = styled.div`
  margin: 1rem;
`;

const webTabs = [
  "About",
  "Experience",
  "Skills",
  "Education",
  // "Projects",
  // "Blog",
  "Contact",
].map((e) => e.toLowerCase());

interface NavbarProps {
  showArrowBack?: boolean;
}

export const Navbar = ({ showArrowBack = true }: NavbarProps) => {
  const [mainScreen, setMainScreen] = useState<boolean>(
    // window.location.pathname === "/"
    true
  );
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState<boolean>(false);

  // useEffect(() => {
  //   setMainScreen(window.location.pathname === "/");
  // }, [mainScreen]);

  const textInsideHamburgerMenu = (text: string) => {
    return (
      <span style={{ color: `${colors.greenThemeColor}` }}>
        .<span style={{ color: `${colors.white}` }}>{text}</span>
        ()
      </span>
    );
  };

  return (
    <>
      <NavbarPositionFixed>
        <NavbarUlWrapper>
          <LeftSideLi>
            {mainScreen ? (
              <ReactScrollLink
                to={"hello"}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setOpenHamburgerMenu(false)}
              >
                <WhiteAndGreenText
                  firstText="Kamil"
                  secondText="Bobrowki"
                  textSize="32px"
                />
              </ReactScrollLink>
            ) : (
              <Link
                href="/"
                onClick={() => {
                  scrollUserToTopView();
                  setOpenHamburgerMenu(false);
                }}
              >
                <WhiteAndGreenText
                  firstText="Kamil"
                  secondText="Bobrowki"
                  textSize="32px"
                />
              </Link>
            )}
          </LeftSideLi>

          {webTabs.map((tab) => {
            return (
              <RightSideLiHorizontal key={tab}>
                {mainScreen ? (
                  <ReactScrollLink
                    to={`${tab}`}
                    spy={true}
                    smooth={true}
                    offset={tab === "skills" ? -200 : undefined}
                    duration={500}
                    onClick={() => setOpenHamburgerMenu(false)}
                  >
                    {`.${tab}()`}
                  </ReactScrollLink>
                ) : (
                  <Link
                    href={`/#${tab}`}
                    onClick={() => {
                      scrollUserToTopView();
                      setOpenHamburgerMenu(false);
                    }}
                  >{`.${tab}()`}</Link>
                )}
              </RightSideLiHorizontal>
            );
          })}

          <RightSideLiVertical>
            <Menu
              right
              width={"100%"}
              isOpen={openHamburgerMenu}
              onOpen={() => setOpenHamburgerMenu(true)}
            >
              {webTabs.map((tab) => {
                return (
                  <MenuItems key={tab}>
                    <Link
                      href={`/#${tab}`}
                      onClick={() => {
                        scrollUserToTopView();
                        setOpenHamburgerMenu(false);
                      }}
                    >
                      {textInsideHamburgerMenu(tab)}
                    </Link>
                  </MenuItems>
                );
              })}
            </Menu>
          </RightSideLiVertical>
        </NavbarUlWrapper>
      </NavbarPositionFixed>
      {showArrowBack && <ArrowBack />}
    </>
  );
};
