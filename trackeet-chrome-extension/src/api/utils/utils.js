const { uuid } = require("uuidv4");

const currencies = { USD: "USD", EUR: "EUR", ILS: "ILS", GBP: "GBP" };

export const toCardServerFormat = (card) => {
  const newCard = {
    order_name: card.order_name,
    order_url: card.url,
    currency: currencies[card.currency] === undefined ? "USD" : card.currency, // todo fix the currency enum with the server .,
    company: card.company,
    order_date:
      (card.order_date instanceof Date &&
        card.order_date.toString() === "Invalid Date") ||
      card.order_date === null
        ? ""
        : card.order_date.toLocaleDateString("en-US"),
    estimated_arrival_date:
      (card.estimated_arrival_date instanceof Date &&
        card.estimated_arrival_date.toString() === "Invalid Date") ||
      card.estimated_arrival_date === null
        ? ""
        : card.estimated_arrival_date.toLocaleDateString("en-US"),
    order_serial_code: card.order_serial_code,
    notes: card.notes,
    card_id: uuid(),
    use_chrome_ext_client_id: "true",
    timeline_position:
      card.order_status === "On The Way" ? "OnTheWay" : card.order_status,
    price: isNaN(card.order_price) ? "0" : card.order_price,
  };
  console.log(newCard);
  return newCard;
};
