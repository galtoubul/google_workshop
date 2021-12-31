import { boardStyle } from "../../../components/kanban/data/styles";

const getBoardStyle = (isLoggedIn) => {
  return {
    ...boardStyle,
    width: !isLoggedIn ? "290px" : "400px",
    maxHeight: !isLoggedIn ? "500px" : "83vh",
    marginTop: isLoggedIn && "4vh",
  };
};

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
          style: getBoardStyle(isLoggedIn),
          title: "WishList",
        },
        {
          cards: onTheWayCards.cards,
          currentPage: 1,
          id: "On The Way",

          style: getBoardStyle(isLoggedIn),
          title: "On The Way",
        },
        {
          cards: arrivedCards.cards,
          currentPage: 1,
          id: "Arrived",
          style: getBoardStyle(isLoggedIn),
          title: "Arrived",
        },
      ],
    },
  };
};
