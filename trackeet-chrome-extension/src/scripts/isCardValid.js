/* eslint-disable no-var */

const isCardValid = (card) => {
  if (card === undefined) return false;
  if (Object.keys(card).length !== 8) return false;
  return true;
};

export default isCardValid;
