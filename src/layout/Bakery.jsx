import { useEffect, useRef, useState } from "react";

import useLanguaje from "../hooks/useLanguaje";
import useScrollY from "../hooks/useScrollY";
import Header from "../components/Header";
import Menu from "../pages/Menu";
import Footer from "../components/Footer";
import ModalImage from "../components/ModalImage";

import {
  BAKERY,
  BAKERY_MENU_TITLES,
  BRIOCHE_BAKERY_TITLE,
  generateRefObject,
  getTitle,
  INDIVIDUAL_BAKERY_TITLE,
  MENU_TITLE,
  MOLDED_BAKERY_TITLE,
  SOURDOUGH_BAKERY_TITLE,
} from "../utils/constants";
import useTheme from "../hooks/useTheme";
import IndividualBakeryV2 from "../pages/IndividualBakeryV2";
import MoldedBakeryV2 from "../pages/MoldedBakeryV2";
import Brioche from "../pages/Brioche";
import Sourdough from "../pages/Sourdough";

const Bakery = () => {
  const [title, setTitle] = useState("");
  const [languaje] = useLanguaje();
  const scrollY = useScrollY();
  const { themeBgColor, setTheme } = useTheme();

  const menuTitle = useRef(null);
  const sourdoughTitle = useRef(null);
  const briocheTitle = useRef(null);
  const individualTitle = useRef(null);
  const moldedTitle = useRef(null);

  useEffect(() => {
    setTheme(BAKERY);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const allRef = {
      menuTitle: generateRefObject(menuTitle, MENU_TITLE[languaje]),
      sourdough: generateRefObject(
        sourdoughTitle,
        SOURDOUGH_BAKERY_TITLE[languaje],
      ),
      brioche: generateRefObject(briocheTitle, BRIOCHE_BAKERY_TITLE[languaje]),
      individual: generateRefObject(
        individualTitle,
        INDIVIDUAL_BAKERY_TITLE[languaje],
      ),
      molded: generateRefObject(moldedTitle, MOLDED_BAKERY_TITLE[languaje]),
    };
    setTitle(getTitle(allRef));
  }, [individualTitle, moldedTitle, scrollY, languaje, title]);

  return (
    <main
      className={`relative w-full h-full min-h-screen ${themeBgColor} flex flex-col justify-center`}
    >
      <Header title={title} data={BAKERY_MENU_TITLES} />
      <section className="w-full max-w-[600px] m-auto h-full">
        <section id="menu" ref={menuTitle}>
          <Menu />
        </section>
        <section id="sourdough" ref={sourdoughTitle}>
          <Sourdough />
        </section>
        <section id="brioche" ref={briocheTitle}>
          <Brioche />
        </section>
        <section id="individual" ref={individualTitle}>
          <IndividualBakeryV2 />
        </section>
        <section id="molded" ref={moldedTitle}>
          <MoldedBakeryV2 />
        </section>
      </section>
      <Footer />
      <ModalImage />
    </main>
  );
};

export default Bakery;
