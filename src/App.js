import { useEffect, useRef, useState } from "react";
import ComboBreakfasts from "./pages/ComboBreakfasts";
import Cafe from "./pages/Cafe";
import Drinks from "./pages/Drinks";
import Menu from "./pages/Menu";
import Breakfasts from "./pages/Breakfasts";
import Waffles from "./pages/Waffles";
import Sandwich from "./pages/Sandwich";
import Pizzas from "./pages/Pizzas";
import Footer from "./components/Footer";
import Header from "./components/Header";
import useScrollY from "./hooks/useScrollY";
import useLanguaje from "./hooks/useLanguaje";
import {
  BREAKFASTS_TITLE,
  CAFE_TILTE,
  COMBOS_BREAKFASTS_TITLE,
  DRINKS_TILTE,
  generateRefObject,
  getTitle,
  MENU_TITLE,
  PIZZA_TITLE,
  SANDWICH_TITLE,
  WAFFLES_TITLE,
} from "./utils/constants";

const App = () => {
  const [title, setTitle] = useState("");
  const [languaje] = useLanguaje();
  const scrollY = useScrollY();

  const menuTitle = useRef(null);
  const cafeTitle = useRef(null);
  const drinkTitle = useRef(null);
  const comboBfTitle = useRef(null);
  const breakfastsTitle = useRef(null);
  const wafflesTitle = useRef(null);
  const sandwichTitle = useRef(null);
  const pizzasTitle = useRef(null);

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
    };

    if (Object.keys(allRef).every((obj) => allRef[obj].top))
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
    <main className="relative w-full h-full min-h-screen bg-black flex flex-col justify-center">
      <Header title={title} />
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
      </section>
      <Footer />
    </main>
  );
};

export default App;
