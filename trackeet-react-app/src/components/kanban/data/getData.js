import { boardStyle } from "./styles";

const getFormatCards = (cards, state) => {
  return cards
    .filter((card) => card.state === state)
    .map((card) => {
      return {
        cardName: card.cardName,
        date: card.date,
        shopName: card.shopName,
        id: card.id,
      };
    });
};

export const getData = (cards) => {
  return {
    lanes: [
      {
        cards: getFormatCards(cards, "WishList"),
        id: "WishList",
        style: boardStyle,
        title: "WishList",
      },
      {
        cards: getFormatCards(cards, "On The Way"),
        currentPage: 1,
        id: "On The Way",
        style: boardStyle,
        title: "On The Way",
      },
      {
        cards: getFormatCards(cards, "Arrived"),
        currentPage: 1,
        id: "Arrived",
        style: boardStyle,
        title: "Arrived",
      },
    ],
  };
};
