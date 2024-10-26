import Product from "../components/Product";
import Title from "../components/Title";
import {
  COLD_DRINKS,
  JUICES,
  juicesList,
  juicesPrices,
  LEMONADE,
  lemonadeProductList,
  ORANGE_JUICE,
  orangeJuiceProductList,
  OTHER_DRINKS,
  otherDrinksProductList,
  SODAS,
  sodasProductList,
} from "../data/drinks";

const Drinks = ({ languaje }) => {
  return (
    <section id="drinks" className="w-full p-5">
      <Title>{COLD_DRINKS[languaje]}</Title>
      <br />
      <Title subTitle>{LEMONADE[languaje]}</Title>
      <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
        {lemonadeProductList.map(({ name, coldPrice }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            coldPrice={coldPrice}
            noLabel
          />
        ))}
      </section>
      <br />
      <Title subTitle>{JUICES[languaje]}</Title>
      <section className="w-full flex flex-col gap-5 justify-center items-center p-2 border-2 border-white/50 sm:flex-row sm:p-5">
        <p className="text-white text-xl lexend">{juicesList[languaje]}</p>
        <section>
          {juicesPrices.map(({ name, coldPrice }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              noLabel
            />
          ))}
        </section>
      </section>
      <br />
      <Title subTitle>{ORANGE_JUICE[languaje]}</Title>
      <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
        {orangeJuiceProductList.map(({ name, coldPrice }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            coldPrice={coldPrice}
            noLabel
          />
        ))}
      </section>
      <br />
      <Title subTitle>{OTHER_DRINKS[languaje]}</Title>
      <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
        {otherDrinksProductList.map(({ name, coldPrice }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            coldPrice={coldPrice}
            noLabel
          />
        ))}
      </section>
      <br />
      <Title subTitle>{SODAS[languaje]}</Title>
      <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
        {sodasProductList.map(({ name, description, coldPrice }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            coldPrice={coldPrice}
            description={description[languaje]}
            noLabel
          />
        ))}
      </section>
    </section>
  );
};

export default Drinks;
