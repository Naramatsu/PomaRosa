import { ENGLISH, SPANISH } from "../../utils/constants";

export const PIZZA = "PIZZA";

export const pizzaProducts = [
  {
    name: {
      [SPANISH]: "NAPOLITANA",
      [ENGLISH]: "NEAPOLITAN",
    },
    personal: "23.000",
    available: true,
    description: {
      [SPANISH]:
        "Queso mozzarella, tomate fresco, orégano, albahaca fresca o pesto y aceite de ajo.",
      [ENGLISH]:
        "Mozzarella Cheese, Fresh Tomato, Oregano fresh basil or pesto, and garlic oil.",
    },
  },
  {
    name: {
      [SPANISH]: "MOZZARELLA",
      [ENGLISH]: "MOZZARELLA",
    },
    personal: "23.000",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257903/Pizza_mozarella_lfzy2a.webp",
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
    available: true,
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
    available: true,
    description: {
      [SPANISH]:
        "Queso mozzarella, pomodoro, trocitos de piña dulce y pepperoni.",
      [ENGLISH]:
        "Mozzarella cheese, pomodoro, sweet pineapple chunks, and pepperoni.",
    },
  },
  {
    name: {
      [SPANISH]: "POLLO Y CHAMPIÑON Y MAIZ",
      [ENGLISH]: "CHICKEN AND MUSHROOM AND CORN",
    },
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1740163677/Pizza_pollo_champi%C3%B1ones_ihq2wk.jpg",
    personal: "26.000",
    available: true,
    description: {
      [SPANISH]:
        "Queso mozzarella, pomodoro, pollo en finas hierbas con maiz desgranado y champiñones.",
      [ENGLISH]:
        "Mozzarella Cheese, pomodoro, chicken with herbs, corn kernels, and mushrooms.",
    },
  },
  {
    name: {
      [SPANISH]: "Mediterránea",
      [ENGLISH]: "MEDITERRANEAN",
    },
    personal: "26.000",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738937791/pizzamediterr%C3%A1nea_mdrdky.jpg",
    description: {
      [SPANISH]:
        "Queso muzarella, Tomates secos, champiñones, salsa pesto, reducción balsámico.",
      [ENGLISH]:
        "Mozzarella cheese, sun-dried tomatoes, mushrooms, pesto sauce, and balsamic reduction.",
    },
  },
  {
    name: {
      [SPANISH]: "FUGAZZA ESPECIAL",
      [ENGLISH]: "SPECIAL FUGAZZA",
    },
    personal: "23.000",
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941121/pizzafugazaespecial_m9yiqr.jpg",
    available: true,
    description: {
      [SPANISH]:
        "Queso mozzarella , cebolla en julianas, jamón, orégano y aceite de oliva.",
      [ENGLISH]:
        "Mozzarella Cheese, julienned onion, ham, oregano, and olive oil.",
    },
  },
  {
    name: {
      [SPANISH]: "PRIMAVERA",
      [ENGLISH]: "SPRING",
    },
    personal: "26.000",
    available: false,
    description: {
      [SPANISH]:
        "Queso mozzarella, pomodoro, lomos de atún, maíz tierno, champiñones y orégano.",
      [ENGLISH]:
        "Mozzarella Cheese, Pomodoro Sauce, Tuna Fillets, Sweet Corn, Mushrooms, and Oregano.",
    },
  },
];
