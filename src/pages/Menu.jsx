import { ENGLISH, SPANISH } from "../utils/constants";
import useLanguaje from "../hooks/useLanguaje";
import MenuLayout from "../components/MenuLayout";
import { menuList } from "../data/kitchen/menu";
import useTheme from "../hooks/useTheme";

const Menu = () => {
  const { theme } = useTheme();
  const [languaje, setLanguaje] = useLanguaje();
  const isSpanish = languaje === SPANISH;
  const menuListByPage = menuList(theme);

  const handlerLanguaje = () => setLanguaje(isSpanish ? ENGLISH : SPANISH);

  return (
    <MenuLayout items={menuListByPage} ispPage setLanguaje={handlerLanguaje} />
  );
};

export default Menu;
