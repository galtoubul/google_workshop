import NonDetailedForm from "./non_detailed/NonDetailedForm";
import DetailedForm from "./detailed/DetailedForm";
import { useContext } from "react";
import { FormContext } from "./formContext/formContext";

export const Forms = (props) => {
  const { state, closeForm } = useContext(FormContext);
  const { isNonDetailedFormOpen, isDetailedFormOpen } = state;

  return (
    <>
      <NonDetailedForm
        newFormPosition={props.newFormPosition}
        newCardPosition={props.newCardPosition}
        isNonDetailedFormOpen={isNonDetailedFormOpen}
        closeForm={closeForm}
      />

      <DetailedForm closeModal={closeForm} isModalOpen={isDetailedFormOpen} />
    </>
  );
};
