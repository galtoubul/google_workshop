import { initHttp } from "./http";
import { getCardsInFormat, toCardServerFormat } from "./utils/utils";

const deleteUnnecessaryFields = (data) => {
  const a = {};
  Object.keys(data.card).forEach((k) => {
    if (data.card[k] != null) {
      a[k] = data.card[k];
    }
  });
  return a;
};

export const initApi = (userInformation, isLoggedIn) => {
  const http = initHttp(userInformation);

  const checkIfTheUserLoggedIn = (callback) => {
    if (isLoggedIn) {
      return callback;
    }

    return () => {
      return new Promise((resolve) => {
        resolve("demo");
      });
    };
  };

  const getCards = async (cursor) => {
    const cards = await getCardsInFormat(http, cursor);
    const onTheWayCards = [...cards].filter((card) => {
      return card.position === "On The Way";
    });

    const arrivedCards = [...cards].filter(
      (card) => card.position === "Arrived"
    );

    const wishListCards = [...cards].filter(
      (card) => card.position === "Wishlist"
    );

    return { onTheWayCards, arrivedCards, wishListCards };
  };

  const addCard = (card) => {
    const cardsInServerFormat = { card: toCardServerFormat(card) };
    const serverData = deleteUnnecessaryFields(cardsInServerFormat);

    return http.post("addCard", serverData);
  };

  const updateCard = (card) => {
    const cardsInServerFormat = { card: toCardServerFormat(card) };
    const serverData = deleteUnnecessaryFields(cardsInServerFormat);

    return http.post("updateCard", serverData);
  };

  const deleteCard = (cardId, orderName) => {
    return http.post("deleteCard", { card_id: cardId, order_name: orderName });
  };

  return {
    getCards,
    addCard: checkIfTheUserLoggedIn(addCard),
    updateCard: checkIfTheUserLoggedIn(updateCard),
    deleteCard: checkIfTheUserLoggedIn(deleteCard),
  };
};
