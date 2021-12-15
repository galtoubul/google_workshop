import React, { useContext } from "react";
import RealtimeBoard from "react-trello";
import { KanbanCard } from "./kanbanCard/kanbanCard";
import "./kanban.scss";
import { InsertButton } from "./insertButton/insertButton";
import { boardStyle } from "./kanbanStyle";
import { useKanbanContext } from "../../utlis/hooks/kanbanContext/kanbanContext";
import {
  FormContext,
  formInitialState,
} from "../../containers/forms/formContext/formContext";
import { Box } from "@mui/material";
import { useUserInformationContext } from "../../utlis/hooks/userInformationContext/userInformationContext";

export const Kanban = (props) => {
  const { kanbanState, setEventBus, handleCardDrag } = useKanbanContext();
  const { openNonDetailedForm, setIsNewForm } = useContext(FormContext);
  const { setNewCardPosition } = props;
  const { isLoggedIn } = useUserInformationContext();
  const getInsertCardButton = (props, id) => (
    <InsertButton
      openNonDetailedForm={() => {
        openNonDetailedForm();
        setIsNewForm(true);
        setNewCardPosition(id);
      }}
    />
  );

  const getCardFormat = (props) => {
    return Object.keys(props)
      .filter((key) => Object.keys(formInitialState.card).includes(key))
      .reduce((obj, key) => {
        obj[key] = props[key];
        return obj;
      }, {});
  };

  const getCard = (props) => {
    return <KanbanCard card={getCardFormat(props)} />;
  };

  const handleDragEnd = (
    cardId,
    sourceLaneId,
    targetLaneId,
    position,
    cardDetails
  ) => {
    delete cardDetails.laneId;
    handleCardDrag(targetLaneId, cardDetails);
  };

  return (
    <Box
      sx={{ marginTop: isLoggedIn ? "67.89px" : "0px" }}
      className={"kanbanContainer"}
    >
      <RealtimeBoard
        className={"board"}
        style={boardStyle}
        components={{
          AddCardLink: (p) => getInsertCardButton(props, p.laneId),
          Card: getCard,
        }}
        handleDragEnd={handleDragEnd}
        editable
        draggable
        eventBusHandle={setEventBus}
        data={kanbanState.boardData}
      />
    </Box>
  );
};
