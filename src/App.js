import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51LhI3EBH7KB8AA5TZS0dteg6QxkqDWlYNjzrtBgObhRqEb0vjyP4KDjkJ2TKhAbzBY0ouCARH1MZNFYNGvqZUlES002qLCHTDv'
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log(authUser);
      if (authUser) {
        // the user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
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

          <Route
            path="/login"
            element={
              <>
                <Login />
              </>}>
          </Route>

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>}>
          </Route>

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>}>
          </Route>

          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>}>
          </Route>

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>}>
          </Route>

        </Routes>

      </div>
    </Router>
  );
}

export default App;