export const SPANISH = "SPANISH";
export const ENGLISH = "ENGLISH";
export const BAKERY = "bakery";
export const KITCHEN = "kitchen";

export const HOT = {
  [SPANISH]: "Caliente",
  [ENGLISH]: "Hot",
};

export const COLD = {
  [SPANISH]: "Frío",
  [ENGLISH]: "Cold",
};

export const MEDIUM = {
  [SPANISH]: "Mediano",
  [ENGLISH]: "Medium",
};

export const BIG = {
  [SPANISH]: "Grande",
  [ENGLISH]: "Big",
};

export const SLICES = {
  [SPANISH]: "porciones",
  [ENGLISH]: "slices",
};

export const whatsAppLink = "https://wa.me/573146343249";

export const MENU_TITLE = {
  [SPANISH]: "Menú",
  [ENGLISH]: "Menu",
};

export const CAFE_TILTE = {
  [SPANISH]: "Cafetería",
  [ENGLISH]: "Café",
};

export const DRINKS_TILTE = {
  [SPANISH]: "Bebidas",
  [ENGLISH]: "Drinks",
};

export const COMBOS_BREAKFASTS_TITLE = {
  [SPANISH]: "COMBOS - DESAYUNOS",
  [ENGLISH]: "COMBOS - BREAKFASTS",
};

export const BREAKFASTS_TITLE = {
  [SPANISH]: "DESAYUNOS",
  [ENGLISH]: "BREAKFASTS",
};

export const WAFFLES_TITLE = {
  [SPANISH]: "WAFFLES",
  [ENGLISH]: "WAFFLES",
};

export const SANDWICH_TITLE = {
  [SPANISH]: "SANDWICHS",
  [ENGLISH]: "SANDWICHS",
};

export const PIZZA_TITLE = {
  [SPANISH]: "PIZZAS",
  [ENGLISH]: "PIZZAS",
};

export const DAILYMENU_TITLE = {
  [SPANISH]: "MENÚ DEL DÍA",
  [ENGLISH]: "DAILY MENU",
};

export const INDIVIDUAL_BAKERY_TITLE = {
  [SPANISH]: "Panadería individual",
  [ENGLISH]: "Individual Bakery",
};

export const MOLDED_BAKERY_TITLE = {
  [SPANISH]: "Panadería en Molde",
  [ENGLISH]: "Molded Bakery",
};

export const KITCHEN_MENU_TITLES = [
  { label: MENU_TITLE, link: "menu" },
  { label: CAFE_TILTE, link: "cafe" },
  { label: DRINKS_TILTE, link: "drinks" },
  { label: COMBOS_BREAKFASTS_TITLE, link: "combos" },
  { label: BREAKFASTS_TITLE, link: "breakfasts" },
  { label: WAFFLES_TITLE, link: "waffles" },
  { label: SANDWICH_TITLE, link: "sandwichs" },
  { label: PIZZA_TITLE, link: "pizzas" },
  // { label: DAILYMENU_TITLE, link: "dailymenu" },
];

export const BAKERY_MENU_TITLES = [
  { label: MENU_TITLE, link: "menu" },
  { label: INDIVIDUAL_BAKERY_TITLE, link: "individual" },
  { label: MOLDED_BAKERY_TITLE, link: "molded" },
];

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

export const urlGenerator = (url) => {
  const newUrl = new URL(url);
  window.open(newUrl.href, "_blank");
};

export const getTitle = (items) => {
  const some = Object.keys(items).findLast(
    (keys) => items[keys].top <= 100 && items[keys].top <= items[keys].height
  );
  return items[some].title;
};

export const generateRefObject = (ref, title) => ({
  top: ref?.current?.getBoundingClientRect().top,
  height: ref?.current?.getBoundingClientRect().height,
  title,
});

export const descriptionStyles = (description, img) => {
  const noDescriptionStyles = !description ? "gap-0" : "gap-3";
  const noDescriptionMargin = !description ? "-mt-0" : "";
  const descriptionImageStyles = img
    ? "text-md text-dark-brown/70 italic first-letter:capitalize"
    : "text-md text-dark-brown/70 italic first-letter:capitalize pl-4";

  return { noDescriptionStyles, noDescriptionMargin, descriptionImageStyles };
};

export const generatedThemeStyles = () => {
  const themeTextColor = "text-brown";
  const themeTitleTextColor = "text-green";
  const themeTextAlternativeColor = "text-dark-brown";
  const themeBorderColor = "border-brown";
  const themeBorderAlternativeColor = "border-brown";
  const themeBgColor = "bg-beige";
  const themeActive = "bg-brown text-white";
  const themeHover = "hover:bg-brown hover:text-beige";
  const warningThemeBgColor = "bg-dark-beige";

  return {
    themeTextColor,
    themeTitleTextColor,
    themeBorderColor,
    themeBgColor,
    themeActive,
    themeHover,
    themeTextAlternativeColor,
    themeBorderAlternativeColor,
    warningThemeBgColor,
  };
};
