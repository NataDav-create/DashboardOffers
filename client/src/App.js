import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './Components/styles/GlobalStyle';
import { NewOffersComponent } from './Components/NewOffersComponent';
import { HotOffersComponent } from './Components/HotOffersComponent';
import { ExpiringOffersComponent } from './Components/ExpiringOffersComponent';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new">
          <NewOffersComponent />
        </Route>
        <Route exact path="/hot">
          <HotOffersComponent />
        </Route>
        <Route exact path="/expired">
          <ExpiringOffersComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
