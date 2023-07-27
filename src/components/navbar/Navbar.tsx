import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { slide as Menu } from "react-burger-menu";
import { Link as ReactScrollLink } from "react-scroll";
import {
  NavbarPositionFixed,
  NavbarUlWrapper,
  LeftSideLi,
  RightSideLiHorizontal,
  RightSideLiVertical,
  MenuItems,
  MainText,
} from "./styled";
import { ArrowBack } from "@/components/buttons";
import { colors } from "@/styles/colors";
import { NavbarProps } from "./types";

const webTabs = [
  "About",
  "Experience",
  "Skills",
  "Education",
  // "Projects",
  // "Blog",
  "Contact",
].map((e) => e.toLowerCase());

export const Navbar = ({ showArrowBack = true }: NavbarProps) => {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentPage = usePathname();
  const mainScreen = currentPage === "/";

  const textInsideHamburgerMenu = (text: string) => {
    return (
      <span style={{ color: `${colors.greenThemeColor}` }}>
        .<span style={{ color: `${colors.white}` }}>{text}</span>
        ()
      </span>
    );
  };

  const turnOnHamburgerMenu = () => {
    return windowWidth <= 992;
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
                <MainText>
                  <div>Kamil</div>
                  <div>Bobrowki</div>
                </MainText>
              </ReactScrollLink>
            ) : (
              <Link href="/" onClick={() => setOpenHamburgerMenu(false)}>
                <MainText>
                  <div>Kamil</div>
                  <div>Bobrowki</div>
                </MainText>
              </Link>
            )}
          </LeftSideLi>

          {turnOnHamburgerMenu() ? (
            <RightSideLiVertical>
              <Menu
                right
                width={"100%"}
                isOpen={openHamburgerMenu}
                onOpen={() => setOpenHamburgerMenu((prevState) => !prevState)}
              >
                {webTabs.map((tab) => {
                  return (
                    <MenuItems key={tab}>
                      <Link
                        href={`/#${tab}`}
                        onClick={() =>
                          setOpenHamburgerMenu((prevState) => !prevState)
                        }
                      >
                        {textInsideHamburgerMenu(tab)}
                      </Link>
                    </MenuItems>
                  );
                })}
              </Menu>
            </RightSideLiVertical>
          ) : (
            <>
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
                        onClick={() =>
                          setOpenHamburgerMenu((prevState) => !prevState)
                        }
                      >
                        {`.${tab}()`}
                      </ReactScrollLink>
                    ) : (
                      <Link
                        href={`/#${tab}`}
                        onClick={() =>
                          setOpenHamburgerMenu((prevState) => !prevState)
                        }
                      >{`.${tab}()`}</Link>
                    )}
                  </RightSideLiHorizontal>
                );
              })}
            </>
          )}
        </NavbarUlWrapper>
      </NavbarPositionFixed>
      {showArrowBack && <ArrowBack />}
    </>
  );
};
