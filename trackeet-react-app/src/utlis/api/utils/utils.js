const getCardPositionFrontFormat = (timeline_position) => {
  switch (timeline_position) {
    case "Arrived":
      return "Arrived";
    case "Wishlist":
    case "WishList":
    case "wishlist":
    case "wishList":
      return "Wishlist";
    default:
      return "On The Way";
  }
};

const getAdditionalPosition = (card) => {
  switch (card.timeline_position) {
    case "OnTheWay":
      return "On The Way";
    case "WishList":
      return "Wishlist";
    case "PickUp":
      return "Pick Up";
    default:
      return card.timeline_position;
  }
};

export const toCards = (response) => {
  const cards = response.cards.map((card) => {
    return {
      orderName: card.order_name,
      url: card.order_url,
      currency: card.currency,
      company: card.company,
      orderDate: card.order_date ? new Date(card.order_date) : null,
      estimatedArrivingDate: card.estimated_arrival_date
        ? new Date(card.estimated_arrival_date)
        : null,
      orderNumber: card.order_serial_code,
      notes: card.notes,
      id: card.card_id,
      position: getCardPositionFrontFormat(card.timeline_position),
      additionalPosition: getAdditionalPosition(card),
      currencyAmount: card.price,
    };
  });

  return cards;
};

export const getCardsInFormat = async (http, cursor) => {
  const res = await http.get("getCards", {
    cursor,
  });

  return toCards(res);
};

export const toCardServerFormat = (card) => {
  console.log(typeof card.estimatedArrivingDate);
  console.log(card.estimatedArrivingDate);
  console.log(
    card.estimatedArrivingDate &&
      card.estimatedArrivingDate.toLocaleDateString("en-US")
  );
  return {
    old_order_name: card.oldOrderName,
    order_name: card.orderName,
    order_url: card.url,
    currency: card.currency,
    company: card.company,
    order_date: card.orderDate
      ? card.orderDate.toLocaleDateString("en-US")
      : "",
    estimated_arrival_date: card.estimatedArrivingDate
      ? card.estimatedArrivingDate.toLocaleDateString("en-US")
      : "",
    order_serial_code: card.orderNumber,
    notes: card.notes,
    card_id: card.id,
    timeline_position:
      card.position === "On The Way" ? "OnTheWay" : card.position,
    price: card.currencyAmount,
  };
};
