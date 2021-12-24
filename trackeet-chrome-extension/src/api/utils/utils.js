const { uuid } = require("uuidv4");

export const toCardServerFormat = (card) => {
  return {
    order_name: card.order_name,
    order_url: card.url,
    currency: "ILS", // todo fix the currency enum with the server .,
    company: card.company,
    order_date: card.order_date,
    estimated_arrival_date:
      card.estimated_arrival_date.toLocaleDateString("en-GB"),
    order_serial_code: card.order_serial_code,
    notes: card.notes,
    card_id: uuid(),
    timeline_position:
      card.order_status === "On The Way" ? "OnTheWay" : card.order_status,
    price: card.order_price,
  };
};
