import React, { useContext } from "react";
import Board from "react-trello";
import { KanbanCard } from "./kanbanCard/kanbanCard";
import "./kanban.scss";
import { InsertButton } from "./insertButton/insertButton";
import { getData } from "./data/getData";
import { boardStyle } from "./kanbanStyle";
import { KanbanCardsContext } from "../../utlis/hooks/kanbanCardsData/kanbanCardsContext";

export const Kanban = (props) => {
  const { state } = useContext(KanbanCardsContext);
  const { cards } = state;

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
    <Board
      className={"board"}
      handleDragEnd={(
        cardId,
        sourceLaneId,
        targetLaneId,
        position,
        cardDetails
      ) => {
        console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails);
      }}
      style={boardStyle}
      components={{
        AddCardLink: (p) => getInsertCardButton(props, p.laneId),
        Card: getCard,
      }}
      editable
      data={getData(cards)}
    />
  );
};
