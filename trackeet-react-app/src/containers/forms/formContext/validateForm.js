export const ORDER_NAME_LENGTH = 25;

export const validateForm = (card) => {
  const {
    orderName,
    url,
    // currency,
    company,
    orderDate,
    estimatedArrivingDate,
    orderNumber,
    notes,
    currencyAmount,
  } = card;
  console.log(
    validateOrderName(orderName) &&
      validateUrl(url) &&
      validateNormalText(orderNumber) &&
      validateNormalText(company) &&
      validateNormalText() &&
      validateCurrencyAmount(currencyAmount) &&
      validateNotes(notes) &&
      validateDate(orderDate) &&
      validateDate(estimatedArrivingDate)
  );

  return (
    validateOrderName(orderName) &&
    validateUrl(url) &&
    validateNormalText(orderNumber) &&
    validateNormalText(company) &&
    validateNormalText() &&
    validateCurrencyAmount(currencyAmount) &&
    validateNotes(notes) &&
    validateDate(orderDate) &&
    validateDate(estimatedArrivingDate)
  );
};

export const validateOrderName = (orderName) => {
  return orderName.length < ORDER_NAME_LENGTH && orderName;
};

export const validateUrl = (url) => {
  return !url || url.length < 2084;
};

export const validateNormalText = (text) => {
  return !text || text.length < 256;
};

export const validateCurrencyAmount = (currencyAmount) => {
  if (!currencyAmount) {
    return true;
  }

  const number = parseInt(currencyAmount, 10);

  if (isNaN(number)) {
    return false;
  }

  if (currencyAmount < 0) return false;

  if (number > 10 ** 30) {
    return false;
  }

  return true;
};

export const validateDate = (date) => {
  if (Object.prototype.toString.call(date) === "[object Date]") {
    if (isNaN(date.getTime())) {
      return false;
    }

    return true;
  }

  return true;
};

export const validateNotes = (notes) => {
  return true;
};
