import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Day from "./Day";
import UpdateActivity from "./UpdateActivity";

function App() {
  return (
    <div>
      <center>
        <h1>My Schedule List</h1>
      </center>
      <NavBar />
      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Day/:id">
          <Day />
        </Route>
        <Route path="/Edit">
          <UpdateActivity />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
