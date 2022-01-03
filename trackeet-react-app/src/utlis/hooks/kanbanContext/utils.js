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
  console.log(wishListCards);
  return {
    boardData: {
      lanes: [
        {
          cards: wishListCards,
          id: "Wishlist",
          style: getBoardStyle(isLoggedIn),
          title: "Wishlist",
        },
        {
          cards: onTheWayCards,
          currentPage: 1,
          id: "On The Way",

          style: getBoardStyle(isLoggedIn),
          title: "On The Way",
        },
        {
          cards: arrivedCards,
          currentPage: 1,
          id: "Arrived",
          style: getBoardStyle(isLoggedIn),
          title: "Arrived",
        },
      ],
    },
  };
};
