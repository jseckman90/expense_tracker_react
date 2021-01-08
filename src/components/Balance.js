import React from "react";
import { GlobalContext } from "../AppState";

const Balance = () => {
  const { transactions } = React.useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};

export default Balance;
