import { ENGLISH, SPANISH } from "../utils/constants";

export const comboBreakfastsProducts = [
  {
    name: {
      [SPANISH]: "EXPRESS",
      [ENGLISH]: "EXPRESS",
    },
    hotPrice: "20.000",
    imge: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941120/desayunoexpress_gy6l0a.jpg",
    description: {
      [SPANISH]:
        "Huevos revueltos, con pan artesanal de la casa, mantequilla y café negro.",
      [ENGLISH]:
        "Scrambled eggs with house-made artisan bread, butter, and black coffee.",
    },
  },
  {
    name: {
      [SPANISH]: "SANDWICH",
      [ENGLISH]: "SANDWICH",
    },
    hotPrice: "18.500",
    description: {
      [SPANISH]:
        "Jamón, queso mozzarella y tomate + bebida caliente a elección*",
      [ENGLISH]: "Ham, mozzarella cheese, and tomato + hot drink of choice*",
    },
  },
  {
    name: {
      [SPANISH]: "SANDWICH DE HUEVO",
      [ENGLISH]: "EGG SANDWICH",
    },
    hotPrice: "23.500",
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196275/sanduchedehuevo_uw4ysa.jpg",
    description: {
      [SPANISH]:
        "Huevos revueltos tocineta, queso mozzarella y alioli de ajo en pan artesanal de la casa.",
      [ENGLISH]:
        "Scrambled eggs, bacon, mozzarella cheese, and garlic aioli on homemade artisan bread.",
    },
  },
  {
    name: {
      [SPANISH]: "TRADICIONAL",
      [ENGLISH]: "TRADITIONAL",
    },
    hotPrice: "25.000",
    imge: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941120/desayunotradicional_zm5txw.jpg",
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
    hotPrice: "29.000",
    imge: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941119/desayunoranchero_amh8mi.jpg",
    description: {
      [SPANISH]:
        "Huevos revueltos con tomate, cebolla y chorizo santarrosano, arepa de maíz con queso costeño, mantequilla + bebida caliente.",
      [ENGLISH]:
        "Scrambled eggs with tomato, onion, and Santarrosano chorizo, corn arepa with coastal cheese, butter + hot drink.",
    },
  },
  {
    name: {
      [SPANISH]: "AMERICANO",
      [ENGLISH]: "AMERICANO",
    },
    hotPrice: "34.000",
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738937790/desayunoamericano_n3xyyw.webp",
    description: {
      [SPANISH]:
        "Waffles con miel de maple + tocineta crocante + huevos revueltos o fritos + café negro.",
      [ENGLISH]:
        "Waffles with maple syrup + crispy bacon + scrambled or fried eggs + black coffee.",
    },
  },
  {
    name: {
      [SPANISH]: "SILVESTRE",
      [ENGLISH]: "WILD",
    },
    hotPrice: "35.000",
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738937790/desayunosilvestre_njxrc8.webp",
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
    "*Bebidas calientes a eleccion : cafe negro, chocolate, aromatica, cafe con leche, cambio de bebida fria desde $ 4.000 en adelante. *Aplica restricciones, consultar opciones. cualquier cambio tiene un costo adicional.",
  [ENGLISH]:
    "*Hot drinks of your choice: black coffee, chocolate, aromatic, coffee with milk, change of cold drink from $ 4,000 onwards. *Restrictions apply, check available options. Any substitutions incur an additional cost.",
};
