import { Link } from "react-router-dom";
import React from "react";


function Transaction({ transaction, index }) {
  return (
 
    <tr>
      <td>
        {transaction.name ? (
          <span>{transaction.month}</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      
      <td>
           {transaction.name}
      </td>
  
      <td> {transaction.amount} </td>
     
      <td>
        <Link to={`/transactions/${index}`}>☞</Link>
      </td>
    </tr>
    
  );
}

export default Transaction;