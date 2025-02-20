import { Link } from "react-router";
import { SiCoffeescript } from "react-icons/si";
import { GiSlicedBread } from "react-icons/gi";
import useTheme from "../hooks/useTheme";
// import { GiCakeSlice } from "react-icons/gi";

export const btnPages = [
  {
    link: "",
    about: "cafe",
    icon: <SiCoffeescript size={20} />,
    label: "Cafe",
  },
  {
    link: "/bakery",
    about: "bakery",
    icon: <GiSlicedBread size={20} />,
    label: "Bakery",
  },
  // {
  //   link: "/pastry",
  //   about: "pastry",
  //   icon: <GiCakeSlice size={20} />,
  //   label: "Pastry",
  // },
];

export const BtnMenuPage = ({ link, icon, label }) => {
  const { themeHover, themeTextColor, themeBorderColor } = useTheme();
  return (
    <Link
      to={link}
      className={`
        relative size-14
        flex flex-col gap-0 justify-center items-center 
        ${themeTextColor} border ${themeBorderColor}
        rounded-full
        hover:cursor-pointer ${themeHover}
      `}
    >
      {icon}
      <label className="text-xs hover:cursor-pointer">{label}</label>
    </Link>
  );
};

const FloatPagesMenu = () => {
  const { floatBtnBg, themeBorderColor } = useTheme();

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
        ${floatBtnBg} border-2 border-b-0 ${themeBorderColor}
        rounded-t-[37px] backdrop-blur-md
      `}
      >
        {btnPages.map(({ link, about, icon, label }) => (
          <BtnMenuPage key={about} link={link} icon={icon} label={label} />
        ))}
      </section>
    </section>
  );
};

export default FloatPagesMenu;
