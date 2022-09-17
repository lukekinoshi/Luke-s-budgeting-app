import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const API = process.env.REACT_APP_API_URL;

function TransactEdit() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    name: "",
    date: "",
    amount: "",
    from: "",
  
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };


  useEffect(() => {
    axios.get(`${API}/transactions/${id}`)
      .then(response => setTransaction(response.data))
      .catch(error => console.error(error))

   
  }, [id]);

  const updateTransaction = () => {
    axios.put(`${API}/transactions/${id}`, transaction) 
    // two arguments because the second argument(transaction) is the data we have to send. In the backend it is our request.body
      .then(response => {
        setTransaction(response.data)
        // updating the transaction in state to the updated transaction from our backend
        navigate(`/transactions/${id}`)
        // navigatng back to our transaction show page
      })
      .catch(error => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <hr></hr>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <hr></hr>
        <br/>
        <label htmlFor="month">Month:</label>
        <input
          id="month"
          value={transaction.month}
          type="text"
          onChange={handleTextChange}
          placeholder="Month"
          required
        />
        <hr></hr>
        <br></br>
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          placeholder="Date"
          onChange={handleTextChange}
        />
        <br/>
        <hr></hr>
        <label for="amount">Amount: </label>
        <input
          id="amount"
          type="number"
          required
          value={transaction.amount}
          placeholder=""
          min = "-300"
          max = "1000"
          onChange={handleTextChange}
        />
        <br/>
<hr></hr>
        
        <label htmlFor="from">From: </label>
        <textarea
          id="from"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="Type Here"
        />
        <br />
<hr></hr>
        <input type="submit" />
        <hr></hr>
      </form>
      <Link to={`/transactions/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TransactEdit;