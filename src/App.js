import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/App/Main';
import Contact from './components/App/Contact';

export default function App() {


  return (
    <Router>
      <Switch>
        <Route path='/Contact'>
          <Contact />
        </Route>
        <Route path=''>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
