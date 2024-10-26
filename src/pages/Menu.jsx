import Button from "../components/Button";
import { menuList } from "../data/menu";

const Menu = ({ languaje }) => {
  return (
    <section
      className="
        lexend
        w-full h-full min-h-screen
        flex justify-center items-center flex-col gap-6
      "
    >
      {menuList.map(({ label }, index) => (
        <Button key={index}>{label[languaje]}</Button>
      ))}
    </section>
  );
};

export default Menu;
