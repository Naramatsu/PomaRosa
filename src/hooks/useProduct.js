import { useMemo } from "react";

const useProduct = (produts) => {
  const productMemo = useMemo(
    () => produts.filter((product) => product.available),
    [produts]
  );
  return productMemo;
};

export default useProduct;
