import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <tr className="border">
      <td className="Info">
        <a href={transaction.url} target="_blank" rel="noreferrer">
       <p className="date"> {transaction.date} </p> 
       <p className="name">{transaction.name} </p> 
        <p className="amount">{transaction.amount}   </p>
        </a>
      </td>
      <td>
        <Link to={`/transactions/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Transaction;