import { LANGUAJES } from "../data/menu";
import useLanguaje from "../hooks/useLanguaje";
import { ENGLISH, SPANISH } from "../utils/constants";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";

const MenuLayout = ({ items, ispPage = false, setLanguaje }) => {
  const [languaje] = useLanguaje();
  const isSpanish = languaje === SPANISH;

  const isCapitalize = !ispPage ? "first-letter:capitalize" : "";

  return (
    <section
      className="
        lexend
        w-full h-full min-h-screen
        flex justify-center items-center flex-col gap-6
      "
    >
      {ispPage && (
        <img
          src="logo.webp"
          alt="logo"
          className="w-[150px] h-[150px] border-2 border-beige rounded-full"
        />
      )}
      {items.map(({ label, link, handlerCLick }, index) => (
        <Button
          key={index}
          onClick={() => handlerCLick(link)}
          className={isCapitalize}
        >
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
