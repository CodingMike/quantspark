import { Basket } from "./components/Basket/Basket";
import styles from "./App.module.css";
import { BasketProvider } from "./provider/BasketProvider";
import { basketInitialValues } from "./constants/Basket";
import { Products } from "./components/Products/Products";

export const App = () => (
  <BasketProvider initialValues={basketInitialValues}>
    <div className={styles.container}>
      <Products />
      <Basket />
    </div>
  </BasketProvider>
);
