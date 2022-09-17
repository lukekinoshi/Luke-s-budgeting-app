import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import axios from "axios";

const API = process.env.REACT_APP_API_URL;
function TransactionInfo() {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();

  const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .get(`${API}/transactions/${index}`)
        .then((response) => setTransaction(response.data))
        .catch((error) => console.log(error))
    },[index , navigate]
  );

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));

  };
  return (
    <article className="showP">
      <h2 className="">Name: {transaction.name}</h2>
      <hr></hr>
      <h2 className="">Month: {transaction.month}</h2>
      <hr></hr>
      <h3 className="">Date: {transaction.date}</h3>
      <hr></hr>
      <h3 className="">Amount: {transaction.amount}</h3>
      <hr></hr>
      <h3 className="">From: {transaction.from}</h3>
      <hr></hr>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionInfo;