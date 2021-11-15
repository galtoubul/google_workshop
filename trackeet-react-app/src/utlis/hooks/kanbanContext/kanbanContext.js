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
              currency: "50",
              company: "Amazon",
              orderDate: "11/10/2020",
              estimatedArrivingDate: "11/11/2020",
              orderNumber: "3444234",
              notes: "",
              id: "1",
              position: "Wishlist",
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
              currency: "32",
              company: "Ebay",
              orderDate: "11/11/2021",
              estimatedArrivingDate: "01/01/2022",
              orderNumber: "3123",
              notes: "",
              id: "2",
              position: "On The Way",
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
              currency: "32",
              company: "Asos",
              orderDate: "12/10/2020",
              estimatedArrivingDate: "01/01/2022",
              orderNumber: "13123",
              notes: "",
              id: "3",
              position: "Arrived",
            },
            {
              orderName: "Refrigerator",
              url: "",
              currency: "230",
              company: "Aliexpress",
              orderDate: "12/10/2020",
              estimatedArrivingDate: "03/12/2020",
              orderNumber: "",
              notes: "",
              id: "4",
              position: "Arrived",
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

  const deleteCard = (card) => {
    kanbanState.eventBus.publish({
      type: "REMOVE_CARD",
      laneId: card.position,
      cardId: card.id,
    });
  };

  const updateCard = (card) => {
    console.log("UPDATE");
    kanbanState.eventBus.publish({
      card,
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
      }}
    >
      {props.children}
    </KanbanContext.Provider>
  );
};
export const useKanbanContext = () => useContext(KanbanContext);
