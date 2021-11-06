import React from 'react';
import Board from 'react-trello';
import { KanbanCard } from '../card/kanbanCard';
import './kanban.css';
import { flexbox } from '@chakra-ui/react';

const data = {
  lanes: [
    {
      cards: [
        {
          cardName: 'Milk',
          date: '15 mins',
          shopName: 'amazon',
          id: '1',
        },
      ],
      id: 'Wishlist',
      style: {
        width: 400,
        backgroundColor: '#b7efc5',
      },
      title: 'Wishlist',
    },
    {
      cards: [
        {
          cardName: 'Milk',
          date: '15 mins',
          shopName: 'ebay',
          style: {
            width: 400,
            marginLeft: 30,
          },
          id: '2',
        },
      ],
      currentPage: 1,
      id: 'On The Way',
      style: {
        width: 400,
        backgroundColor: '#b7efc5',
        marginLeft: 30,
      },
      title: 'On The Way',
    },
    {
      cards: [
        {
          cardName: 'Milk',
          date: '15 mins',
          shopName: 'asos',
          id: '3',
        },
        {
          cardName: 'Milk',
          date: '15 mins',
          shopName: 'aliExpress',
          id: '4',
        },
      ],
      currentPage: 1,
      id: 'Arrived',
      style: {
        width: 400,
        backgroundColor: '#b7efc5',
        marginLeft: 30,
      },
      title: 'Arrived',
    },
  ],
};

export const Kanban = (props) => {
  return (
    <Board
      className={'board'}
      style={{
        display: flexbox,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
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
