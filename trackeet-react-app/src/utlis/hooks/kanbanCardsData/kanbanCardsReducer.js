export const kanbanCardsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return { cards: [...state.cards, action.payload] };
    case "DELETE_CARD":
      return state.map(
        (card) => (card.id !== action.payload && card) || undefined
      );
    default:
      return state;
  }
};
