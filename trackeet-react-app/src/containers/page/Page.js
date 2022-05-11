import { Kanban } from "../../components/kanban/kanban";
import { useEffect, useState } from "react";
import { KanbanProvider } from "../../utlis/hooks/kanbanContext/kanbanContext";
import { FormProvider } from "../forms/formContext/formContext";
import { Forms } from "../forms/forms";
import { useUserInformationContext } from "../../utlis/hooks/userInformationContext/userInformationContext";
import { Loader } from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

export const Page = () => {
  const [newCardPosition, setNewCardPosition] = useState("");
  const [startKanbanState, setStartKanbanState] = useState(null);
  const { isLoggedIn, api } = useUserInformationContext();

  const navigate = useNavigate();
  useEffect(async () => {
    if (isLoggedIn) {
      try {
        const cards = await api.getCards();
        setStartKanbanState(cards);
      } catch (e) {
        if (e.isAxiosError) {
          navigate({
            pathname: "../error",
            search: `?error_code=${e.message}`,
          });
        } else {
          navigate("../error");
        }
      }
    } else {
      navigate("../");
    }
  }, [isLoggedIn]);

  return !startKanbanState ? (
    <Loader />
  ) : (
    <>
      <KanbanProvider startKanbanState={startKanbanState}>
        <FormProvider>
          <NotificationContainer> </NotificationContainer>

          <Kanban setNewCardPosition={setNewCardPosition}></Kanban>

          <Forms newCardPosition={newCardPosition} />
        </FormProvider>
      </KanbanProvider>
    </>
  );
};
