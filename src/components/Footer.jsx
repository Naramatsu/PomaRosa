import useLanguaje from "../hooks/useLanguaje";
import { ENGLISH, SPANISH } from "../utils/constants";
import TextWarning from "./TextWarning";

const Footer = () => {
  const [languaje] = useLanguaje();

  return (
    <footer className="w-full h-auto bg-black border-t-2 border-green">
      <section className="p-5 max-w-[600px] m-auto">
        <TextWarning>{footer[languaje]}</TextWarning>
      </section>
    </footer>
  );
};

export default Footer;

const footer = {
  [SPANISH]:
    "**Se sugiere una propina voluntaria del 10% sobre el valor total de la cuenta. Todas la propinas se reparten en partes iguales para el personal de la panadería. Es decisión del consumidor pagar o no el valor de la propina voluntaria** ante cualquier inconveniente con el cobro de la propina, puede comunicarse con la Superintendencia de Industria y Comercio a través de sus canales de atención telefónica o por el correo institucional contactenos@sic.gov.co.** Aplica solo para consumo en el local.",
  [ENGLISH]:
    "**A voluntary tip of 10% of the total bill is suggested. All tips are shared equally among the bakery staff. It is up to the consumer to decide whether or not to pay the voluntary tip. If there is any issue with the tip charge, you can contact the Superintendence of Industry and Commerce through their telephone support channels or via their official email: contactenos@sic.gov.co.** This applies only to consumption on-site.",
};
