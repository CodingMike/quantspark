import { handleWeight } from "../helpers/handleWeight/handleWeight";

export const basketReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_BASKET":
      const itemIndex = state.basketItems.findIndex(
        (item) => item.id === payload.id
      );
      const item = state.basketItems[itemIndex];
      const updatedItems = [...state.basketItems];

      if (item) {
        updatedItems[itemIndex] = {
          ...item,
          item_unit_weight: handleWeight(
            item.item_unit_weight,
            payload.item_unit_weight
          ),
          quantity: item.quantity + payload.quantity,
        };
      } else {
        updatedItems.push({
          ...payload,
        });
      }

      return {
        ...state,
        basketItems: updatedItems,
      };
    case "ADD_TO_BASKET_TYPES":
      const typeIndex = state.basketTypes.findIndex(
        (type) => type.type === payload.type
      );
      const type = state.basketTypes[typeIndex];
      const updatedTypes = [...state.basketTypes];

      if (type) {
        updatedTypes[typeIndex] = {
          ...type,
          weight: handleWeight(type.weight, payload.weight),
          quantity: type.quantity + payload.quantity,
          cost: type.cost + payload.cost,
        };
      } else {
        updatedTypes.push({
          ...payload,
        });
      }

      return {
        ...state,
        basketTypes: updatedTypes,
      };
    default:
      return state;
  }
};
