import { Header } from "../../components/header/Header";
import { Kanban } from "../../components/kanban/kanban";
import { useState } from "react";
import NonDetailedForm from "../forms/non_detailed/NonDetailedForm";
import ModalForm from "../../components/forms/non_detailed/ModalForm";

export const Page = () => {
  const [isNonDetailedFormOpen, setIsNonDetailedFormOpen] = useState(false);

  const closeNonDetailedForm = () => {
    setIsNonDetailedFormOpen(false);
  };

  const openNonDetailedForm = () => {
    setIsNonDetailedFormOpen(true);
  };

  return (
    <>
      <Header />
      <Kanban openNonDetailedForm={openNonDetailedForm}></Kanban>
      <ModalForm
        isModalOpen={isNonDetailedFormOpen}
        closeModal={closeNonDetailedForm}
      >
        <NonDetailedForm />
      </ModalForm>
    </>
  );
};
