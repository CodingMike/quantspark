import { useBasket } from "../../../hooks/useBasket/useBasket";
import { Button } from "../../Button/Button";
import { Heading } from "../../Heading/Heading";
import { Text } from "../../Text/Text";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }) => {
  const { dispatch } = useBasket();

  const addItemToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
    dispatch({
      type: "ADD_TO_BASKET_TYPES",
      payload: {
        type: item.type,
        quantity: item.quantity,
        cost: item.item_unit_cost,
        weight: item.item_unit_weight,
      },
    });
  };

  return (
    <div className={styles.box}>
      <Heading className={styles.item} level={2} text={product.item_name} />
      <Text
        className={styles.weight}
        text={`Weight: ${product.item_unit_weight}`}
      />
      <Text className={styles.cost} text={`cost: ${product.item_unit_cost}`} />
      <Text className={styles.type} text={`type: ${product.type}`} />
      <Button
        text="Add to basket"
        onClick={() => addItemToBasket({ ...product, quantity: 1 })}
      />
    </div>
  );
};
