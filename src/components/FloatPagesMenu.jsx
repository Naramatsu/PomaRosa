import { Link } from "react-router";
import { SiCoffeescript } from "react-icons/si";
import { GiSlicedBread } from "react-icons/gi";
import useTheme from "../hooks/useTheme";
import { GiCakeSlice } from "react-icons/gi";
import { ENGLISH, SPANISH } from "../utils/constants";
import useLanguaje from "../hooks/useLanguaje";

export const btnPages = [
  {
    link: "",
    about: "cafe",
    icon: <SiCoffeescript size={20} />,
    label: {
      [SPANISH]: "Café",
      [ENGLISH]: "Café",
    },
    available: true,
  },
  {
    link: "/bakery",
    about: "bakery",
    icon: <GiSlicedBread size={20} />,
    label: {
      [SPANISH]: "Panadería",
      [ENGLISH]: "Bakery",
    },
    available: true,
  },
  {
    link: "/pastry",
    about: "pastry",
    icon: <GiCakeSlice size={20} />,
    label: {
      [SPANISH]: "Repostería",
      [ENGLISH]: "Pastry",
    },
    available: false,
  },
];

export const BtnMenuPage = ({ link, icon, label }) => {
  const { themeHover, themeTextColor, themeBorderColor } = useTheme();

  return (
    <Link
      to={link}
      className={`
        relative h-14 w-20
        flex flex-col gap-0 justify-center items-center 
        ${themeTextColor} border ${themeBorderColor}
        rounded-t-3xl bg-white/50
        hover:cursor-pointer ${themeHover}
      `}
    >
      {icon}
      <label className="text-xs hover:cursor-pointer">{label}</label>
    </Link>
  );
};

const FloatPagesMenu = () => {
  const { themeBorderColor } = useTheme();
  const [languaje] = useLanguaje();

  return (
    <section
      className="
        fixed left-[50%] translate-x-[-50%] bottom-0
        flex gap-2 items-center justify-center  
        w-full max-w-[600px] p-5 pb-0 z-10 
      "
    >
      <section
        className={`
          relative h-[74px] px-2
          flex gap-2 items-center justify-center
          border-2 border-b-0 ${themeBorderColor}
          rounded-t-[37px] backdrop-blur-md
        `}
      >
        {btnPages
          .filter((btn) => btn.available)
          .map(({ link, about, icon, label }) => (
            <BtnMenuPage
              key={about}
              link={link}
              icon={icon}
              label={label[languaje]}
            />
          ))}
      </section>
    </section>
  );
};

export default FloatPagesMenu;
