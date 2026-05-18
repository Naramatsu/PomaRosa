import { memo } from "react";
import Box from "../components/Box";
import PizzaItem from "../components/PizzaItem";
import Title from "../components/Title";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";
import { MOLDED_BAKERY_TITLE } from "../utils/constants";
import { MOLDED_TITLE, moldedProductList } from "../data/bakery/mold";

const MoldedBakeryV2 = () => {
  const [languaje] = useLanguaje();

  const moldedProducts = useProduct(moldedProductList);

  return (
    <section id={MOLDED_BAKERY_TITLE[languaje]} className="w-full p-5">
      <Title>{MOLDED_TITLE[languaje]}</Title>
      <Box className="gap-10 flex-col py-10">
        {moldedProducts.map(({ name, medium, big, img }, index) => (
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

export default memo(MoldedBakeryV2);
