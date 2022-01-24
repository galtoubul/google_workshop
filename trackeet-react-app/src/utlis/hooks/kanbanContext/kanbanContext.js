import React, { createContext, useContext, useState } from "react";
import { uuid } from "uuidv4";
import { useUserInformationContext } from "../userInformationContext/userInformationContext";
import { getKanbanInitialState } from "./utils";
import { ErrorAlert } from "../../../components/forms/ErrorAlert";
import { getAdditionalPosition } from "../../api/utils/utils";

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
    return dragPosition
      ? { ...card, position: dragPosition, additionalPosition: dragPosition }
      : card;
  };

  const addCard = (card) => {
    // eslint-disable-next-line no-debugger
    debugger;
    card.id = uuid();
    card.additionalPosition = card.position;
    const oldCard = { ...card };
    kanbanState.eventBus.publish({
      type: "ADD_CARD",
      laneId: card.position,
      card: {
        ...card,
        additionalPosition: card.position,
      },
    });

    api
      .addCard(card)
      .then((response) => {
        kanbanState.eventBus.publish({
          card: {
            ...card,
            additionalPosition:
              (response.data &&
                getAdditionalPosition(response.data.timeline_position)) ||
              card.additionalPosition,
          },
          type: "UPDATE_CARD",
          laneId: card.position,
        });
      })
      .catch((e) => {
        ErrorAlert();
        kanbanState.eventBus.publish({
          type: "REMOVE_CARD",
          laneId: oldCard.position,
          cardId: oldCard.id,
        });
      });
  };

  const handleCardDrag = (dragPosition, card) => {
    updateCard(card, card, dragPosition);
  };

  const deleteCard = (card) => {
    kanbanState.eventBus.publish({
      type: "REMOVE_CARD",
      laneId: card.position,
      cardId: card.id,
    });

    api.deleteCard(card.id, card.orderName).catch((e) => {
      ErrorAlert();
      kanbanState.eventBus.publish({
        type: "ADD_CARD",
        laneId: card.position,
        card: {
          ...card,
        },
      });
    });
  };

  const updateCard = (card, oldCard, dragPosition) => {
    kanbanState.eventBus.publish({
      card: getNewCard(card, dragPosition),
      type: "UPDATE_CARD",
      laneId: card.position,
    });

    api
      .updateCard({
        ...card,
        position: dragPosition,
        oldOrderName: oldCard.orderName,
      })
      .catch((e) => {
        ErrorAlert();
        if (dragPosition) {
          kanbanState.eventBus.publish({
            type: "REMOVE_CARD",
            laneId: dragPosition,
            cardId: card.id,
          });
          kanbanState.eventBus.publish({
            type: "ADD_CARD",
            laneId: oldCard.position,
            card: {
              ...oldCard,
            },
          });
        } else {
          kanbanState.eventBus.publish({
            card: oldCard,
            type: "UPDATE_CARD",
            laneId: oldCard.position,
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
