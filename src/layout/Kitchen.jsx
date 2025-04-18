import { useEffect, useRef, useState } from "react";

import useLanguaje from "../hooks/useLanguaje";
import useScrollY from "../hooks/useScrollY";
import Header from "../components/Header";
import Menu from "../pages/Menu";
import Cafe from "../pages/Cafe";
import Drinks from "../pages/Drinks";
import ComboBreakfasts from "../pages/ComboBreakfasts";
import Breakfasts from "../pages/Breakfasts";
import Waffles from "../pages/Waffles";
import Sandwich from "../pages/Sandwich";
import Pizzas from "../pages/Pizzas";
import DailyMenu from "../pages/DailyMenu";
import Footer from "../components/Footer";
import ModalImage from "../components/ModalImage";

import {
  BREAKFASTS_TITLE,
  CAFE_TILTE,
  COMBOS_BREAKFASTS_TITLE,
  DAILYMENU_TITLE,
  DRINKS_TILTE,
  generateRefObject,
  getTitle,
  KITCHEN,
  KITCHEN_MENU_TITLES,
  MENU_TITLE,
  PIZZA_TITLE,
  SANDWICH_TITLE,
  WAFFLES_TITLE,
} from "../utils/constants";
import useTheme from "../hooks/useTheme";

const Kitchen = () => {
  const [title, setTitle] = useState("");
  const [languaje] = useLanguaje();
  const { setTheme, themeBgColor } = useTheme();
  const scrollY = useScrollY();

  const menuTitle = useRef(null);
  const cafeTitle = useRef(null);
  const drinkTitle = useRef(null);
  const comboBfTitle = useRef(null);
  const breakfastsTitle = useRef(null);
  const wafflesTitle = useRef(null);
  const sandwichTitle = useRef(null);
  const pizzasTitle = useRef(null);
  const dailyMenuTitle = useRef(null);

  useEffect(() => {
    setTheme(KITCHEN);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const allRef = {
      menuTitle: generateRefObject(menuTitle, MENU_TITLE[languaje]),
      cafeTitle: generateRefObject(cafeTitle, CAFE_TILTE[languaje]),
      drinkTitle: generateRefObject(drinkTitle, DRINKS_TILTE[languaje]),
      comboBfTitle: generateRefObject(
        comboBfTitle,
        COMBOS_BREAKFASTS_TITLE[languaje]
      ),
      breakfastsTitle: generateRefObject(
        breakfastsTitle,
        BREAKFASTS_TITLE[languaje]
      ),
      wafflesTitle: generateRefObject(wafflesTitle, WAFFLES_TITLE[languaje]),
      sandwichTitle: generateRefObject(sandwichTitle, SANDWICH_TITLE[languaje]),
      pizzasTitle: generateRefObject(pizzasTitle, PIZZA_TITLE[languaje]),
      dailyMenuTitle: generateRefObject(
        dailyMenuTitle,
        DAILYMENU_TITLE[languaje]
      ),
    };
    setTitle(getTitle(allRef));
  }, [
    cafeTitle,
    drinkTitle,
    comboBfTitle,
    breakfastsTitle,
    wafflesTitle,
    sandwichTitle,
    pizzasTitle,
    scrollY,
    languaje,
    title,
  ]);

  return (
    <main
      className={`relative w-full h-full min-h-screen ${themeBgColor} flex flex-col justify-center`}
    >
      <Header title={title} data={KITCHEN_MENU_TITLES} />
      <section className="w-full max-w-[600px] m-auto h-full">
        <section id="menu" ref={menuTitle}>
          <Menu />
        </section>
        <section id="cafe" ref={cafeTitle}>
          <Cafe />
        </section>
        <section id="drinks" ref={drinkTitle}>
          <Drinks />
        </section>
        <section id="combos" ref={comboBfTitle}>
          <ComboBreakfasts />
        </section>
        <section id="breakfasts" ref={breakfastsTitle}>
          <Breakfasts />
        </section>
        <section id="waffles" ref={wafflesTitle}>
          <Waffles />
        </section>
        <section id="sandwichs" ref={sandwichTitle}>
          <Sandwich />
        </section>
        <section id="pizzas" ref={pizzasTitle}>
          <Pizzas />
        </section>
        <section id="dailymenu" ref={dailyMenuTitle}>
          <DailyMenu />
        </section>
      </section>
      <Footer />
      <ModalImage />
    </main>
  );
};

export default Kitchen;
