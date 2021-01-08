import React from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: [
    { id: 1, text: "computer", amount: -2000 },
    { id: 2, text: "freelance", amount: 1200 },
    { id: 3, text: "monitor", amount: -200 },
    { id: 4, text: "paycheck", amount: 1500 },
  ],
};

// creat context

export const GlobalContext = React.createContext(initialState);

// context provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  // actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
