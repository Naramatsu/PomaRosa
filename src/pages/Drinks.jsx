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
import useLanguaje from "../hooks/useLanguaje";

const Drinks = () => {
  const [languaje] = useLanguaje();

  return (
    <section id={COLD_DRINKS[languaje]} className="w-full p-5">
      <Title>{COLD_DRINKS[languaje]}</Title>
      <br />
      <Title subTitle>{LEMONADE[languaje]}</Title>
      <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
        {lemonadeProductList.map(({ name, coldPrice, img }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            coldPrice={coldPrice}
            img={img}
            noLabel
          />
        ))}
      </section>
      <br />
      <Title subTitle>{JUICES[languaje]}</Title>
      <section className="w-full flex flex-col gap-5 justify-center items-center p-2 border-2 border-white/50 sm:flex-row rounded-sm sm:p-5">
        <p className="text-white text-xl dancing-script">
          {juicesList[languaje]}
        </p>
        <section>
          {juicesPrices.map(({ name, coldPrice, img }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              img={img}
              noLabel
            />
          ))}
        </section>
      </section>
      <br />
      <Title subTitle>{ORANGE_JUICE[languaje]}</Title>
      <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
        {orangeJuiceProductList.map(({ name, coldPrice, img }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            coldPrice={coldPrice}
            img={img}
            noLabel
          />
        ))}
      </section>
      <br />
      <Title subTitle>{OTHER_DRINKS[languaje]}</Title>
      <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
        {otherDrinksProductList.map(({ name, coldPrice, img }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            coldPrice={coldPrice}
            img={img}
            noLabel
          />
        ))}
      </section>
      <br />
      <Title subTitle>{SODAS[languaje]}</Title>
      <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
        {sodasProductList.map(
          ({ name, description, coldPrice, img }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              description={description[languaje]}
              img={img}
              noLabel
            />
          )
        )}
      </section>
    </section>
  );
};

export default Drinks;
