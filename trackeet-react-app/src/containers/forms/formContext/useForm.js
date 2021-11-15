import { useKanbanContext } from "../../../utlis/hooks/kanbanContext/kanbanContext";
import { FormContext } from "../formContext/formContext";
import { useContext } from "react";

export const useForm = () => {
  const { addCard, updateCard } = useKanbanContext();
  const { closeForm, state } = useContext(FormContext);

  const saveCard = (card) => {
    state.isNewForm ? addCard(card) : updateCard(card);
    closeForm();
  };

  return { saveCard };
};
