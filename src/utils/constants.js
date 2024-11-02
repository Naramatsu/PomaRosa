export const SPANISH = "SPANISH";
export const ENGLISH = "ENGLISH";

export const HOT = {
  [SPANISH]: "Caliente",
  [ENGLISH]: "Hot",
};

export const COLD = {
  [SPANISH]: "Frio",
  [ENGLISH]: "Cold",
};

export const whatsAppLink = "https://wa.me/573103504215";

export const MENU_TITLE = {
  [SPANISH]: "Menú",
  [ENGLISH]: "Menu",
};

export const CAFE_TILTE = {
  [SPANISH]: "Caferería",
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

export const MENU_TITLES = [
  { label: MENU_TITLE, link: "menu" },
  { label: CAFE_TILTE, link: "cafe" },
  { label: DRINKS_TILTE, link: "drinks" },
  { label: COMBOS_BREAKFASTS_TITLE, link: "combos" },
  { label: BREAKFASTS_TITLE, link: "breakfasts" },
  { label: WAFFLES_TITLE, link: "waffles" },
  { label: SANDWICH_TITLE, link: "sandwichs" },
  { label: PIZZA_TITLE, link: "pizzas" },
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
