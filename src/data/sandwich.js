import { ENGLISH, SPANISH } from "../utils/constants";

export const SANDWICH = "SANDWICH";

export const sandwichProducts = [
  {
    name: {
      [SPANISH]: "POLLO CAPRESE",
      [ENGLISH]: "CHICKEN CAPRESE",
    },
    hotPrice: "32.000",
    description: {
      [SPANISH]:
        "Pechuga de pollo apanada, mix de hojas verdes con reducción de aceto balsámico, salsa pesto, tomates secos, queso mozzarella.",
      [ENGLISH]:
        "Breaded chicken breast, mixed green leaves with balsamic vinegar reduction, pesto sauce, sun-dried tomatoes, mozzarella cheese.",
    },
  },
  {
    name: {
      [SPANISH]: "CLUB SANDWICH",
      [ENGLISH]: "CLUB SANDWICH",
    },
    hotPrice: "28.000",
    description: {
      [SPANISH]:
        "Pollo, huevo, jamón, tocineta crocante, queso, alioli, mostaza, tomate, lechuga.",
      [ENGLISH]:
        "Chicken, egg, ham, crispy bacon, cheese, aioli, mustard, tomato, lettuce.",
    },
  },
  {
    name: {
      [SPANISH]: "VEGETARIANO",
      [ENGLISH]: "VEGETARIAN",
    },
    hotPrice: "29.000",
    description: {
      [SPANISH]:
        "Tomates secos, mix de hojas verdes con reducción de aceto balsámico, salsa pesto, queso mozzarella, champiñones salteados y aguacate fresco en pan ciabatta.",
      [ENGLISH]:
        "Sun-dried tomatoes, mixed green leaves with balsamic vinegar reduction, pesto sauce, mozzarella cheese, sautéed mushrooms and fresh avocado on ciabatta bread.",
    },
  },
  {
    name: {
      [SPANISH]: "POLLO Y CHAMPIÑONES",
      [ENGLISH]: "CHICKEN AND MUSHROOMS",
    },
    hotPrice: "28.000",
    description: {
      [SPANISH]:
        "Pollo salteado con champiñones y cebollas, salsa cremosa, finas hierbas y queso fundido en pan ciabatta.",
      [ENGLISH]:
        "Chicken sautéed with mushrooms and onions, creamy sauce, fine herbs and melted cheese on ciabatta bread.",
    },
  },
];

export const sandwichWarning = {
  [SPANISH]:
    "*Todos los sándwiches vienen acompañados de papas en cascos o ensalada*",
  [ENGLISH]: "*All sandwiches come with potato wedges or salad*",
};
