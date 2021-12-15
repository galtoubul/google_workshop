import { initHttp } from "./http";
import { getCardsInFormat, toCardServerFormat } from "./utils/utils";

export const initApi = (userInformation) => {
  console.log("initApi");
  console.log(userInformation);
  console.log(userInformation);
  const u = userInformation;
  const http = initHttp(u);

  const getCards = async (cursor) => {
    const onTheWayCards = await getCardsInFormat(http, cursor, "OnTheWay");
    const arrivedCards = await getCardsInFormat(http, cursor, "Arrived");
    const wishListCards = await getCardsInFormat(http, cursor, "WishList");

    return { onTheWayCards, arrivedCards, wishListCards };
  };

  const addCard = (card) => {
    return http.post("addCard", { card: toCardServerFormat(card) });
  };

  const updateCard = (card) => {
    return http.post("updateCard", { card: toCardServerFormat(card) });
  };

  const deleteCard = (cardId) => {
    return http.post("deleteCard", { card_id: cardId });
  };

  return { getCards, addCard, updateCard, deleteCard };
};
