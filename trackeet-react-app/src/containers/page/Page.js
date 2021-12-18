import { Kanban } from "../../components/kanban/kanban";
import { useEffect, useState } from "react";
import { KanbanProvider } from "../../utlis/hooks/kanbanContext/kanbanContext";
import { FormProvider } from "../forms/formContext/formContext";
import { Forms } from "../forms/forms";
import { useUserInformationContext } from "../../utlis/hooks/userInformationContext/userInformationContext";
import { initApi } from "../../utlis/api/api";

export const Page = () => {
  const [newCardPosition, setNewCardPosition] = useState("");
  const [startKanbanState, setStartKanbanState] = useState(null);
  const { userInformation, isLoggedIn, getIsLoggedIn } =
    useUserInformationContext();

  useEffect(async () => {
    if (isLoggedIn) {
      const api = initApi(userInformation, getIsLoggedIn);
      const cards = await api.getCards(1);
      setStartKanbanState(cards);
    }
  }, [isLoggedIn]);

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
