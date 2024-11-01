import {
  ENGLISH,
  scrollToSection,
  SPANISH,
  whatsAppLink,
} from "../utils/constants";

export const urlGenerator = (url) => {
  const newUrl = new URL(url);
  window.open(newUrl.href, "_blank");
};

export const menuList = [
  {
    label: {
      [SPANISH]: "Menú",
      [ENGLISH]: "Menu",
    },
    link: "cafe",
    handlerCLick: scrollToSection,
  },
  {
    label: {
      [SPANISH]: "WhatsApp",
      [ENGLISH]: "WhatsApp",
    },
    link: whatsAppLink,
    handlerCLick: urlGenerator,
  },
  {
    label: {
      [SPANISH]: "Localización",
      [ENGLISH]: "Location",
    },
    link: "https://maps.app.goo.gl/JhDx9PVz13TeURyF6",
    handlerCLick: urlGenerator,
  },
  {
    label: {
      [SPANISH]: "Galería",
      [ENGLISH]: "Gallery",
    },
    link: "",
  },
];

export const LANGUAJES = {
  [SPANISH]: "Español",
  [ENGLISH]: "English",
};
