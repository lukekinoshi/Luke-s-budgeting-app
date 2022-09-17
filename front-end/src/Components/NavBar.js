import { Link } from "react-router-dom";

import React from 'react'

function Navbar() {
  return (
    <div className="Nav">
      <main>
        <h1>
      <Link to = "/transactions" className="link">Transaction</Link>
      </h1>
      <button className="bttn">
        <Link to ="transactions/new" className="link">New Page</Link>
      </button> 
      </main>
    </div>
  )
}


export default Navbar