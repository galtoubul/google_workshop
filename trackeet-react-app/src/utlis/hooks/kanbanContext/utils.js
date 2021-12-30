import { boardStyle } from "../../../components/kanban/data/styles";

export const getKanbanInitialState = (
  wishListCards,
  isLoggedIn,
  onTheWayCards,
  arrivedCards
) => {
  return {
    boardData: {
      lanes: [
        {
          cards: wishListCards.cards,
          id: "WishList",
          style: { ...boardStyle, width: !isLoggedIn ? "290px" : "400px" },
          title: "WishList",
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
  };
};
