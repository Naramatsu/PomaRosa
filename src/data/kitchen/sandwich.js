import { ENGLISH, SPANISH } from "../../utils/constants";

export const SANDWICH = "SANDWICH";

export const sandwichProducts = [
  {
    name: {
      [SPANISH]: "CLUB SANDWICH",
      [ENGLISH]: "CLUB SANDWICH",
    },
    hotPrice: "34.000",
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1742650898/Club_sandwich_converted_dp29bb.webp",
    description: {
      [SPANISH]:
        "Pollo, huevo, jamón, tocineta crocante, queso, alioli, mostaza, tomate y lechuga.",
      [ENGLISH]:
        "Chicken, Egg, Ham, Crispy Bacon, Cheese, Aioli, Mustard, Tomato and Lettuce.",
    },
  },
  {
    name: {
      [SPANISH]: "POLLO CAPRESSE",
      [ENGLISH]: "CHICKEN CAPRESE",
    },
    hotPrice: "37.500",
    available: true,
    description: {
      [SPANISH]:
        "Pechuga de pollo apanada, mix de hojas verdes con reducción de aceto balsámico, salsa pesto, tomates secos y queso mozzarella.",
      [ENGLISH]:
        "Breaded Chicken Breast, Mixed Greens with Balsamic Reduction, Pesto Sauce, Sun-Dried Tomatoes and Mozzarella Cheese.",
    },
  },
  {
    name: {
      [SPANISH]: "VEGETARIANO",
      [ENGLISH]: "VEGETARIAN",
    },
    hotPrice: "31.000",
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
    available: false,
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
    hotPrice: "32.000",
    available: true,
    description: {
      [SPANISH]:
        "Pollo salteado con champiñones, ajo y cebolla salsa cremosa con finas hierbas y queso fundido en pan ciabatta.",
      [ENGLISH]:
        "Sautéed chicken with mushrooms, garlic, and onion creamy sauce with herbs and melted cheese on ciabatta bread.",
    },
  },
];

export const sandwichWarning = {
  [SPANISH]:
    "*Todos los sándwiches vienen acompañados de papas en cascos o ensalada*",
  [ENGLISH]: "*All sandwiches are served with potato wedges or salad*",
};
