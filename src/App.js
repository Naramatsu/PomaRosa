import { useEffect, useRef } from "react";
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

const App = () => {
  const cafeTitle = useRef(null);
  const drinkTitle = useRef(null);
  const comboBfTitle = useRef(null);
  const breakfastsTitle = useRef(null);
  const wafflesTitle = useRef(null);
  const sandwichTitle = useRef(null);
  const pizzasTitle = useRef(null);

  useEffect(() => {
    const allRef =
      cafeTitle?.current &&
      drinkTitle?.current &&
      comboBfTitle?.current &&
      breakfastsTitle?.current &&
      wafflesTitle?.current &&
      sandwichTitle?.current &&
      pizzasTitle?.current;

    if (allRef)
      console.log({
        cafeTitle: cafeTitle.current.getBoundingClientRect(),
        drinkTitle: drinkTitle.current.getBoundingClientRect(),
      });
  }, [
    cafeTitle,
    drinkTitle,
    comboBfTitle,
    breakfastsTitle,
    wafflesTitle,
    sandwichTitle,
    pizzasTitle,
  ]);

  return (
    <main className="relative w-full h-full min-h-screen bg-black flex flex-col justify-center">
      <Header />
      <section className="w-full max-w-[600px] m-auto h-full">
        <section id="menu">
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
        <section id="sandwich" ref={sandwichTitle}>
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
