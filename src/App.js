import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const stripePromise = loadStripe("pk_test_51LB1QcSFrjMuZC1iFS4qxx2Bv2yovP0h6SBbQS6CTNTpoWcPzp1Je4NfFJmIR8VRx4g2xPQS3zHURUeABC2Y035u00B9B09c4y");

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('the user is --- ', authUser);

      if (authUser) {
        //the user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment" element={[
            <Header />,
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          ]}
          />
          <Route path="/orders" element={[<Header />, <Orders />]} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
