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
      position: card.timeline_position,
      currencyAmount: card.currency_amount,
    };
  });

  return { cards };
};
export const getCardsInFormat = async (http, cursor, position) => {
  const res = await http.get("getCards", {
    cursor,
    position,
  });
  return toCards(res);
};
