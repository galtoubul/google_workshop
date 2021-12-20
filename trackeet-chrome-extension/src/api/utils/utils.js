const { uuid } = require("uuidv4");

export const toCardServerFormat = (card) => {
  return {
    order_name: card.orderName,
    order_url: card.url,
    currency: "ILS", // todo fix the currency enum with the server .,
    company: card.company,
    order_date: card.orderDate,
    estimated_arrival_date: card.estimatedArrivingDate,
    order_serial_code: card.orderNumber,
    notes: card.notes,
    card_id: uuid(),
    timeline_position:
      card.position === "On The Way" ? "OnTheWay" : card.position,
    price: card.currencyAmount,
  };
};
