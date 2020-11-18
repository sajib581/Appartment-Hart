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

          <PrivateRoute path="/appartment">
          <Appartment></Appartment>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
