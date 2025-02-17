import { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import useLanguaje from "../hooks/useLanguaje";
import useScrollY from "../hooks/useScrollY";
import { IoMenuSharp } from "react-icons/io5";
import {
  generatedThemeStyles,
  KITCHEN_MENU_TITLES,
  scrollToSection,
} from "../utils/constants";
import useTheme from "../hooks/useTheme";

const Header = ({ title = "", data = KITCHEN_MENU_TITLES }) => {
  const scrollY = useScrollY();
  const [languaje] = useLanguaje();
  const [theme] = useTheme();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isNotMenu = title !== data[0].label[languaje];
  const subTitle = isNotMenu ? title : "";

  const { themeBgColor, themeTextColor, themeBorderColor } =
    generatedThemeStyles(theme);

  const headerClassName =
    scrollY > window.innerHeight - 100
      ? `fixed top-0 left-0
        w-full h-[100px]
        ${themeBgColor} ${themeTextColor}
        border-b-2 ${themeBorderColor}
        z-10`
      : "hidden";

  const isMenuActiveClassName = isMenuActive ? "active" : "";

  return (
    <header className={headerClassName}>
      <section
        className="
          p-5 max-w-[600px] m-auto h-full
          flex items-center justify-between
        "
      >
        <img
          src="logo.webp"
          alt="logo"
          className="w-[70px] h-[70px] rounded-full cursor-pointer"
          onClick={() => scrollToSection("menu")}
        />
        <Title subTitle>{subTitle}</Title>
        <IoMenuSharp
          size={40}
          className="cursor-pointer"
          onClick={() => setIsMenuActive(!isMenuActive)}
        />
      </section>
      <section
        className={`
          max-w-[600px] m-auto ${themeBgColor}
          border-b-2 ${themeBorderColor}
          sm:border-2 sm:${themeBorderColor} sm:border-t-transparent
          menu ${isMenuActiveClassName}
        `}
      >
        <section className="flex flex-col p-5 gap-5">
          {data.map(({ label, link }, index) => (
            <Button
              key={index}
              type="chip"
              isActive={isNotMenu && title === label[languaje]}
              className="first-letter:capitalize lowercase"
              onClick={() => {
                scrollToSection(link);
                setIsMenuActive(false);
              }}
            >
              {label[languaje]}
            </Button>
          ))}
        </section>
      </section>
    </header>
  );
};

export default Header;
