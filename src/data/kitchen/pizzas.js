import { ENGLISH, SPANISH } from "../../utils/constants";

export const PIZZA = "PIZZA";

export const pizzaProducts = [
  {
    name: {
      [SPANISH]: "NAPOLITANA",
      [ENGLISH]: "NEAPOLITAN",
    },
    personal: "23.000",
    description: {
      [SPANISH]:
        "Queso mozzarella, tomate fresco, orégano, albahaca y aceite de ajo.",
      [ENGLISH]:
        "Mozzarella Cheese, Fresh Tomato, Oregano, Basil, and Garlic Oil.",
    },
  },
  {
    name: {
      [SPANISH]: "MOZZARELLA",
      [ENGLISH]: "MOZZARELLA",
    },
    personal: "23.000",
    description: {
      [SPANISH]: "Queso mozzarella pomodoro, orégano y aceitunas verdes.",
      [ENGLISH]:
        "Mozzarella Cheese, Pomodoro Sauce, Oregano, and Green Olives.",
    },
  },
  {
    name: {
      [SPANISH]: "PEPPERONI",
      [ENGLISH]: "PEPPERONI",
    },
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1740163677/Pizza_pepperoni_qd0fp0.jpg",
    personal: "23.000",
    description: {
      [SPANISH]: "Queso mozzarella, pepperoni y orégano.",
      [ENGLISH]: "Mozzarella Cheese, Pepperoni, and Oregano.",
    },
  },
  {
    name: {
      [SPANISH]: "HAWAPEPE",
      [ENGLISH]: "HAWAPEPE",
    },
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1739813275/Pizzahawapepe_ne94eo.jpg",
    personal: "23.000",
    description: {
      [SPANISH]: "Queso mozzarella, trocitos de piña dulce y pepperoni.",
      [ENGLISH]: "Mozzarella Cheese, Sweet Pineapple Chunks, and Pepperoni.",
    },
  },
  {
    name: {
      [SPANISH]: "POLLO Y CHAMPIÑON",
      [ENGLISH]: "CHICKEN AND MUSHROOM",
    },
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1740163677/Pizza_pollo_champi%C3%B1ones_ihq2wk.jpg",
    personal: "23.000",
    description: {
      [SPANISH]: "Queso mozzarella, pollo y champiñones.",
      [ENGLISH]: "Mozzarella Cheese, Chicken, and Mushrooms.",
    },
  },
  {
    name: {
      [SPANISH]: "Mediterránea",
      [ENGLISH]: "MEDITERRANEAN",
    },
    personal: "26.000",
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738937791/pizzamediterr%C3%A1nea_mdrdky.jpg",
    description: {
      [SPANISH]:
        "Tomates secos, champiñones salteados, aceitunas negras, salsa pesto, reducción balsámico.",
      [ENGLISH]:
        "Sun-Dried Tomatoes, Sautéed Mushrooms, Black Olives, Pesto Sauce, and Balsamic Reduction.",
    },
  },
  // {
  //   name: {
  //     [SPANISH]: "FUGAZZA ESPECIAL",
  //     [ENGLISH]: "SPECIAL FUGAZZA",
  //   },
  //   personal: "24.000",
  //   img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941121/pizzafugazaespecial_m9yiqr.jpg",
  //   description: {
  //     [SPANISH]:
  //       "Queso mozzarella , cebolla, jamón, orégano y aceite de oliva.",
  //     [ENGLISH]: "Mozzarella Cheese, Onion, Ham, Oregano, and Olive Oil.",
  //   },
  // },
  // {
  //   name: {
  //     [SPANISH]: "PRIMAVERA",
  //     [ENGLISH]: "SPRING",
  //   },
  //   personal: "26.000",
  //   description: {
  //     [SPANISH]:
  //       "Queso mozzarella, pomodoro, lomos de atún, maíz tierno, champiñones y orégano.",
  //     [ENGLISH]:
  //       "Mozzarella Cheese, Pomodoro Sauce, Tuna Fillets, Sweet Corn, Mushrooms, and Oregano.",
  //   },
  // },
];
