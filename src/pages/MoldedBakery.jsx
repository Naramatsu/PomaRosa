import { memo } from "react";
import Box from "../components/Box";
import PizzaItem from "../components/PizzaItem";
import Title from "../components/Title";
import {
  BRIOCHE_TITLE,
  briocheProductList,
  WHITE_SOURDOUGH_TITLE,
  whiteSourdoughProductList,
  WHOLE_WHEAT_SOURDOUGH_TITLE,
  wholeWheatSourdoughProductList,
} from "../data/bakery/moldedBakery";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";
import { MOLDED_BAKERY_TITLE } from "../utils/constants";

const MoldedBakery = () => {
  const [languaje] = useLanguaje();

  const wholeWheatSourdoughProducts = useProduct(
    wholeWheatSourdoughProductList
  );
  const whiteSourdoughProducts = useProduct(whiteSourdoughProductList);
  const briocheProducts = useProduct(briocheProductList);

  return (
    <section id={MOLDED_BAKERY_TITLE[languaje]} className="w-full p-5">
      <Title>{MOLDED_BAKERY_TITLE[languaje]}</Title>
      <Box className="gap-10 flex-col py-10">
        <Title subTitle>{WHOLE_WHEAT_SOURDOUGH_TITLE[languaje]}</Title>
        {wholeWheatSourdoughProducts.map(
          ({ name, medium, big, img }, index) => (
            <PizzaItem
              key={index}
              name={name[languaje]}
              medium={medium}
              big={big}
              img={img}
            />
          )
        )}
      </Box>

      <Box className="gap-10 flex-col py-10">
        <Title subTitle>{WHITE_SOURDOUGH_TITLE[languaje]}</Title>
        {whiteSourdoughProducts.map(({ name, medium, big, img }, index) => (
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
        <Title subTitle>{BRIOCHE_TITLE[languaje]}</Title>
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

export default memo(MoldedBakery);
