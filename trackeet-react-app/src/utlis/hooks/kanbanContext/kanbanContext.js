import React, { createContext, useContext, useState } from "react";
import { uuid } from "uuidv4";
import { useUserInformationContext } from "../userInformationContext/userInformationContext";
import { getKanbanInitialState } from "./utils";
import { ErrorAlert } from "../../../components/forms/ErrorAlert";

const KanbanContext = createContext({ boardData: { lanes: [] } });

export const KanbanProvider = (props) => {
  const { onTheWayCards, arrivedCards, wishListCards } = props.startKanbanState;
  const { api, isLoggedIn } = useUserInformationContext();
  const [kanbanState, setKanbanState] = useState(
    getKanbanInitialState(
      wishListCards,
      isLoggedIn,
      onTheWayCards,
      arrivedCards
    )
  );

  const setEventBus = (eventBus) => {
    setKanbanState({ eventBus });
  };

  const getNewCard = (card, dragPosition) => {
    return dragPosition ? { ...card, position: dragPosition } : card;
  };

  const addCard = (card) => {
    console.log(card);
    card.id = uuid();
    console.log(card);
    // const oldCard = { ...card };
    kanbanState.eventBus.publish({
      type: "ADD_CARD",
      laneId: card.position,
      card: {
        ...card,
      },
    });

    // api.addCard(card).catch((e) => {
    //   ErrorAlert();
    //   kanbanState.eventBus.publish({
    //     type: "REMOVE_CARD",
    //     laneId: oldCard.position,
    //     cardId: oldCard.id,
    //   });
    // });
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
    api.deleteCard(card.id);
  };

  const updateCard = (card, dragPosition) => {
    kanbanState.eventBus.publish({
      card: getNewCard(card, dragPosition),
      type: "UPDATE_CARD",
      laneId: card.position,
    });

    api.updateCard({ ...card, position: dragPosition }).catch((e) => {
      ErrorAlert();
      if (dragPosition) {
        kanbanState.eventBus.publish({
          type: "REMOVE_CARD",
          laneId: dragPosition,
          cardId: card.id,
        });
        kanbanState.eventBus.publish({
          type: "ADD_CARD",
          laneId: card.position,
          card: {
            ...card,
          },
        });
      } else {
        kanbanState.eventBus.publish({
          card,
          type: "UPDATE_CARD",
          laneId: card.position,
        });
      }
    });
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
