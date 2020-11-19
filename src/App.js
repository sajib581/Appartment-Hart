import './App.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Appartment from './Components/Appartment/Appartment';
import PrivateRoute from './Components/Home/Login/PrivateRoute';
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddRentHouse from "./Components/Dashboard/AddRentHouse/AddRentHouse";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import MyRent from "./Components/Dashboard/MyRent/MyRent";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/appartment">
          <Appartment></Appartment>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addRentHouse">
            <AddRentHouse />
          </Route>
          <Route path="/bookingList">
            <BookingList />
          </Route>
          <Route path="/myRent">
            <MyRent />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
