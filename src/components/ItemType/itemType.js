import { Text } from "../Text/Text";

export const ItemType = ({ type, weight, quantity, cost }) => (
  <>
    <Text text={type} />
    <Text text={weight} />
    <Text text={quantity} />
    <Text text={cost} />
  </>
);
