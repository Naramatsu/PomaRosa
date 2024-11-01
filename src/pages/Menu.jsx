import { ENGLISH, SPANISH } from "../utils/constants";
import useLanguaje from "../hooks/useLanguaje";
import MenuLayout from "../components/MenuLayout";
import { menuList } from "../data/menu";

const Menu = () => {
  const [languaje, setLanguaje] = useLanguaje();
  const isSpanish = languaje === SPANISH;

  const handlerLanguaje = () => setLanguaje(isSpanish ? ENGLISH : SPANISH);

  return <MenuLayout items={menuList} ispPage setLanguaje={handlerLanguaje} />;
};

export default Menu;
