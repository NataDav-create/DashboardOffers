import React from 'react';
import { GlobalStyle } from './Components/styles/GlobalStyle';
import { NewOffersComponent } from './Components/NewOffersComponent';
import { HotOffersComponent } from './Components/HotOffersComponent';
import { ExpiringOffersComponent } from './Components/ExpiringOffersComponent';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
