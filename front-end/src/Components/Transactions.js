import { useState, useEffect } from "react";
import Transaction from "../Components/Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

useEffect(() => {
    axios 
    .get(`${API}/budgets`)
    .then((res) => setTransactions(res.data.payload))
    .catch((err) => console.log(err))
}, []);

  
    let price = 0;
    let amounts = transactions.map((transaction) => Number(transaction.amount))

    amounts.forEach((amount) => {
      price += amount;
    });
   
 
  return (
    <div className="transt">
      <section>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            
            {transactions.map((transaction) => {
              return <Transaction
                key={transaction}
                transaction={transaction}
              />
})}
          </tbody>
          <h1>BALANCE: ${price}</h1>
        </table>
      </section>
    </div>
  );
}

export default Transactions;