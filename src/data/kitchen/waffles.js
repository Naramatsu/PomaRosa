import { ENGLISH, SPANISH } from "../../utils/constants";

export const SAVORY_WAFFLES = {
  [SPANISH]: "WAFFLES SALADOS",
  [ENGLISH]: "SAVORY WAFFLES",
};

export const savoryWafflesProducts = [
  {
    name: {
      [SPANISH]: "CLÁSICO DE PAN DE YUCA",
      [ENGLISH]: "CLASSIC YUCA BREAD",
    },
    hotPrice: "24.000",
    available: false,
    description: {
      [SPANISH]: "Con queso crema y mermelada.",
      [ENGLISH]: "With cream cheese and jam",
    },
  },
  {
    name: {
      [SPANISH]: "FRUTAL",
      [ENGLISH]: "FRUITY",
    },
    hotPrice: "27.000",
    available: false,
    description: {
      [SPANISH]:
        "Fruta fresca del día con miel de agave orgánica y almendras tostadas fileteadas.",
      [ENGLISH]:
        "Fresh Fruit of the day with organic agave honey and sliced toasted almonds.",
    },
  },
  {
    name: {
      [SPANISH]: "CLÁSICO",
      [ENGLISH]: "CLASSIC",
    },
    hotPrice: "19.000",
    available: false,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738937789/waffleclasico_fe6bra.webp",
    description: {
      [SPANISH]: "Con miel de maple y Mantequilla.",
      [ENGLISH]: "With maple syrup and butter.",
    },
  },
  {
    name: {
      [SPANISH]: "WAFFLE SANDWICH",
      [ENGLISH]: "WAFFLE SANDWICH",
    },
    hotPrice: "30.500",
    available: false,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1738941120/wafflesanduche_ec3ptv.jpg",
    description: {
      [SPANISH]:
        "Jamón de cerdo, tocineta crujiente, queso mozzarella, huevos revueltos y alioli de ajo.",
      [ENGLISH]:
        "Pork ham, crispy bacon, mozzarella cheese, scrambled eggs, and garlic aioli.",
    },
  },
];

export const SWEET_WAFFLES = {
  [SPANISH]: "WAFFLES DULCES",
  [ENGLISH]: "SWEET WAFFLES",
};

export const SWEET_WAFFLES_SUBTITLE = {
  [SPANISH]: "Todos nuestros waffles vienen con helado y crema chantilly.",
  [ENGLISH]: "All our waffles come with ice cream and whipped cream.",
};

export const sweetWafflesProducts = [
  {
    name: {
      [SPANISH]: "TRADICIONAL",
      [ENGLISH]: "TRADITIONAL",
    },
    coldPrice: "20.0900",
    available: true,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196276/waffletradicional_ngc9w1.jpg",
    description: {
      [SPANISH]: "Waffle artesanal con salsa de chocolate hersheys.",
      [ENGLISH]: "Artisan Waffle with Hershey's Chocolate Sauce.",
    },
  },
  {
    name: {
      [SPANISH]: "BANANO",
      [ENGLISH]: "BANANA",
    },
    coldPrice: "23.000",
    available: false,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196275/waffledebanano_zfsypl.jpg",
    description: {
      [SPANISH]: "Fresco fileteado con salsa caseras de arequipe y caramelo.",
      [ENGLISH]:
        "Freshly Sliced with House-Made Dulce de Leche and Caramel Sauce.",
    },
  },
  {
    name: {
      [SPANISH]: "NUTELLA",
      [ENGLISH]: "NUTELLA",
    },
    coldPrice: "25.000",
    available: false,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196275/waffledenutella_nqdpcm.jpg",
    description: {
      [SPANISH]:
        "Waffle bañado con Nutella y lluvia de trozos de fresas frescas.",
      [ENGLISH]: "Waffle with Nutella and Fresh Strawberry Pieces.",
    },
  },
  {
    name: {
      [SPANISH]: "BERRIES",
      [ENGLISH]: "BERRIES",
    },
    coldPrice: "24.000",
    available: false,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196275/waffleberries_sma8mr.jpg",
    description: {
      [SPANISH]: "Salsa de frutos rojos con fresas y arándanos frescos.",
      [ENGLISH]: "Berry Sauce with Fresh Strawberries and Blueberries.",
    },
  },
  {
    name: {
      [SPANISH]: "DÚO",
      [ENGLISH]: "DUO",
    },
    coldPrice: "25.000",
    available: false,
    // img:  "https://res.cloudinary.com/dwufyf99d/image/upload/v1739196276/waffleduo_ahubnf.jpg",
    description: {
      [SPANISH]:
        "Con trozos de fresas, banano y salsa de chocolate y arequipe.",
      [ENGLISH]:
        "With Strawberry and Banana Chunks, Chocolate Sauce, and Dulce de Leche.",
    },
  },
];

export const WAFFLE_WARNING = {
  [SPANISH]:
    "Todos nuestros wafles dulces vienen con helado y crema chantilly.",
  [ENGLISH]:
    "All our sweet waffles are served with ice cream and whipped cream.",
};

export const WAFFLES_TITLE = {
  [SPANISH]: "WAFFLES",
  [ENGLISH]: "WAFFLES",
};

export const wafflesProducts = [
  {
    name: {
      [SPANISH]: "TRADICIONAL",
      [ENGLISH]: "TRADITIONAL",
    },
    hotPrice: "21.900",
    available: true,
    description: {
      [SPANISH]: "Waffle artesanal con salsa de chocolate hersheys.",
      [ENGLISH]: "Artisan Waffle with Hershey's Chocolate Sauce.",
    },
  },
  {
    name: {
      [SPANISH]: "CARIBE",
      [ENGLISH]: "CARIBBEAN",
    },
    hotPrice: "25.500",
    available: true,
    description: {
      [SPANISH]: "Waffle artesanal con salsa de chocolate hersheys.",
      [ENGLISH]: "Artisan Waffle with Hershey's Chocolate Sauce.",
    },
  },
  {
    name: {
      [SPANISH]: "CLÁSICO",
      [ENGLISH]: "CLASSIC",
    },
    hotPrice: "19.000",
    available: false,
    img: "assets/waffleclasico.webp",
    description: {
      [SPANISH]: "Con miel de maple y Mantequilla.",
      [ENGLISH]: "With maple syrup and butter.",
    },
  },
  {
    name: {
      [SPANISH]: "BANANO",
      [ENGLISH]: "BANANA",
    },
    hotPrice: "23.000",
    available: false,
    img: "assets/waffledebanano.jpeg",
    description: {
      [SPANISH]:
        "Fresco fileteado con salsa caseras de arequipe y caramelo. Incluyen helado y crema chantillí.",
      [ENGLISH]:
        "Freshly Sliced with House-Made Dulce de Leche and Caramel Sauce. Included ice cream and whipped cream.",
    },
  },
  {
    name: {
      [SPANISH]: "NUTELLA",
      [ENGLISH]: "NUTELLA",
    },
    hotPrice: "27.500",
    available: true,
    img: "assets/waffledenutella.jpeg",
    description: {
      [SPANISH]:
        "Waffle bañado con Nutella y lluvia de trozos de fresas frescas. Incluyen helado y crema chantillí.",
      [ENGLISH]:
        "Waffle with Nutella and Fresh Strawberry Pieces. Included ice cream and whipped cream.",
    },
  },
  {
    name: {
      [SPANISH]: "BERRIES",
      [ENGLISH]: "BERRIES",
    },
    hotPrice: "26.500",
    available: true,
    img: "assets/waffleberries.jpeg",
    description: {
      [SPANISH]:
        "Salsa de frutos rojos con fresas y arándanos frescos. Incluyen helado y crema chantillí.",
      [ENGLISH]:
        "Berry Sauce with Fresh Strawberries and Blueberries. Included ice cream and whipped cream.",
    },
  },
];
