import { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import useLanguaje from "../hooks/useLanguaje";
import useScrollY from "../hooks/useScrollY";
import { IoMenuSharp } from "react-icons/io5";
import { MENU_TITLES, scrollToSection } from "../utils/constants";

const logo = "https://images7.alphacoders.com/349/thumb-1920-349766.jpg";

const Header = ({ title = "" }) => {
  const scrollY = useScrollY();
  const [languaje] = useLanguaje();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isNotMenu = title !== MENU_TITLES[0].label[languaje];
  const subTitle = isNotMenu ? title : "";

  const headerClassName =
    scrollY > window.innerHeight - 100
      ? `fixed top-0 left-0
        w-full h-[100px]
        bg-black text-beige
        border-b-2 border-beige
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
          src="logo.png"
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
          max-w-[600px] m-auto bg-black
          border-b-2 border-beige
          sm:border-2 sm:border-beige sm:border-t-transparent
          menu ${isMenuActiveClassName}
        `}
      >
        <section className="flex flex-col p-5 gap-5">
          {MENU_TITLES.map(({ label, link }, index) => (
            <Button
              key={index}
              type="chip"
              isActive={isNotMenu && title === label[languaje]}
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
