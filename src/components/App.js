import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
