import ComboBreakfasts from "./pages/ComboBreakfasts";
import Cafe from "./pages/Cafe";
import Drinks from "./pages/Drinks";
import Menu from "./pages/Menu";
import { SPANISH } from "./utils/constants";
import Breakfasts from "./pages/Breakfasts";
import Waffles from "./pages/Waffles";
import Sandwich from "./pages/Sandwich";
import Pizzas from "./pages/Pizzas";

import { FaInfo } from "react-icons/fa6";
import Footer from "./components/Footer";

// const img = "https://images7.alphacoders.com/349/thumb-1920-349766.jpg";

const languaje = SPANISH;
const App = () => {
  return (
    <main className="relative w-full h-full min-h-screen bg-black flex justify-center">
      <section className="w-full max-w-[600px] m-auto h-full">
        <Menu languaje={languaje} />
        <Cafe languaje={languaje} />
        <Drinks languaje={languaje} />
        <ComboBreakfasts languaje={languaje} />
        <Breakfasts languaje={languaje} />
        <Waffles languaje={languaje} />
        <Sandwich languaje={languaje} />
        <Pizzas languaje={languaje} />
        <Footer languaje={languaje} />
      </section>

      <FaInfo
        className="
          h-8 w-8 p-2
          fixed bottom-6 right-6
          text-lg text-beige border-2 border-beige
          cursor-pointer
          rounded-full
          duration-200 ease-linear

          hover:text-black hover:bg-beige
        "
      />
    </main>
  );
};

export default App;
