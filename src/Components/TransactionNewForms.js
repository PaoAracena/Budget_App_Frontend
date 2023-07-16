import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleInput = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API}/transactions`, transaction)
      .then(() => {
        navigate("/transactions");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form className="form"  onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input id="date"
         type="date" 
         value={transaction.date} 
         onChange={handleInput} required />
<br/>
        <label htmlFor="name">Name:</label>
        <input id="name" 
        value={transaction.name} 
        onChange={handleInput} 
        required />
<br/>
        <label htmlFor="amount">Amount:</label>
        <input id="amount"
         type="number" 
         value={transaction.amount} 
         onChange={handleInput} 
         required />
         
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TransactionNewForm;