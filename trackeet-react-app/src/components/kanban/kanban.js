import React from "react";
import RealtimeBoard from "react-trello";
import { KanbanCard } from "./kanbanCard/kanbanCard";
import "./kanban.scss";
import { InsertButton } from "./insertButton/insertButton";
import { boardStyle } from "./kanbanStyle";
import { useKanbanContext } from "../../utlis/hooks/kanbanContext/kanbanContext";

export const Kanban = (props) => {
  const { kanbanState, setEventBus } = useKanbanContext();

  const getInsertCardButton = (props, id) => (
    <InsertButton
      openNonDetailedForm={() => {
        props.openNonDetailedForm(id);
      }}
    />
  );

  const getCard = (props) => {
    const { date, cardName, shopName } = props;

    return <KanbanCard date={date} cardName={cardName} shopName={shopName} />;
  };

  return (
    <RealtimeBoard
      className={"board"}
      style={boardStyle}
      components={{
        AddCardLink: (p) => getInsertCardButton(props, p.laneId),
        Card: getCard,
      }}
      editable
      eventBusHandle={setEventBus}
      data={kanbanState.boardData}
    />
  );
};
