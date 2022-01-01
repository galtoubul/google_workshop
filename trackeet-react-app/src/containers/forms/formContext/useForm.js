import { useKanbanContext } from "../../../utlis/hooks/kanbanContext/kanbanContext";
import { FormContext } from "../formContext/formContext";
import { useContext } from "react";
import { validateForm } from "./validateForm";

export const useForm = () => {
  const { addCard, updateCard } = useKanbanContext();
  const { closeForm, state, setIsCheckFormFailed } = useContext(FormContext);
  const { oldCard } = state;

  const saveCard = (card) => {
    if (!validateForm(card)) {
      setIsCheckFormFailed(true);
      return;
    }

    setIsCheckFormFailed(false);

    state.isNewForm ? addCard(card) : updateCard(card, oldCard);
    closeForm();
  };

  return { saveCard };
};
