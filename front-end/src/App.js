import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Edit from "./Pages/Edit";
import NavBar from "./Components/NavBar";
import Show from "./Pages/Show";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
           <Router>
          <header>
      <NavBar/>
      </header>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
      </Routes>
    </div>
    </Router>
    
    </div>
  );
}

export default App;
