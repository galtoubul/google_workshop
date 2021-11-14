import { Kanban } from "../../components/kanban/kanban";
import { useState } from "react";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import ModalForm from "../../components/forms/non_detailed/ModalForm";
import { KanbanProvider } from "../../utlis/hooks/kanbanContext/kanbanContext";

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
      <KanbanProvider>
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
      </KanbanProvider>
    </>
  );
};
