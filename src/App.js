import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Destination from './Component/Destination/Destination';
import NoMatch from './Component/NoMatch/NoMatch';
import Login from './Component/Login/Login';

import { createContext } from "react";
import { useState } from "react/cjs/react.development";
import PrivetRout from "./Component/PrivetRout/PrivetRout";

export const UserContext = createContext();




const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>

    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home/>
            </Route>
          
          <Route path="/login">
           <Login></Login>
            </Route>
          <PrivetRout path="/destination/:rideId">
            <Destination/>
            </PrivetRout>
            <PrivetRout path="/destination/1"><Destination/></PrivetRout>
          <Route exact path="/">
            <Home/>
            </Route>
          <Route  path="*"><NoMatch/></Route>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
};

export default App;