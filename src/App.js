import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';
import Orders from './Orders';
import { useEffect } from 'react';
import { auth,onAuthStateChanged } from './firebase';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Footer from './Footer';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/react-stripe-js";


function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("THE USER IS >>>", user);

      if (user) {
        const uid = user.uid;
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;