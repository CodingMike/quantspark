import styles from "./BasketItem.module.css";

export const BasketItem = ({ name, weight, quantity }) => (
  <div>
    <span className={styles.item}>{name}</span>
    <span>{`${weight}:`}</span>
    <span className={styles.quantity}>{quantity}</span>
  </div>
);
