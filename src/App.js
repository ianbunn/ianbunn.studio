import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from './views/pages/Landing'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}
