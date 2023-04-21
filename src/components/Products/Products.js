import { useProductData } from "../../hooks/useProductData/useProductData";
import { ProductCard } from "../ProductCard/ProductCard/ProductCard";

import styles from "./Product.module.css";

export const Products = () => {
  const { productData } = useProductData();

  return (
    <div className={styles.container}>
      {productData?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};
