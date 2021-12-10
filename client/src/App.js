import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './Components/styles/GlobalStyle';
import { NewOffersComponent } from './Components/NewOffersComponent';
import { HotOffersComponent } from './Components/HotOffersComponent';
import { ExpiringOffersComponent } from './Components/ExpiringOffersComponent';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';

const url = 'https://61b20da6c8d4640017aaf162.mockapi.io/api/network/1/offers';

function App() {
  const [offers, setOffers] = useState([]);

  const getOffers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setOffers(data);
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Sidebar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new">
          <NewOffersComponent offers={offers} setOffers={setOffers} />
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
