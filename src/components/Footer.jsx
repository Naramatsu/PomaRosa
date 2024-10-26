import { ENGLISH, SPANISH } from "../utils/constants";
import TextWarning from "./TextWarning";

const Footer = ({ languaje }) => (
  <footer>
    <TextWarning>{footer[languaje]}</TextWarning>
  </footer>
);

export default Footer;

const footer = {
  [SPANISH]:
    "**se sugiere una propina voluntaria del 10% sobre el valor total de la cuenta. Todas la propinas se reparten en partes iguales para el personal de la panadería. Es decisión del consumidor pagar o no el valor de la propina voluntaria** ante cualquier inconveniente con el cobro de la propina, puede comunicarse con la Superintendencia de Industria y Comercio a través de sus canales de atención telefónica o por el correo institucional contactenos@sic.gov.co.",
  [ENGLISH]:
    "**A voluntary tip of 10% of the total bill is suggested. All tips are shared equally among the bakery staff. It is the consumer's decision whether or not to pay the voluntary tip.** If you have any problems with the tip collection, you can contact the Superintendency of Industry and Commerce through its telephone service channels or by institutional email contactenos@sic.gov.co.",
};