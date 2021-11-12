import { Kanban } from "../../components/kanban/kanban";
import { useState } from "react";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import ModalForm from "../../components/forms/non_detailed/ModalForm";
import { KanbanTicketsProvider } from "../../utlis/hooks/kanbanCardsData/kanbanCardsContext";

export const Page = () => {
  const [newCardPosition, setNewCardPosition] = useState("");

  const closeNonDetailedForm = () => {
    setNewCardPosition("");
  };

  const openNonDetailedForm = (position) => {
    console.log(position);
    setNewCardPosition(position);
  };

  return (
    <>
      <KanbanTicketsProvider>
        <Kanban openNonDetailedForm={openNonDetailedForm}></Kanban>
        <ModalForm
          isModalOpen={newCardPosition !== ""}
          closeModal={closeNonDetailedForm}
        >
          <NonDetailedForm
            closeModal={closeNonDetailedForm}
            addPosition={newCardPosition}
          />
        </ModalForm>
      </KanbanTicketsProvider>
    </>
  );
};
