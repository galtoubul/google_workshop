import { Kanban } from "../../components/kanban/kanban";
import { useEffect, useState } from "react";
import { KanbanProvider } from "../../utlis/hooks/kanbanContext/kanbanContext";
import { FormProvider } from "../forms/formContext/formContext";
import { Forms } from "../forms/forms";
import { initMock } from "../../utlis/api/utils/mock";
import { initApi } from "../../utlis/api/api";

export const Page = () => {
  const [newCardPosition, setNewCardPosition] = useState("");
  const [startKanbanState, setStartKanbanState] = useState(null);

  useEffect(async () => {
    initMock();
    const api = initApi();

    const cards = await api.getCards(1);
    setStartKanbanState(cards);
  }, []);

  return !startKanbanState ? (
    <></>
  ) : (
    <>
      <KanbanProvider startKanbanState={startKanbanState}>
        <FormProvider>
          <Kanban setNewCardPosition={setNewCardPosition}></Kanban>

          <Forms newCardPosition={newCardPosition} />
        </FormProvider>
      </KanbanProvider>
    </>
  );
};
