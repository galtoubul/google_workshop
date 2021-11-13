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
              cardName: "Milk",
              date: "15 mins",
              shopName: "amazon",
              id: "1",
            },
          ],
          id: "Wishlist",
          style: boardStyle,
          title: "Wishlist",
        },
        {
          cards: [
            {
              cardName: "Milk",
              date: "15 mins",
              shopName: "ebay",
              id: "2",
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
              cardName: "Milk",
              date: "15 mins",
              shopName: "asos",
              id: "3",
            },
            {
              cardName: "Milk",
              date: "15 mins",
              shopName: "aliExpress",
              id: "4",
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

  const addCard = (orderName, orderNumber, orderDate, orderCompany) => {
    kanbanState.eventBus.publish({
      type: "ADD_CARD",
      laneId: "Wishlist",
      card: {
        id: Math.random().toString(36).slice(2),
        cardName: orderName,
        date: orderDate,
        shopName: orderCompany.toLowerCase(),
        orderNumber,
      },
    });
  };

  return (
    <KanbanContext.Provider
      value={{ kanbanState, setKanbanState, addCard, setEventBus }}
    >
      {props.children}
    </KanbanContext.Provider>
  );
};
export const useKanbanContext = () => useContext(KanbanContext);
