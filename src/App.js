import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes }
from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (

    <Router>
        <div className="app">

          
          
          <Routes>

            <Route path="/login" element={<Login />}/>
            <Route path="/checkout" element={<>  <Header/> <Checkout />  </>}/>
            <Route path="/" element={<>  <Header/>  <Home/>  </>} />
            
          </Routes>
          
        </div>
    </Router>
    
  );
}

export default App;
