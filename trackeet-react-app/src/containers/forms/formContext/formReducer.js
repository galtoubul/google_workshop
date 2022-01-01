import { formInitialState } from "./formContext";
import { validateForm } from "./validateForm";

export const formReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INPUT_VALUE":
      return {
        ...state,
        card: { ...state.card, ...action.payload },
      };
    case "OPEN_NON_DETAILED_FORM":
      return { ...state, isNonDetailedFormOpen: true };
    case "OPEN_DETAILED_FORM":
      return { ...state, isDetailedFormOpen: true };
    case "CLOSE_FORM":
      return { ...formInitialState };
    case "LOAD_FORM":
      return { ...state, card: action.payload };
    case "SET_IS_NEW_FORM":
      return { ...state, isNewForm: action.payload };
    case "SET_IS_CHECK_FORM_FAILED":
      return {
        ...state,
        card: { ...state.card, ...action.payload },
        isCheckFormFailed: !validateForm({ ...state.card, ...action.payload }),
      };
    case "SET_OLD_CARD":
      return { ...state, oldCard: action.payload };

    default:
      return state;
  }
};
