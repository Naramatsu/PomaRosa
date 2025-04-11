import { ENGLISH, SPANISH } from "../../utils/constants";

export const COLD_DRINKS = {
  [SPANISH]: "Bebidas frías",
  [ENGLISH]: "Cold drinks",
};

export const LEMONADE = { [SPANISH]: "Limonadas", [ENGLISH]: "Lemonades" };

export const lemonadeProductList = [
  {
    name: {
      [SPANISH]: "Clásica",
      [ENGLISH]: "Classic",
    },
    available: true,
    coldPrice: "10.500",
  },
  {
    name: {
      [SPANISH]: "Con Hierbabuena",
      [ENGLISH]: "With mint",
    },
    available: true,
    coldPrice: "13.000",
  },
  {
    name: {
      [SPANISH]: "Cerezada",
      [ENGLISH]: "Cherry",
    },
    available: true,
    coldPrice: "15.000",
  },
  {
    name: {
      [SPANISH]: "De coco",
      [ENGLISH]: "Coconut",
    },
    available: true,
    coldPrice: "17.000",
  },
];

export const JUICES = {
  [SPANISH]: "Jugos naturales",
  [ENGLISH]: "Natural Juices",
};

export const juicesList = {
  [SPANISH]: "Guanábana, Mango, Papaya, Banano y Mora",
  [ENGLISH]: "Soursop, Mango, Papaya, Banana and Blackberry",
};

export const juicesPrices = [
  {
    name: {
      [SPANISH]: "En agua",
      [ENGLISH]: "In water",
    },
    available: true,
    coldPrice: "10.000",
  },
  {
    name: {
      [SPANISH]: "En leche",
      [ENGLISH]: "In milk",
    },
    available: true,
    coldPrice: "12.000",
  },
];

export const SPECIAL_JUICES = {
  [SPANISH]: "Jugos especiales",
  [ENGLISH]: "Special Juices",
};

export const specialJuicesList = {
  [SPANISH]: "Zapote, Corozo, Tamarindo, Fresa, Maracuyá",
  [ENGLISH]: "Sapote, Corozo, Tamarind, Strawberry, Passion Fruit",
};

export const specialJuicesPrices = [
  {
    name: {
      [SPANISH]: "En agua",
      [ENGLISH]: "In water",
    },
    available: true,
    coldPrice: "13.000",
  },
  {
    name: {
      [SPANISH]: "En leche",
      [ENGLISH]: "In milk",
    },
    available: true,
    coldPrice: "15.000",
  },
];

export const ORANGE_JUICE = {
  [SPANISH]: "Jugo de Naranja",
  [ENGLISH]: "Orange juice",
};
export const orangeJuiceProductList = [
  {
    name: {
      [SPANISH]: "Mediano",
      [ENGLISH]: "Medium",
    },
    available: false,
    coldPrice: "8.000",
  },
  {
    name: {
      [SPANISH]: "",
      [ENGLISH]: "",
    },
    available: true,
    coldPrice: "12.000",
  },
];

export const OTHER_DRINKS = {
  [SPANISH]: "Embotellados",
  [ENGLISH]: "Bottled",
};

export const otherDrinksProductList = [
  {
    name: {
      [SPANISH]: "Agua",
      [ENGLISH]: "Water",
    },
    available: true,
    coldPrice: "6.000",
  },
  {
    name: {
      [SPANISH]: "Gaseosa",
      [ENGLISH]: "Soda",
    },
    available: true,
    coldPrice: "6.000",
  },
  {
    name: {
      [SPANISH]: "HATSU soda",
      [ENGLISH]: "HATSU soda",
    },
    available: true,
    coldPrice: "8.000",
  },
  {
    name: {
      [SPANISH]: "HATSU té frio",
      [ENGLISH]: "HATSU cold tea",
    },
    available: true,
    coldPrice: "9.000",
  },
  {
    name: {
      [SPANISH]: "Cerveza nacional",
      [ENGLISH]: "National beer",
    },
    available: true,
    coldPrice: "9.500",
  },
  {
    name: {
      [SPANISH]: "Tres cordilleras",
      [ENGLISH]: "Three mountain ranges",
    },
    available: false,
    coldPrice: "12.000",
  },
  {
    name: {
      [SPANISH]: "Corona / Stella",
      [ENGLISH]: "Corona / Stella",
    },
    available: false,
    coldPrice: "12.000",
  },
  {
    name: {
      [SPANISH]: "Cerveza importada",
      [ENGLISH]: "Imported beer",
    },
    available: true,
    coldPrice: "12.000",
  },
  {
    name: {
      [SPANISH]: "Adición michelada",
      [ENGLISH]: "Add Michelada",
    },
    available: true,
    coldPrice: "3.000",
  },
];

export const SODAS = { [SPANISH]: "Sodas", [ENGLISH]: "Sodas" };
export const sodasProductList = [
  {
    name: {
      [SPANISH]: "Frutos rojos",
      [ENGLISH]: "Red fruits",
    },
    coldPrice: "14.000",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1742650898/Soda_de_frutos_rojos_converted_dedjxe.webp",
    description: {
      [SPANISH]: "Mermelada artesanal de fresa y mora con hierbabuena y limón",
      [ENGLISH]: "Artisanal Strawberry and Blackberry Jam with Mint and Lime",
    },
  },
  {
    name: {
      [SPANISH]: "Maracuyá",
      [ENGLISH]: "Passion fruit",
    },
    coldPrice: "14.000",
    available: true,
    img: "https://res.cloudinary.com/dwufyf99d/image/upload/v1742650898/Soda_maracuya_converted_zmx648.webp",
    description: {
      [SPANISH]:
        "Pulpa de maracuyá con limón y hierbabuena y un toque de almibar",
      [ENGLISH]: "Passion Fruit Pulp with Lime and Mint and a touch of syrup",
    },
  },
  {
    name: {
      [SPANISH]: "Michelada",
      [ENGLISH]: "Michelada",
    },
    coldPrice: "9.500",
    available: true,
    description: {
      [SPANISH]: "Limón y sal",
      [ENGLISH]: "Lemon and salt",
    },
  },
  {
    name: {
      [SPANISH]: "Orange",
      [ENGLISH]: "Orange",
    },
    coldPrice: "14.000",
    available: true,
    description: {
      [SPANISH]: "Jugo de naranja, con limón y almibar de naranja y romero",
      [ENGLISH]: "Orange juice, with lemon and orange and rosemary syrup",
    },
  },
];

export const disclaimer = {
  [SPANISH]:
    "**Todos los precios incluyen el ipoconsumo del  8 % -  se sugiere una propina voluntaria del 10% sobre el valor total de la cuenta. Todas la propinas se reparten en partes iguales para el personal de la panadería. Es decisión del consumidor pagar o no el valor de la propina voluntaria** ante cualquier inconveniente con el cobro de la propina, puede comunicarse con la Superintendencia de Industria y Comercio a través de sus canales de atención telefónica o por el correo institucional contactenos@sic.gov.co.",
  [ENGLISH]:
    "All prices include the 8% consumption tax. - A voluntary tip of 10% on the total bill is suggested. All tips are shared equally among our bakery staff. It is entirely up to the customer to decide whether or not to leave a tip. If you have any concerns regarding the tip charge, you may contact the Superintendence of Industry and Commerce through their customer service lines or by email at contactenos@sic.gov.co.**",
};
