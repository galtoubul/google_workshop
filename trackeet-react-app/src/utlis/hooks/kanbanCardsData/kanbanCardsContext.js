import { CreateContext } from "../CreateContext/CreateContext";
import { cards_initial_state } from "./data";
import { kanbanCardsReducer } from "./kanbanCardsReducer";

const addCard = (dispatch) => {
  return (card) => {
    dispatch({ type: "ADD_CARD", payload: card });
  };
};

const deleteCard = (dispatch) => {
  return (cardId) => {
    dispatch({ type: "DELETE_CARD", payload: cardId });
  };
};

const Actions = { addCard, deleteCard };

export const { Context: KanbanCardsContext, Provider: KanbanTicketsProvider } =
  CreateContext(kanbanCardsReducer, Actions, cards_initial_state);
