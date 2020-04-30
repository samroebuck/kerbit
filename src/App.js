import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/App/Main';
import Contact from './components/App/Contact';
import FormSuccess from './components/App/FormSuccess';

export default function App() {


  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/Contact'>
          <Contact />
        </Route>
        <Route path='/FormSuccess'>
          <FormSuccess />
        </Route>
        <Route path=''>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
