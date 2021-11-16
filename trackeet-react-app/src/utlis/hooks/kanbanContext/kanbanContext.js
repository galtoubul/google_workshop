import React, { createContext, useContext, useState } from "react";
import { boardStyle } from "../../../components/kanban/data/styles";

const KanbanContext = createContext({ boardData: { lanes: [] } });

export const KanbanProvider = (props) => {
  const [kanbanState, setKanbanState] = useState({
    boardData: {
      lanes: [
        {
          cards: [
            {
              orderName: "New shoes",
              url: "https://shoesonline.co.il/product/unisex-converse-all-s",
              currency: "ILS",
              company: "Amazon",
              orderDate: "11/10/2020",
              estimatedArrivingDate: "11/11/2020",
              orderNumber: "3444234",
              notes: "",
              id: "1",
              position: "Wishlist",
              currencyAmount: 120,
            },
          ],
          id: "Wishlist",
          style: boardStyle,
          title: "Wishlist",
        },
        {
          cards: [
            {
              orderName: "Computer",
              url: "https://shoesonline.co.il/product/unisex-converse-all-s",
              currency: "ILS",
              company: "Ebay",
              orderDate: "11/11/2021",
              estimatedArrivingDate: "01/01/2022",
              orderNumber: "3123",
              notes: "",
              id: "2",
              position: "On The Way",
              currencyAmount: 120,
            },
          ],
          currentPage: 1,
          id: "On The Way",
          style: boardStyle,
          title: "On The Way",
        },
        {
          cards: [
            {
              orderName: "New shirt",
              url: "",
              currency: "ILS",
              company: "Asos",
              orderDate: "12/10/2020",
              estimatedArrivingDate: "01/01/2022",
              orderNumber: "13123",
              notes: "",
              id: "3",
              position: "Arrived",
              currencyAmount: 120,
            },
            {
              orderName: "Refrigerator",
              url: "",
              currency: "ILS",
              company: "AliExpress",
              orderDate: "12/10/2020",
              estimatedArrivingDate: "03/12/2020",
              orderNumber: "",
              notes: "",
              id: "4",
              position: "Arrived",
              currencyAmount: 120,
            },
          ],
          currentPage: 1,
          id: "Arrived",
          style: boardStyle,
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
        id: Math.random().toString(36).slice(2),
      },
    });
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
  };

  const updateCard = (card, dragPosition) => {
    kanbanState.eventBus.publish({
      card: getNewCard(card, dragPosition),
      type: "UPDATE_CARD",
      laneId: card.position,
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
