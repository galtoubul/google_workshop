import React, { useReducer } from "react";

export const CreateContext = (reducer, actions, initialState) => {
  const Context = React.createContext(initialState);

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    Object.keys(actions).forEach((key) => {
      boundActions[key] = actions[key](dispatch, state);
    });

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
