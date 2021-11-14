import { Kanban } from "../../components/kanban/kanban";
import { useState } from "react";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import DetailedForm from "../forms/detailed/DetailedForm";
import ModalForm from "../../components/forms/non_detailed/ModalForm";
import { KanbanProvider } from "../../utlis/hooks/kanbanContext/kanbanContext";

export const Page = () => {
  const [nonDetailedFormPosition, setNonDetailedFormPosition] = useState("");

  const closeNonDetailedForm = () => {
    setNonDetailedFormPosition("");
  };

  const openNonDetailedForm = (position) => {
    console.log(position);
    setNonDetailedFormPosition(position);
  };

  const [detailedFormPosition, setDetailedFormPosition] = useState("");

  const closeDetailedForm = () => {
    setDetailedFormPosition("");
  };

  const openDetailedForm = (position) => {
    console.log(position);
    setDetailedFormPosition(position);
  };

  return (
    <>
      <KanbanProvider>
        <Kanban
          openNonDetailedForm={openNonDetailedForm}
          openDetailedForm={openDetailedForm}
        ></Kanban>
        <ModalForm
          isModalOpen={nonDetailedFormPosition !== ""}
          closeModal={closeNonDetailedForm}
        >
          <NonDetailedForm
            closeModal={closeNonDetailedForm}
            openDetailedForm={openDetailedForm}
            addPosition={nonDetailedFormPosition}
          />
        </ModalForm>

        <ModalForm
          isModalOpen={detailedFormPosition !== ""}
          closeModal={closeDetailedForm}
        >
          <DetailedForm
            closeModal={closeDetailedForm}
            addPosition={detailedFormPosition}
          />
        </ModalForm>
      </KanbanProvider>
    </>
  );
};
