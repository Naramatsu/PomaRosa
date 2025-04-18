import { ENGLISH, SPANISH } from "../../utils/constants";

export const daymeuProductList = [
  {
    name: {
      [SPANISH]: "PIZZA PERSONAL",
      [ENGLISH]: "PERSONAL PIZZA",
    },
    available: true,
    description: {
      [SPANISH]: "Napolitana - Hawaiana - Pepperoni",
      [ENGLISH]: "Neapolitan - Hawaiian - Pepperoni",
    },
    hotPrice: "",
  },
  {
    name: {
      [SPANISH]: "SANDWICH",
      [ENGLISH]: "SANDWICH",
    },
    available: true,
    options: [
      {
        name: {
          [SPANISH]: "Artesano",
          [ENGLISH]: "Artisan",
        },
        description: {
          [SPANISH]:
            "Pan de campo, jamón ahumado, tocineta crujuente, queso mozarella, tomate fresco, lechuga, mayonesa de ajo, huevo y mostaza.",
          [ENGLISH]:
            "Country bread, smoked ham, crispy bacon, mozzarella cheese, fresh tomato, lettuce, garlic mayonnaise, egg and mustard.",
        },
      },
      {
        name: {
          [SPANISH]: "De Pollo",
          [ENGLISH]: "Chicken",
        },
        description: {
          [SPANISH]:
            "Pechuga desmechada, mayonesa de ajo, lechuga, tomate, huevo frito y queso mozzarella.",
          [ENGLISH]:
            "Shredded breast, garlic mayonnaise, lettuce, tomato, fried egg and mozzarella cheese.",
        },
      },
    ],
    hotPrice: "",
  },
  {
    name: {
      [SPANISH]: "ENSALADAS",
      [ENGLISH]: "SALADS",
    },
    available: true,
    options: [
      {
        name: {
          [SPANISH]: "La Huerta",
          [ENGLISH]: "The Garden",
        },
        description: {
          [SPANISH]:
            "Mix de verdes, zanahoria, maiz, huevo, tomate, cebolla, queso, aderezo, miel mostaza, champiñones frescos y pan con ajo.",
          [ENGLISH]:
            "Mix of greens, carrot, corn, egg, tomato, onion, cheese, dressing, honey mustard, fresh mushrooms and garlic bread.",
        },
      },
      {
        name: {
          [SPANISH]: "De la casa",
          [ENGLISH]: "House",
        },
        description: {
          [SPANISH]:
            "Lechuga, espinaca, encurtido de rábano, jam+on en julianas, queso en cubos y pollo salteado.",
          [ENGLISH]:
            "Lettuce, spinach, pickled radish, julienne ham, cubed cheese and sautéed chicken.",
        },
      },
    ],
    hotPrice: "",
  },
  {
    name: {
      [SPANISH]: "PASTAS",
      [ENGLISH]: "PASTAS",
    },
    available: false,
    description: {
      [SPANISH]: "PomaRosa - Carbonara",
      [ENGLISH]: "PomaRosa - Carbonara",
    },
    hotPrice: "",
  },
  {
    name: {
      [SPANISH]: "BEBIDAS",
      [ENGLISH]: "DRINKS",
    },
    available: true,
    description: {
      [SPANISH]: "Gaseosa - Agua - Limonada natural.",
      [ENGLISH]: "Soda - Water - Fresh Lemonade",
    },
    hotPrice: "",
  },
  {
    name: {
      [SPANISH]: "POSTRE",
      [ENGLISH]: "DESSERT",
    },
    available: false,
    description: {
      [SPANISH]: "del día",
      [ENGLISH]: "of the day",
    },
    hotPrice: "",
  },
];

export const daymenuHours = {
  [SPANISH]: "Todos los días de 12:00 a 3:00 pm",
  [ENGLISH]: "Every day from 12:00 pm to 3:00 pm",
};

export const daymenuPrice = {
  [SPANISH]: "Plato + Bebida $25.000",
  [ENGLISH]: "Meal + Drink $25.000",
};
