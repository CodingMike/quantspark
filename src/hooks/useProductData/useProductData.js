import { useEffect, useState } from "react";

export const useProductData = () => {
  const [productData, setProductData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://quant-spark.github.io/qs-test/test.json"
        );
        const data = await response.json();

        setProductData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { productData };
};
