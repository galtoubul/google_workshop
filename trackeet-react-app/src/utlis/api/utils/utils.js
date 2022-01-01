const getCardPositionFrontFormat = (timeline_position) => {
  switch (timeline_position) {
    case "Arrived":
      return "Arrived";
    case "Wishlist":
      return "Wishlist";
    default:
      return "On The Way";
  }
};

export const toCards = (response) => {
  const cards = response.cards.map((card) => {
    return {
      orderName: card.order_name,
      url: card.order_url,
      currency: card.currency,
      company: card.company,
      orderDate: card.order_date,
      estimatedArrivingDate: card.estimated_arrival_date,
      orderNumber: card.order_serial_code,
      notes: card.notes,
      id: card.card_id,
      position: getCardPositionFrontFormat(card.timeline_position),
      additionalPosition:
        card.timeline_position === "OnTheWay"
          ? "On The Way"
          : card.timeline_position,
      currencyAmount: card.price,
    };
  });

  return { cards };
};

export const getCardsInFormat = async (http, cursor, position) => {
  const res = await http.get("getCards", {
    cursor,
    timeline_position: position,
  });
  return toCards(res);
};

export const toCardServerFormat = (card) => {
  return {
    old_order_name: card.oldOrderName,
    order_name: card.orderName,
    order_url: card.url,
    currency: card.currency,
    company: card.company,
    order_date: card.orderDate,
    estimated_arrival_date: card.estimatedArrivingDate,
    order_serial_code: card.orderNumber,
    notes: card.notes,
    card_id: card.id,
    timeline_position:
      card.position === "On The Way" ? "OnTheWay" : card.position,
    price: card.currencyAmount
      ? Number(parseFloat(card.currencyAmount).toFixed(3))
      : "",
  };
};
