import { initHttp } from "./http";
import { toCardServerFormat } from "./utils/utils";

export const initApi = (userInformation, getIsLoggedIn) => {
  const http = initHttp(userInformation);

  const addCard = (card) => {
    return http.post("addCard", { card: toCardServerFormat(card) });
  };

  return {
    addCard,
  };
};
