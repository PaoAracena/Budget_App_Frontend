import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


function Transactions() {
  
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  let totalAmount = 0;
  if (transactions) {
    totalAmount = transactions.reduce((total, transaction) => total + Number(transaction.amount), 0);
  }

  return (
    <div className="Transactions">
      <div>
        <h2 className="total">Bank Account Total: <span>${totalAmount.toFixed(2)}</span></h2>
      </div>

      <div>
        <table className="table">
          
          <tbody className="chart">
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>

        </table>
      </div>
      
    </div>
  );
}

export default Transactions;