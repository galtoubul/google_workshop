import { initHttp } from "./http";
import { getCardsInFormat } from "./utils/utils";

export const initApi = () => {
  const http = initHttp();

  const getCards = async (cursor) => {
    const onTheWayCards = await getCardsInFormat(http, cursor, "on_the_way");
    const arrivedCards = await getCardsInFormat(http, cursor, "arrived");
    const wishListCards = await getCardsInFormat(http, cursor, "wish_list");

    return { onTheWayCards, arrivedCards, wishListCards };
  };

  const addCard = (card) => {
    return http.post("addCard", { card });
  };

  const updateCard = (cardId, card) => {
    // return http.post("updateCard", {
    //   ...toCardServerFormat(card),
    //   card_id: cardId,
    // });
  };

  const deleteCard = () => {};

  return { getCards, addCard, updateCard, deleteCard };
};
