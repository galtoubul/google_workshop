import {
  boardStyle,
  getPhoneStyle,
} from "../../../components/kanban/data/styles";
import "./kanban.scss";

const getBoardStyle = (isLoggedIn, isIpad, isPhone, width, height) => {
  let x = {};
  if (isPhone) {
    x = getPhoneStyle(width);
  }

  console.log("height");
  console.log(height);
  console.log("height");
  return {
    ...boardStyle,
    width: !isLoggedIn || isIpad ? "290px" : "400px",
    maxHeight: !isLoggedIn
      ? "500px"
      : height > 740
      ? "83vh"
      : (height - 35) * 0.8,
    marginTop: isLoggedIn && "4vh",
    ...x,
  };
};

export const getKanbanInitialState = (
  wishListCards,
  isLoggedIn,
  onTheWayCards,
  arrivedCards,
  isIpad,
  isPhone,
  width,
  height
) => {
  return {
    boardData: {
      lanes: [
        {
          cards: wishListCards,
          id: "Wishlist",
          style: getBoardStyle(isLoggedIn, isIpad, isPhone, width, height),
          title: "Wishlist",
        },
        {
          cards: onTheWayCards,
          currentPage: 1,
          id: "On The Way",

          style: getBoardStyle(isLoggedIn, isIpad, isPhone, width, height),
          title: "On The Way",
        },
        {
          cards: arrivedCards,
          currentPage: 1,
          id: "Arrived",
          style: getBoardStyle(isLoggedIn, isIpad, isPhone, width, height),
          title: "Arrived",
        },
      ],
    },
  };
};
