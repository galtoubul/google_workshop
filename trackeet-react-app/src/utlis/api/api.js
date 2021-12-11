import { initHttp } from "./http";
import { getCardsInFormat, toCardServerFormat } from "./utils/utils";

export const initApi = () => {
  const http = initHttp();

  const getCards = async (cursor) => {
    const onTheWayCards = await getCardsInFormat(http, cursor, "on_the_way");
    const arrivedCards = await getCardsInFormat(http, cursor, "arrived");
    const wishListCards = await getCardsInFormat(http, cursor, "wish_list");

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
