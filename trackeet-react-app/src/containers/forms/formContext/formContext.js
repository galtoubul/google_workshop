import { formReducer } from "./formReducer";
import { CreateContext } from "../../../utlis/hooks/CreateContext/CreateContext";

export const formInitialState = {
  card: {
    orderName: "",
    url: "",
    currency: "",
    company: "",
    orderDate: null,
    estimatedArrivingDate: null,
    orderNumber: "",
    notes: "",
    position: "",
    id: "",
    currencyAmount: "",
    additionalPosition: "",
  },
  isNonDetailedFormOpen: false,
  isDetailedFormOpen: false,
  isNewForm: null,
  isCheckFormFailed: false,
  oldCard: null,
};

const getSetInputValueCallback = (dispatch) => (key) => {
  return (input) => {
    const newInput = {};
    newInput[key] = input;
    dispatch({ type: "ADD_INPUT_VALUE", payload: newInput });
  };
};

const openNonDetailedForm = (dispatch) => {
  return () => {
    dispatch({ type: "OPEN_NON_DETAILED_FORM" });
  };
};

const openDetailedForm = (dispatch) => {
  return () => {
    dispatch({ type: "OPEN_DETAILED_FORM" });
  };
};

const closeForm = (dispatch) => {
  return () => {
    dispatch({ type: "CLOSE_FORM" });
  };
};

const loadForm = (dispatch) => {
  return (card) => {
    dispatch({ type: "LOAD_FORM", payload: card });
  };
};

const setIsNewForm = (dispatch) => {
  return (isNewForm) => {
    dispatch({ type: "SET_IS_NEW_FORM", payload: isNewForm });
  };
};

const setIsCheckFormFailed = (dispatch) => {
  return (isCheckFormFailed) => {
    dispatch({ type: "SET_IS_CHECK_FORM_FAILED", payload: isCheckFormFailed });
  };
};

const setOldCard = (dispatch) => {
  return (oldCard) => {
    dispatch({ type: "SET_OLD_CARD", payload: oldCard });
  };
};

const Actions = {
  getSetInputValueCallback,
  openNonDetailedForm,
  openDetailedForm,
  closeForm,
  loadForm,
  setIsNewForm,
  setIsCheckFormFailed,
  setOldCard,
};

export const { Context: FormContext, Provider: FormProvider } = CreateContext(
  formReducer,
  Actions,
  formInitialState
);
