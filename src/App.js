import React, { useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes }
from "react-router-dom";
import Checkout from "./Checkout";
import Payment from './Payment'
import { auth } from './firebase';
import{ useStateValue } from "./StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('The USER IS >>>>', authUser);
      
      if(authUser) {
        //the user just logged in / the user was logged in

        //fire off the event and shoot the user in the data layer
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //The user is logged out
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (

    <Router>
        <div className="app">

          
          
          <Routes>

            <Route path="/login" element={<Login />}/>
            <Route path="/checkout" element={<>  <Header/> <Checkout />  </>}/>
            <Route path="/payment" element={<>  <Header/> <Payment />  </>}/>
            <Route path="/" element={<>  <Header/>  <Home/>  </>} />
            
          </Routes>
          
        </div>
    </Router>
    
  );
}

export default App;
