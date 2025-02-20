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
  generateRefObject,
  getTitle,
  INDIVIDUAL_BAKERY_TITLE,
  MENU_TITLE,
  MOLDED_BAKERY_TITLE,
} from "../utils/constants";
import useTheme from "../hooks/useTheme";
import IndividualBakery from "../pages/IndividualBakery";
import MoldedBakery from "../pages/MoldedBakery";

const Bakery = () => {
  const [title, setTitle] = useState("");
  const [languaje] = useLanguaje();
  const scrollY = useScrollY();
  const { themeBgColor, setTheme } = useTheme();

  const menuTitle = useRef(null);
  const individualTitle = useRef(null);
  const moldedTitle = useRef(null);

  useEffect(() => {
    setTheme(BAKERY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const allRef = {
      menuTitle: generateRefObject(menuTitle, MENU_TITLE[languaje]),
      individual: generateRefObject(
        individualTitle,
        INDIVIDUAL_BAKERY_TITLE[languaje]
      ),
      molded: generateRefObject(moldedTitle, MOLDED_BAKERY_TITLE[languaje]),
    };

    if (Object.keys(allRef).every((obj) => allRef[obj].top))
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
        <section id="individual" ref={individualTitle}>
          <IndividualBakery />
        </section>
        <section id="molded" ref={moldedTitle}>
          <MoldedBakery />
        </section>
      </section>
      <Footer />
      <ModalImage />
    </main>
  );
};

export default Bakery;
