import { Kanban } from "../../components/kanban/kanban";
import { useState } from "react";
import { KanbanProvider } from "../../utlis/hooks/kanbanContext/kanbanContext";
import { FormProvider } from "../forms/formContext/formContext";
import { Forms } from "../forms/forms";

export const Page = () => {
  const [newCardPosition, setNewCardPosition] = useState("");

  return (
    <>
      <KanbanProvider>
        <FormProvider>
          <Kanban setNewCardPosition={setNewCardPosition}></Kanban>

          <Forms newCardPosition={newCardPosition} />
        </FormProvider>
      </KanbanProvider>
    </>
  );
};
