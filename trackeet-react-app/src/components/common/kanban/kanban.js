import React from 'react';
import Board from 'react-trello';
import { KanbanCard } from '../card/kanbanCard';
import './kanban.css';

const data = {
  lanes: [
    {
      cards: [
        {
          cardName: 'Milk',
          date: '15 mins',
          shopName: 'ebay',
          id: '1',
        },
      ],
      id: 'Wishlist',
      style: {
        width: 280,
      },
      title: 'Wishlist',
    },
    {
      cards: [
        {
          cardName: 'Milk',
          date: '15 mins',
          shopName: 'ebay',
          id: '2',
        },
      ],
      currentPage: 1,
      id: 'On The Way',
      style: {
        width: 280,
      },
      title: 'On The Way',
      titleStyle: {
        fontSize: 20,
        marginBottom: 15,
        justifyContent: 'center',
      },
    },
    {
      cards: [
        {
          cardName: 'Milk',
          date: '15 mins',
          shopName: 'ebay',
          id: '3',
        },
      ],
      currentPage: 1,
      id: 'Arrived',
      style: {
        width: 280,
      },
      title: 'Arrived',
    },
  ],
};

export const Kanban = (props) => {
  return (
    <Board
      className={'board'}
      components={{
        Card: (props) => {
          return (
            <KanbanCard
              date={props.date}
              cardName={props.cardName}
              shopName={props.shopName}
            />
          );
        },
      }}
      data={data}
    />
  );
};
