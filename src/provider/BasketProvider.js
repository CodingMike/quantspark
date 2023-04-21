import { useReducer } from "react";
import { BasketContext } from "../context/BasketContext";
import { basketReducer } from "../reducers/basketReducer";

export const BasketProvider = ({ children, initialValues }) => {
  const [state, dispatch] = useReducer(basketReducer, initialValues);

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};
