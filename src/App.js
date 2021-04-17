import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/Login/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import ManageService from './components/Dashboard/ManageService/ManageService';
import Customer from './components/Customer/Customer/Customer';
import BookingList from './components/Customer/BookingList/BookingList';
import OrderList from './components/Dashboard/OrderList/OrderList';
import Review from './components/Customer/Review/Review';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';

export const userContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/manageService">
            <ManageService></ManageService>
          </Route>
          <Route path="/service/:id">
            <Customer></Customer>
          </Route>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
