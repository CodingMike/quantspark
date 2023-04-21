import { Text } from "../Text/Text";
import styles from "./BasketTypes.module.css";

export const BasketTypes = ({ type, weight, quantity, cost }) => (
  <div className={styles.container}>
    <Text className={styles.type} text={`${type}:`} />
    <Text className={styles.weight} text={`Weight: ${weight}`} />
    <Text className={styles.quantity} text={`Quantity: ${quantity}`} />
    <Text className={styles.cost} text={`Cost: £${cost.toFixed(2)}`} />
  </div>
);
