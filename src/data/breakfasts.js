import { ENGLISH, SPANISH } from "../utils/constants";

export const BREAKFASTS = {
  [SPANISH]: "DESAYUNOS",
  [ENGLISH]: "BREAKFASTS",
};

export const EGGS_TO_TASTE = {
  [SPANISH]: "HUEVOS AL GUSTO ( 3 unidades)",
  [ENGLISH]: "EGGS TO TASTE (3 units)",
};

export const eggsToTasteProducts = [
  {
    name: {
      [SPANISH]: "Revueltos o fritos",
      [ENGLISH]: "Scrambled or fried",
    },
    hotPrice: "7.500",
  },
  {
    name: {
      [SPANISH]: "Tomate y cebolla",
      [ENGLISH]: "Tomato and onion",
    },
    hotPrice: "9.500",
  },
  {
    name: {
      [SPANISH]: "Maíz tierno",
      [ENGLISH]: "Tender corn",
    },
    hotPrice: "9.900",
  },
  {
    name: {
      [SPANISH]: "Chorizo santarrosano",
      [ENGLISH]: "Chorizo from Santa Rosa",
    },
    hotPrice: "10.500",
  },
  {
    name: {
      [SPANISH]: "Jamón y queso",
      [ENGLISH]: "Ham and cheese",
    },
    hotPrice: "9.900",
  },
];

export const ACCOMPANIMENTS = {
  [SPANISH]: "ACOMPAÑAMIENTOS",
  [ENGLISH]: "ACCOMPANIMENTS",
};

export const accompanimentsProducts = [
  {
    name: {
      [SPANISH]: "Tostadas artesanales con mantequilla",
      [ENGLISH]: "Homemade toast with butter",
    },
    hotPrice: "6.500",
  },
  {
    name: {
      [SPANISH]: "Arepa de maíz blanco con mantequilla",
      [ENGLISH]: "White corn arepa with butter",
    },
    hotPrice: "6.500",
  },
  {
    name: {
      [SPANISH]: "Arepa con queso, jamón y huevos fritos",
      [ENGLISH]: "Arepa with cheese, ham and fried eggs",
    },
    hotPrice: "16.000",
  },
];

export const SPECIAL_EGGS = {
  [SPANISH]: "HUEVOS ESPECIALES",
  [ENGLISH]: "SPECIAL EGGS",
};

export const SPECIAL_EGGS_SUBTITLE = {
  [SPANISH]: "Acompañados con pan artesanal y mantequilla",
  [ENGLISH]: "Accompanied with artisan bread and butter",
};

export const specialEggsProducts = [
  {
    name: {
      [SPANISH]: "SALVAJES",
      [ENGLISH]: "SAVAGES",
    },
    hotPrice: "19.500",
    description: {
      [SPANISH]:
        "Huevos revueltos con chorizo santarrosano, maíz tierno, jamón, queso mozzarella y tocineta.",
      [ENGLISH]:
        "Scrambled eggs with Santa Rosa chorizo, tender corn, ham, mozzarella cheese and bacon.",
    },
  },
  {
    name: {
      [SPANISH]: "CRIOLLOS",
      [ENGLISH]: "CREOLES",
    },
    hotPrice: "19.500",
    description: {
      [SPANISH]: "Huevos fritos bañados con hogaó, salsa pomodoro y cilantro.",
      [ENGLISH]: "Fried eggs topped with hogaó, tomato sauce and cilantro.",
    },
  },
];

export const HEALTHY = {
  [SPANISH]: "SALUDABLES",
  [ENGLISH]: "HEALTHY",
};

export const healthyProducts = [
  {
    name: {
      [SPANISH]: "PLATO DE FRUTA",
      [ENGLISH]: "FRUIT PLATE",
    },
    coldPrice: "16.000",
    description: {
      [SPANISH]: "Variedad de frutas frescas con semillas de amapola.",
      [ENGLISH]: "variety of fresh fruits with poppy seeds.",
    },
  },
  {
    name: {
      [SPANISH]: "COPA PARFAIT",
      [ENGLISH]: "PARFAIT GLASS",
    },
    coldPrice: "17.000",
    description: {
      [SPANISH]:
        "Yogurt griego sin azúcar, mermelada casera de frutos rojos y granola artesanal con nueces y coco.",
      [ENGLISH]:
        "Sugar-free Greek yogurt, homemade red berry jam and artisanal granola with nuts and coconut.",
    },
  },
  {
    name: {
      [SPANISH]: "SMOOTHIE BOWL",
      [ENGLISH]: "SMOOTHIE BOWL",
    },
    coldPrice: "26.000",
    description: {
      [SPANISH]:
        "Batido de fresa, banano y mora natural con yogur griego, acompañado con: granola artesanal con coco y nueces, banano, fresa, arándanos, miel de agave, semillas de amapola y chía.",
      [ENGLISH]:
        "Strawberry, banana and natural blackberry smoothie with Greek yogurt, accompanied with: artisanal granola with coconut and nuts, banana, strawberry, blueberries, agave honey, poppy seeds and chia.",
    },
  },
  {
    name: {
      [SPANISH]: "TOSTADA CON AGUACATE",
      [ENGLISH]: "TOAST WITH AVOCADO",
    },
    coldPrice: "28.000",
    description: {
      [SPANISH]:
        "Tostada de pan de masa madre con pure de aguacate, tortillita de huevos revueltos y tomates cherry.",
      [ENGLISH]:
        "Sourdough toast with avocado puree, scrambled egg omelette and cherry tomatoes.",
    },
  },
];
