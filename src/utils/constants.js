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

export const MENU_TITLES = [
  {
    label: {
      [SPANISH]: "Menú",
      [ENGLISH]: "Menu",
    },
    link: "menu",
  },
  {
    label: {
      [SPANISH]: "Caferería",
      [ENGLISH]: "Café",
    },
    link: "cafe",
  },
  {
    label: {
      [SPANISH]: "Bebidas",
      [ENGLISH]: "Drinks",
    },
    link: "drinks",
  },
  {
    label: {
      [SPANISH]: "Combos - Desayunos",
      [ENGLISH]: "Combos - Breakfasts",
    },
    link: "combos",
  },
  {
    label: {
      [SPANISH]: "Desayunos",
      [ENGLISH]: "Breakfasts",
    },
    link: "breakfasts",
  },
  {
    label: {
      [SPANISH]: "Waffles",
      [ENGLISH]: "Waffles",
    },
    link: "waffles",
  },
  {
    label: {
      [SPANISH]: "Sandwichs",
      [ENGLISH]: "Sandwichs",
    },
    link: "sandwichs",
  },
  {
    label: {
      [SPANISH]: "Pizzas",
      [ENGLISH]: "Pizzas",
    },
    link: "pizzas",
  },
];

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};
