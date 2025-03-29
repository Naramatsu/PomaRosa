import { ENGLISH, SPANISH } from "../../utils/constants";

export const SANDWICH = "SANDWICH";

export const sandwichProducts = [
  {
    name: {
      [SPANISH]: "CLUB SANDWICH",
      [ENGLISH]: "CLUB SANDWICH",
    },
    hotPrice: "28.000",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1742650898/Club_sandwich_converted_dp29bb.webp",
    description: {
      [SPANISH]:
        "Pollo, huevo, jamón, tocineta crocante, queso, alioli, mostaza, tomate, lechuga.",
      [ENGLISH]:
        "Chicken, Egg, Ham, Crispy Bacon, Cheese, Aioli, Mustard, Tomato, Lettuce.",
    },
  },
  {
    name: {
      [SPANISH]: "POLLO CAPRESE",
      [ENGLISH]: "CHICKEN CAPRESE",
    },
    hotPrice: "34.000",
    available: true,
    description: {
      [SPANISH]:
        "Pechuga de pollo apanada, mix de hojas verdes con reducción de aceto balsámico, salsa pesto, tomates secos, queso mozzarella.",
      [ENGLISH]:
        "Breaded Chicken Breast, Mixed Greens with Balsamic Reduction, Pesto Sauce, Sun-Dried Tomatoes, Mozzarella Cheese.",
    },
  },
  {
    name: {
      [SPANISH]: "VEGETARIANO",
      [ENGLISH]: "VEGETARIAN",
    },
    hotPrice: "29.000",
    available: true,
    description: {
      [SPANISH]:
        "Tomates secos, mix de hojas verdes con reducción de aceto balsámico, salsa pesto, queso mozzarella, champiñones salteados y aguacate fresco en pan ciabatta.",
      [ENGLISH]:
        "Sun-Dried Tomatoes, Mixed Greens with Balsamic Reduction, Pesto Sauce, Mozzarella Cheese, Sautéed Mushrooms, and Fresh Avocado on Ciabatta Bread.",
    },
  },
  {
    name: {
      [SPANISH]: "GRILLED Y BACON",
      [ENGLISH]: "GRILLED AND BACON",
    },
    hotPrice: "29.000",
    available: true,
    description: {
      [SPANISH]:
        "Variedad de quesos fundidos, con tocineta crujiente, en pan artesanal tostado.",
      [ENGLISH]:
        "Variety of melted cheeses, with crispy bacon, on toasted artisan bread.",
    },
  },
  {
    name: {
      [SPANISH]: "POLLO Y CHAMPIÑONES",
      [ENGLISH]: "CHICKEN AND MUSHROOMS",
    },
    hotPrice: "28.000",
    available: true,
    description: {
      [SPANISH]:
        "Pollo salteado con champiñones y cebollas, salsa cremosa, finas hierbas y queso fundido en pan ciabatta.",
      [ENGLISH]:
        "Sautéed Chicken with Mushrooms and Onions, Creamy Sauce, Fine Herbs, and Melted Cheese on Ciabatta Bread.",
    },
  },
];

export const sandwichWarning = {
  [SPANISH]:
    "*Todos los sándwiches vienen acompañados de papas en cascos o ensalada*",
  [ENGLISH]: "*All sandwiches are served with potato wedges or salad*",
};
