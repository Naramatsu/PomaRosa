import { ENGLISH, SPANISH } from "../../utils/constants";

export const cafeProductList = [
  {
    name: {
      [SPANISH]: "Aromática frutas",
      [ENGLISH]: "Fruit Herbal Tea",
    },
    available: true,
    hotPrice: "7.500",
  },
  {
    name: {
      [SPANISH]: "Café del día (tinto)",
      [ENGLISH]: "Coffee of the day (black)",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257902/Cafe_doble_zfuyqi.webp",
    available: true,
    hotPrice: "5.500",
  },
  {
    name: {
      [SPANISH]: "Malteada",
      [ENGLISH]: "Milkshake",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1740163677/Malteada_de_caf%C3%A9_wvymhy.jpg",
    available: true,
    coldPrice: "17.000",
  },
  {
    name: {
      [SPANISH]: "Latte Pequeño",
      [ENGLISH]: "Small Latte",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257903/Latte_peque%C3%B1o_dbuhpp.webp",
    available: true,
    hotPrice: "8.500",
  },
  {
    name: {
      [SPANISH]: "Chocolate de la casa",
      [ENGLISH]: "House Hot Chocolate",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257902/Chocolate_e2klzh.webp",
    available: true,
    hotPrice: "10.500",
    // coldPrice: "13.000",
  },
  {
    name: {
      [SPANISH]: "Americano",
      [ENGLISH]: "Americano",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257904/Americano_maqxoh.webp",
    available: true,
    hotPrice: "7.000",
    coldPrice: "9.000",
  },
  {
    name: {
      [SPANISH]: "Café doble",
      [ENGLISH]: "Double coffee",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257902/Cafe_doble_zfuyqi.webp",
    available: true,
    hotPrice: "10.500",
    coldPrice: "12.000",
  },
  {
    name: {
      [SPANISH]: "Capuchino Nutella",
      [ENGLISH]: "Nutella Cappuccino",
    },
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1740163677/Capuchino_de_Nutella_w5lgs4.jpg",
    hotPrice: "14.500",
    coldPrice: "18.500",
  },
  {
    name: {
      [SPANISH]: "Latte",
      [ENGLISH]: "Latte",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257903/Latte_grande_qadcub.webp",
    available: true,
    hotPrice: "9.500",
    coldPrice: "13.500",
  },
  {
    name: {
      [SPANISH]: "Té negro",
      [ENGLISH]: "Black Tea",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743259187/Te_negro_lcwgp4.webp",
    available: true,
    hotPrice: "8.500",
    coldPrice: "11.000",
  },
  {
    name: {
      [SPANISH]: "Capuchino",
      [ENGLISH]: "cappuccino",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257903/Moca_Chino_lkg9na.webp",
    available: true,
    hotPrice: "10.500",
    coldPrice: "14.500",
  },
  {
    name: {
      [SPANISH]: "Capuchino caramel",
      [ENGLISH]: "Caramel Cappuccino",
    },
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196274/capuccinocaramel_dbs5yf.jpg",
    hotPrice: "11.500",
    coldPrice: "17.500",
  },
  {
    name: {
      [SPANISH]: "Milo",
      [ENGLISH]: "Milo (Chocolate Drink)",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257903/Milo_hyy4fz.webp",
    available: true,
    hotPrice: "11.500",
    coldPrice: "16.000",
  },
  {
    name: {
      [SPANISH]: "Mocacchino",
      [ENGLISH]: "Mocha",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257902/Chocolate_e2klzh.webp",
    available: true,
    hotPrice: "10.500",
    // coldPrice: "14.000",
  },
  {
    name: {
      [SPANISH]: "Té Chai Latte",
      [ENGLISH]: "Chai Tea Latte",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257902/Te_chai_i5hdnt.webp",
    available: true,
    hotPrice: "13.000",
    coldPrice: "16.000",
  },
];

export const TEA_E_INFUSIONS = {
  [SPANISH]: "Té e infusiones",
  [ENGLISH]: "Tea and infusions",
};

export const teaAndInfusionsProductList = [
  {
    name: {
      [SPANISH]: "Aromatica de hierbabuena",
      [ENGLISH]: "Peppermint herbal tea",
    },
    available: true,
    hotPrice: "6.500",
  },
  {
    name: {
      [SPANISH]: "Aromatica de frutos rojos",
      [ENGLISH]: "Red fruits herbal tea",
    },
    available: true,
    hotPrice: "7.500",
  },
];

export const ADDITIONAL_MILK = {
  [SPANISH]: "Adicional Leche de Almendras",
  [ENGLISH]: "Add Almond Milk",
};

export const almondMilkAdditionalPrices = [
  { value: "3.000" },
  { value: "5.000", cold: true },
];

export const TO_ACCOMPANY = {
  [SPANISH]: "Para acompañar...",
  [ENGLISH]: "To accompany...",
};

export const accompanyProductList = [
  {
    name: {
      [SPANISH]: "Mogolla brioche de queso",
      [ENGLISH]: "Cheese Brioche Roll",
    },
    available: false,
    hotPrice: "3.500",
  },
  {
    name: {
      [SPANISH]: "Empanada arabe",
      [ENGLISH]: "Arabian empanada",
    },
    available: true,
    hotPrice: "13.000",
  },
  {
    name: {
      [SPANISH]: "Pan de tres quesos",
      [ENGLISH]: "Three-Cheese Bread",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1740163677/Pan_3_quesos_eq2bgq.jpg",
    available: true,
    hotPrice: "7.000",
  },
  {
    name: {
      [SPANISH]: "Pan de yuca",
      [ENGLISH]: "Yuca Bread",
    },
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941123/pandeyuca_boe8xr.jpg",
    hotPrice: "4.000",
  },
  {
    name: {
      [SPANISH]: "Alfajor desde",
      [ENGLISH]: "Alfajor (starting at)",
    },
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1742650898/Alfajores_converted_shelgp.webp",
    hotPrice: "4.000",
  },
  {
    name: {
      [SPANISH]: "Pan de chocolate",
      [ENGLISH]: "Chocolate bread",
    },
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941121/pandechocolate_a2rfej.jpg",
    hotPrice: "5.500",
  },
  {
    name: {
      [SPANISH]: "Pan de jamón y queso",
      [ENGLISH]: "Ham and cheese bread",
    },
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941124/jamonyqueso_qrxxrt.jpg",
    hotPrice: "6.000",
  },
  {
    name: {
      [SPANISH]: "Pan de arándanos y chocolate",
      [ENGLISH]: "Blueberry and chocolate bread",
    },
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1742650899/Chocolate_con_ar%C3%A1ndanos_converted_kgef9v.webp",
    hotPrice: "7.500",
  },
  {
    name: {
      [SPANISH]: "Palito de queso",
      [ENGLISH]: "Cheese stick",
    },
    available: false,
    hotPrice: "6.000",
  },
  {
    name: {
      [SPANISH]: "Empanada de pollo, queso y uvas pasas",
      [ENGLISH]: "Chicken, Cheese, and Raisin Empanada",
    },
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941123/empanadadepollo_mpiq3t.jpg",
    hotPrice: "13.000",
  },
  {
    name: {
      [SPANISH]: "Empanada caprese",
      [ENGLISH]: "Caprese empanada",
    },
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941123/empanadacaprese_k5mqqp.jpg",
    hotPrice: "13.000",
  },
  {
    name: {
      [SPANISH]: "Empanada de carne y aceitunas",
      [ENGLISH]: "Beef and Olive Empanada",
    },
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1744511858/empanadadecarne_hbz03x.webp",
    available: true,
    hotPrice: "13.000",
  },
  {
    name: {
      [SPANISH]: "Empanada de espinaca",
      [ENGLISH]: "Spinach Empanada",
    },
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1744511739/Empanada-espinaca_f4jjtu.webp",
    hotPrice: "15.000",
  },
  {
    name: {
      [SPANISH]: "Brownie con nueces",
      [ENGLISH]: "Walnut Brownie",
    },
    available: false,
    hotPrice: "10.500",
  },
];
