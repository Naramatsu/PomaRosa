import { memo } from "react";
import Box from "../components/Box";
import PizzaItem from "../components/PizzaItem";
import Title from "../components/Title";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";
import { BRIOCHE_BAKERY_TITLE } from "../utils/constants";
import { BRIOCHE_TITLE, briocheProductList } from "../data/bakery/brioche";

const Brioche = () => {
  const [languaje] = useLanguaje();

  const briocheProducts = useProduct(briocheProductList);

  return (
    <section id={BRIOCHE_BAKERY_TITLE[languaje]} className="w-full p-5">
      <Title>{BRIOCHE_TITLE[languaje]}</Title>
      <Box className="gap-10 flex-col py-10">
        {briocheProducts.map(({ name, medium, big, img }, index) => (
          <PizzaItem
            key={index}
            name={name[languaje]}
            medium={medium}
            big={big}
            img={img}
          />
        ))}
      </Box>
    </section>
  );
};

export default memo(Brioche);
