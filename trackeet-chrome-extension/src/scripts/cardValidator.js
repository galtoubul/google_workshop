/* eslint-disable no-var */

const cardValidator = (card) => {
  if (card == null) return false;
  if (Object.keys(card).length !== 8) return false;
  return true;
};

export default cardValidator;
