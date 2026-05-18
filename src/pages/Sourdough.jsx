import { memo } from "react";
import Box from "../components/Box";
import PizzaItem from "../components/PizzaItem";
import Title from "../components/Title";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";
import { SOURDOUGH_BAKERY_TITLE } from "../utils/constants";
import {
  sourdoughProductList,
  WHITE_SOURDOUGH_SUBTITLE,
  WHOLE_WHEAT_SOURDOUGH_TITLE,
  wholeWheatSourdoughProductList,
} from "../data/bakery/sourdough";

const Sourdough = () => {
  const [languaje] = useLanguaje();

  const sourdoughProduct = useProduct(sourdoughProductList);
  const wholeWheatSourdoughProduct = useProduct(wholeWheatSourdoughProductList);

  return (
    <section id={SOURDOUGH_BAKERY_TITLE[languaje]} className="w-full p-5">
      <Title>{SOURDOUGH_BAKERY_TITLE[languaje]}</Title>
      <Box className="gap-10 flex-col py-10">
        <Title subTitle>{WHITE_SOURDOUGH_SUBTITLE[languaje]}</Title>
        {sourdoughProduct.map(({ name, medium, big, img }, index) => (
          <PizzaItem
            key={index}
            name={name[languaje]}
            medium={medium}
            big={big}
            img={img}
          />
        ))}
      </Box>

      <Box className="gap-10 flex-col py-10">
        <Title subTitle>{WHOLE_WHEAT_SOURDOUGH_TITLE[languaje]}</Title>
        {wholeWheatSourdoughProduct.map(({ name, medium, big, img }, index) => (
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

export default memo(Sourdough);
