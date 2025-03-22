import { ENGLISH, SPANISH } from "../../utils/constants";

export const EGGS_TO_TASTE = {
  [SPANISH]: "HUEVOS AL GUSTO",
  [ENGLISH]: "EGGS TO TASTE",
};

export const EGGS_TO_TASTE_SUBTITLE = {
  [SPANISH]: "( 3 unidades )",
  [ENGLISH]: "( 3 units )",
};

export const eggsToTasteProducts = [
  {
    name: {
      [SPANISH]: "Revueltos o fritos",
      [ENGLISH]: "Scrambled or fried",
    },
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196274/huevosrevueltos_fvdzxu.jpg",
    hotPrice: "8.500",
  },
  {
    name: {
      [SPANISH]: "Tomate y cebolla",
      [ENGLISH]: "Tomato and onion",
    },
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196274/huevoscontomateycebolla_hh23fo.jpg",
    hotPrice: "11.500",
  },
  {
    name: {
      [SPANISH]: "Maíz tierno",
      [ENGLISH]: "Tender corn",
    },
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1742650899/Huevos_con_ma%C3%ADz_converted_sjk7gl.webp",
    hotPrice: "10.900",
  },
  {
    name: {
      [SPANISH]: "Chorizo santarrosano",
      [ENGLISH]: "Santarrosano chorizo",
    },
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1742650899/huevos_con_chorizo_converted_ajjzdi.webp",
    hotPrice: "11.900",
  },
  {
    name: {
      [SPANISH]: "Jamón y queso",
      [ENGLISH]: "Ham and cheese",
    },
    available: true,
    hotPrice: "10.900",
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
      [ENGLISH]: "Artisan Toast with Butter",
    },
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1739813274/tostadas_ja2whz.jpg",
    hotPrice: "7.500",
  },
  {
    name: {
      [SPANISH]: "Arepa de maíz blanco con mantequilla",
      [ENGLISH]: "White Corn Arepa with Butter",
    },
    available: true,
    hotPrice: "8.500",
  },
  {
    name: {
      [SPANISH]: "Arepa de maiz con mantequilla y queso",
      [ENGLISH]: "Corn arepa with butter and cheese",
    },
    available: true,
    hotPrice: "13.000",
  },
  {
    name: {
      [SPANISH]: "Wafles con miel o mantequilla",
      [ENGLISH]: "Waffles with honey or butter.",
    },
    available: true,
    hotPrice: "15.000",
  },
  {
    name: {
      [SPANISH]: "Arepa con queso, jamón y huevos fritos",
      [ENGLISH]: "Arepa with Cheese, Ham, and Fried Eggs",
    },
    available: true,
    hotPrice: "16.000",
  },
];

export const SPECIAL_EGGS = {
  [SPANISH]: "HUEVOS ESPECIALES",
  [ENGLISH]: "SPECIAL EGGS",
};

export const SPECIAL_EGGS_SUBTITLE = {
  [SPANISH]: "Acompañados con pan artesanal y mantequilla",
  [ENGLISH]: "Served with Artisan Bread and Butter",
};

export const specialEggsProducts = [
  {
    name: {
      [SPANISH]: "SALVAJES",
      [ENGLISH]: "SAVAGES",
    },
    hotPrice: "22.500",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1739813274/Huevosalvajes_uluizh.jpg",
    description: {
      [SPANISH]:
        "Huevos revueltos con chorizo santarrosano, maíz tierno, jamón, queso mozzarella y tocineta.",
      [ENGLISH]:
        "Scrambled Eggs with Santarrosano Chorizo, Sweet Corn, Ham, Mozzarella Cheese, and Bacon.",
    },
  },
  {
    name: {
      [SPANISH]: "CRIOLLOS",
      [ENGLISH]: "CREOLES",
    },
    hotPrice: "22.000",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941120/huevoscriollos_mse2ba.jpg",
    description: {
      [SPANISH]: "Huevos fritos bañados con hogao, salsa pomodoro y cilantro.",
      [ENGLISH]: "Fried Eggs with Hogao Sauce, Pomodoro Sauce, and Cilantro",
    },
  },
  {
    name: {
      [SPANISH]: "Campestres",
      [ENGLISH]: "Rustic Style",
    },
    hotPrice: "27.000",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196274/huevoscampestres_oxispa.jpg",
    description: {
      [SPANISH]:
        "Omellet de huevos, con espinaca, champiñones y queso muzzarella.",
      [ENGLISH]:
        "Omelette with eggs, spinach, mushrooms, and mozzarella cheese.",
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
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1739813274/Ensalada_de_fruta_moogke.jpg",
    coldPrice: "16.000",
    available: true,
    description: {
      [SPANISH]: "Variedad de frutas frescas con semillas de amapola.",
      [ENGLISH]: "Assorted Fresh Fruits with Poppy Seeds.",
    },
  },
  {
    name: {
      [SPANISH]: "COPA PARFAIT",
      [ENGLISH]: "PARFAIT GLASS",
    },
    coldPrice: "17.000",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196274/copaparfait_owon1n.jpg",
    description: {
      [SPANISH]:
        "Yogurt griego sin azúcar, mermelada casera de frutos rojos y granola artesanal con nueces y coco.",
      [ENGLISH]:
        "Unsweetened Greek Yogurt, Homemade Berry Jam, and Artisan Granola with Nuts and Coconut.",
    },
  },
  {
    name: {
      [SPANISH]: "SMOOTHIE BOWL",
      [ENGLISH]: "SMOOTHIE BOWL",
    },
    coldPrice: "28.000",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196275/smothiebowl_chtj8m.jpg",
    description: {
      [SPANISH]:
        "Batido de fresa, banano y mora natural con yogur griego, acompañado con: granola artesanal con coco y nueces, banano, fresa, arándanos, miel de agave, semillas de amapola y chía.",
      [ENGLISH]:
        "Strawberry, Banana, and Blackberry Smoothie with Greek Yogurt, served with: Artisan Granola with Coconut and Nuts, Banana, Strawberry, Blueberries, Agave Syrup, Poppy Seeds, and Chia.",
    },
  },
  {
    name: {
      [SPANISH]: "TOSTADA CON AGUACATE",
      [ENGLISH]: "TOAST WITH AVOCADO",
    },
    coldPrice: "28.000",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1742650907/Tostada_de_aguacate_converted_mbohk4.webp",
    description: {
      [SPANISH]:
        "Tostada en pan de masa madre con pure de aguacate, tortillita de huevos revueltos y tomates cherry.",
      [ENGLISH]:
        "Sourdough Toast with Avocado Purée, Scrambled Egg Tortilla, and Cherry Tomatoes.",
    },
  },
  {
    name: {
      [SPANISH]: "Bowl de fruta",
      [ENGLISH]: "Fruit Bowl",
    },
    coldPrice: "28.000",
    available: false,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1738937790/bowldefruta_vhfbhh.webp",
    description: {
      [SPANISH]:
        "Porción de fruta fresca de estación, acompañada con yogurt griego sin azúcar, granola artesanal, coco deshidratado nueces y semillas de amapola y chia.",
      [ENGLISH]:
        "Portion of fresh seasonal fruit, served with unsweetened Greek yogurt, artisan granola, dried coconut, nuts, and poppy and chia seeds.",
    },
  },
];
