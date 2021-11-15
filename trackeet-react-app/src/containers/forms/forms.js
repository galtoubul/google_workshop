import ModalForm from "../../components/forms/non_detailed/ModalForm";
import NonDetailedForm from "./non_detailed/NonDetailedForm";
import DetailedForm from "./detailed/DetailedForm";
import { useContext } from "react";
import { FormContext } from "./formContext/formContext";

export const Forms = (props) => {
  const { state, closeForm } = useContext(FormContext);
  const { isNonDetailedFormOpen, isDetailedFormOpen } = state;
  return (
    <>
      <ModalForm closeModal={closeForm} isModalOpen={isNonDetailedFormOpen}>
        <NonDetailedForm
          newFormPosition={props.newFormPosition}
          newCardPosition={props.newCardPosition}
        />
      </ModalForm>

      <ModalForm closeModal={closeForm} isModalOpen={isDetailedFormOpen}>
        <DetailedForm addPosition={props.formPosition} />
      </ModalForm>
    </>
  );
};
