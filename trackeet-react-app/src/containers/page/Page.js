import { Kanban } from "../../components/kanban/kanban";
import { useEffect, useState } from "react";
import { KanbanProvider } from "../../utlis/hooks/kanbanContext/kanbanContext";
import { FormProvider } from "../forms/formContext/formContext";
import { Forms } from "../forms/forms";
import { useUserInformationContext } from "../../utlis/hooks/userInformationContext/userInformationContext";
import { ErrorPage } from "../errorPage/ErrorPage";
import { Loader } from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import { ErrorAlert } from "../../components/forms/ErrorAlert";

export const Page = () => {
  const [newCardPosition, setNewCardPosition] = useState("");
  const [startKanbanState, setStartKanbanState] = useState(null);
  const { isLoggedIn, api } = useUserInformationContext();
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  useEffect(async () => {
    if (isLoggedIn) {
      try {
        const cards = await api.getCards();
        setStartKanbanState(cards);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      }
    } else {
      navigate("../");
    }
  }, [isLoggedIn]);

  console.log(isLoggedIn);
  return !startKanbanState ? (
    isError ? (
      <ErrorPage />
    ) : (
      <Loader />
    )
  ) : (
    <>
      <KanbanProvider startKanbanState={startKanbanState}>
        <FormProvider>
          <ErrorAlert />
          <Kanban setNewCardPosition={setNewCardPosition}></Kanban>
          <Forms newCardPosition={newCardPosition} />
        </FormProvider>
      </KanbanProvider>
    </>
  );
};
