import { ENGLISH, SPANISH } from "../../utils/constants";

export const comboBreakfastsProducts = [
  {
    name: {
      [SPANISH]: "EXPRESS",
      [ENGLISH]: "EXPRESS",
    },
    hotPrice: "20.000",
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941120/desayunoexpress_gy6l0a.jpg",
    description: {
      [SPANISH]:
        "Huevos revueltos, con pan artesanal de la casa, mantequilla + bebida caliente.",
      [ENGLISH]:
        "Scrambled eggs with house-made artisan bread, butter + hot drink.",
    },
  },
  {
    name: {
      [SPANISH]: "SANDWICH",
      [ENGLISH]: "SANDWICH",
    },
    hotPrice: "21.000",
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196274/sanduche_eqa95g.jpg",
    description: {
      [SPANISH]:
        "Jamón de cerdo, queso mozzarella, tomate + bebida caliente a elección*",
      [ENGLISH]: "Pork ham, mozzarella cheese, tomato + hot drink of choice*",
    },
  },
  {
    name: {
      [SPANISH]: "SANDWICH DE HUEVO",
      [ENGLISH]: "EGG SANDWICH",
    },
    hotPrice: "23.500",
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196275/sanduchedehuevo_uw4ysa.jpg",
    description: {
      [SPANISH]:
        "Huevos revueltos con mayonesa, tocineta, queso en pan artesanal y bebida caliente.",
      [ENGLISH]:
        "Scrambled eggs with mayonnaise, bacon, cheese on artisan bread and hot drink.",
    },
  },
  {
    name: {
      [SPANISH]: "TRADICIONAL",
      [ENGLISH]: "TRADITIONAL",
    },
    hotPrice: "27.000",
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941120/desayunotradicional_zm5txw.jpg",
    description: {
      [SPANISH]:
        "Huevos al gusto + arepa asada de maíz o pan artesanal de la casa + mantequilla y queso fresco + bebida caliente a elección*.",
      [ENGLISH]:
        "Eggs any style + grilled corn arepa or house-made artisan bread + butter and fresh cheese + hot drink of choice*.",
    },
  },
  {
    name: {
      [SPANISH]: "RANCHERO",
      [ENGLISH]: "RANCHERO",
    },
    hotPrice: "31.000",
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941119/desayunoranchero_amh8mi.jpg",
    description: {
      [SPANISH]:
        "Huevos revueltos con tomate, cebolla, chorizo santarrosano, arepa de maíz con queso costeño, mantequilla + bebida caliente.",
      [ENGLISH]:
        "Scrambled eggs with tomato, onion, Santarrosano chorizo, corn arepa with coastal cheese, butter + hot drink.",
    },
  },
  {
    name: {
      [SPANISH]: "AMERICANO",
      [ENGLISH]: "AMERICANO",
    },
    hotPrice: "36.000",
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738937790/desayunoamericano_n3xyyw.webp",
    description: {
      [SPANISH]:
        "Waffles con miel de maple + tocineta crocante + huevos revueltos o fritos + bebida caliente.",
      [ENGLISH]:
        "Waffles with maple syrup + crispy bacon + scrambled or fried eggs + hot drink.",
    },
  },
  {
    name: {
      [SPANISH]: "SILVESTRE",
      [ENGLISH]: "WILD",
    },
    hotPrice: "39.000",
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738937790/desayunosilvestre_njxrc8.webp",
    description: {
      [SPANISH]:
        "Copa parfait (yogurt griego sin azúcar, con granola artesanal y mermelada casera de frutos rojos) + huevos revueltos + porción de tostadas y mantequilla + bebida caliente.",
      [ENGLISH]:
        "Parfait cup (unsweetened Greek yogurt with artisan granola and homemade berry jam) + scrambled eggs + toast and butter + hot drink.",
    },
  },
];

export const comboWarning = {
  [SPANISH]:
    "*Bebidas calientes a elección : café negro, chocolate,  café con leche. Aplica restricciones, cualquier cambio tiene un costo adicional.",
  [ENGLISH]:
    "*Hot beverages of your choice: black coffee, hot chocolate, or coffee with milk. Restrictions apply. Any substitutions may have an additional cost.",
};
