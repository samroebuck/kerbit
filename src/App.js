import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from './components/App/Main'
import FixForm from './components/App/FixForm'


export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/FixForm">
            <FixForm />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>

    </Router>
  );
}