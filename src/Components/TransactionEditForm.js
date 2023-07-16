import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


function TransactionEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();
  const [transaction, settransaction] = useState({
    name: "",
    amount: "",
    date: "",
  });
  const updatetransaction = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        settransaction(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    settransaction({ ...transaction, [event.target.id]: event.target.value });
  };



  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        settransaction(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatetransaction();
  };
  return (
    <div className="Edit">
 <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input id="date"
         type="date" 
         value={transaction.date} 
         onChange={handleTextChange} required />

        <label htmlFor="name">Name:</label>
        <input id="name" 
        value={transaction.name} 
        onChange={handleTextChange} 
        required />

        <label htmlFor="amount">Amount:</label>
        <input id="amount"
         type="number" 
         value={transaction.amount} 
         onChange={handleTextChange} 
         required />
         
        <button type="submit">Submit</button>
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;