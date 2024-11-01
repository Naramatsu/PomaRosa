import { LANGUAJES } from "../data/menu";
import useLanguaje from "../hooks/useLanguaje";
import { ENGLISH, SPANISH } from "../utils/constants";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";

const MenuLayout = ({ items, ispPage = false, setLanguaje }) => {
  const [languaje] = useLanguaje();
  const isSpanish = languaje === SPANISH;

  return (
    <section
      className="
        lexend
        w-full h-full min-h-screen
        flex justify-center items-center flex-col gap-6
      "
    >
      {items.map(({ label, link, handlerCLick }, index) => (
        <Button key={index} onClick={() => handlerCLick(link)}>
          {label[languaje]}
        </Button>
      ))}
      {ispPage && (
        <section
          className="
            text-xl text-beige
            flex justify-between items-center gap-2 w-[312px]
          "
        >
          <p>{LANGUAJES[SPANISH]}</p>
          <ToggleSwitch onChange={setLanguaje} checked={!isSpanish} />
          <p>{LANGUAJES[ENGLISH]}</p>
        </section>
      )}
    </section>
  );
};

export default MenuLayout;
