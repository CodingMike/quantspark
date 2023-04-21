import { useBasket } from "../../hooks/useBasket/useBasket";
import { BasketItem } from "../BasketItem/BasketItem";
import { BasketTypes } from "../BasketTypes/BasketTypes";
import { Heading } from "../Heading/Heading";
import styles from "./Basket.module.css";

export const Basket = () => {
  const { basketItems, basketTypes } = useBasket();
  const basketTotal = basketItems.reduce(
    (acc, item) => acc + item.item_unit_cost * item.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <div className={styles.basket}>
        <Heading className={styles.heading} level={2} text="BASKET" />

        {basketItems?.map((item, index) => (
          <div className={styles.list} key={index}>
            <BasketItem
              name={item.item_name}
              weight={` ${item.item_unit_weight}`}
              quantity={` X${item.quantity}`}
            />
          </div>
        ))}

        <Heading
          className={styles.total}
          level={2}
          text={`TOTAL: £${basketTotal.toFixed(2)}`}
        />
      </div>
      <div className={styles.types}>
        {basketTypes?.map((type, index) => (
          <BasketTypes
            key={index}
            type={type.type}
            cost={type.cost}
            weight={type.weight}
            quantity={type.quantity}
          />
        ))}
      </div>
    </div>
  );
};
