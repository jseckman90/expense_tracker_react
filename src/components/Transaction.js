import React from "react";
import { GlobalContext } from "../AppState";

const Transaction = (props) => {
  const { deleteTransaction } = React.useContext(GlobalContext);
  const { transaction } = props;
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => {
          deleteTransaction(transaction.id);
        }}>
        x
      </button>
    </li>
  );
};

export default Transaction;
