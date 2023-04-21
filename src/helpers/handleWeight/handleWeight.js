export const handleWeight = (itemWeight, payloadWeight) => {
  const parsedItemWeight = parseInt(itemWeight.slice(0, -1));
  const parsePayloadWeight = parseInt(payloadWeight.slice(0, -1));
  const weightSum = parsedItemWeight + parsePayloadWeight;
  return weightSum.toString() + "g";
};
