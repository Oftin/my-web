import Link from "next/link";
import { ColorText } from "../text";
import { colors } from "@/styles/colors";

const webTabs = ["Home", "About", "Blog", "Project", "Contact"].map((e) =>
  e.toLowerCase()
);

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>
            <ColorText text="Kamil" color={colors.white} />
            <ColorText text="Bobrowski" color={colors.greenThemeColor} />
          </Link>
        </li>
        {webTabs.map((tab) => {
          return (
            <li key={tab}>
              <Link href={`/${tab}`}>{`.${tab}()`}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
