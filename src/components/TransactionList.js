import React from "react";
import { GlobalContext } from "../AppState";

const TransactionList = () => {
  const { transactions } = React.useContext(GlobalContext);
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li className="minus">
            {transaction.text} <span>-$400</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
