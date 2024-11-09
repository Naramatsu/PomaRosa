import {
  ENGLISH,
  MENU_TITLE,
  scrollToSection,
  SPANISH,
  urlGenerator,
  whatsAppLink,
} from "../utils/constants";

export const menuList = [
  {
    label: MENU_TITLE,
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
      [SPANISH]: "Instagram",
      [ENGLISH]: "Instagram",
    },
    link: "https://www.instagram.com/panaderiapomarosa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    handlerCLick: urlGenerator,
  },
];

export const LANGUAJES = {
  [SPANISH]: "Español",
  [ENGLISH]: "English",
};
