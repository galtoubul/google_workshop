const { uuid } = require("uuidv4");

export const toCardServerFormat = (card) => {
  const newCard = {
    order_name: card.order_name,
    order_url: card.url,
    currency: "ILS", // todo fix the currency enum with the server .,
    company: card.company,
    order_date: card.order_date.toLocaleDateString("en-US"),
    estimated_arrival_date:
      card.estimated_arrival_date.toLocaleDateString("en-US"),
    order_serial_code: card.order_serial_code,
    notes: card.notes,
    card_id: uuid(),
    use_chrome_ext_client_id: "true",
    timeline_position:
      card.order_status === "On The Way" ? "OnTheWay" : card.order_status,
    price: card.order_price,
  };
  console.log("inside utils");
  console.log(newCard);
  return newCard;
};
