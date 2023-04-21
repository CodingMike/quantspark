import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

export const useBasket = () => {
  // useContext docs
  const context = useContext(BasketContext);

  if (context === undefined) {
    throw new Error("useBasket must be used within the BasketProvider");
  }

  const {
    state: { basketItems, basketTypes },
    dispatch,
  } = context;

  return { basketItems, dispatch, basketTypes };
};
