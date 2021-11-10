import React from "react";
import Board from "react-trello";
import { KanbanCard } from "./kanbanCard/kanbanCard";
import "./kanban.scss";
import { InsertButton } from "./insertButton/insertButton";
import { data } from "./data/getData";
import { boardStyle } from "./kanbanStyle";

export const Kanban = (props) => {
  const getInsertCardButton = () => (
    <InsertButton openNonDetailedForm={props.openNonDetailedForm} />
  );

  const getCard = (props) => {
    const { date, cardName, shopName } = props;

    return <KanbanCard date={date} cardName={cardName} shopName={shopName} />;
  };

  return (
    <Board
      className={"kanban"}
      style={boardStyle}
      components={{
        AddCardLink: () => getInsertCardButton,
        Card: getCard,
      }}
      editable
      data={data}
    />
  );
};
