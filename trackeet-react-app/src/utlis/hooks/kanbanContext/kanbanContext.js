import React, { createContext, useContext, useState } from "react";
import { boardStyle } from "../../../components/kanban/data/styles";
import { uuid } from "uuidv4";
import { useUserInformationContext } from "../userInformationContext/userInformationContext";

const KanbanContext = createContext({ boardData: { lanes: [] } });

export const KanbanProvider = (props) => {
  const { onTheWayCards, arrivedCards, wishListCards } = props.startKanbanState;
  const { api, isLoggedIn } = useUserInformationContext();

  const [kanbanState, setKanbanState] = useState({
    boardData: {
      lanes: [
        {
          cards: wishListCards.cards,
          id: "Wishlist",
          style: { ...boardStyle, width: !isLoggedIn ? "290px" : "400px" },
          title: "Wishlist",
        },
        {
          cards: onTheWayCards.cards,
          currentPage: 1,
          id: "On The Way",

          style: { ...boardStyle, width: !isLoggedIn ? "290px" : "400px" },
          title: "On The Way",
        },
        {
          cards: arrivedCards.cards,
          currentPage: 1,
          id: "Arrived",
          style: { ...boardStyle, width: !isLoggedIn ? "290px" : "400px" },
          title: "Arrived",
        },
      ],
    },
  });

  const setEventBus = (eventBus) => {
    setKanbanState({ eventBus });
  };

  const getNewCard = (card, dragPosition) => {
    return dragPosition ? { ...card, position: dragPosition } : card;
  };

  const addCard = (card) => {
    kanbanState.eventBus.publish({
      type: "ADD_CARD",
      laneId: card.position,
      card: {
        ...card,
        id: uuid(),
      },
    });
    api.addCard(card).catch((e) => console.log(e));
  };

  const handleCardDrag = (dragPosition, card) => {
    updateCard(card, dragPosition);
  };

  const deleteCard = (card) => {
    kanbanState.eventBus.publish({
      type: "REMOVE_CARD",
      laneId: card.position,
      cardId: card.id,
    });
    api.deleteCard(card.id).catch((e) => console.log(e));
  };

  const updateCard = (card, dragPosition) => {
    kanbanState.eventBus.publish({
      card: getNewCard(card, dragPosition),
      type: "UPDATE_CARD",
      laneId: card.position,
    });
    api
      .updateCard({ ...card, position: dragPosition })
      .catch((e) => console.log(e));
  };

  return (
    <KanbanContext.Provider
      value={{
        updateCard,
        kanbanState,
        setKanbanState,
        addCard,
        setEventBus,
        deleteCard,
        handleCardDrag,
      }}
    >
      {props.children}
    </KanbanContext.Provider>
  );
};
export const useKanbanContext = () => useContext(KanbanContext);
