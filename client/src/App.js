import React from 'react';
import { NewOffersComponent } from './Components/NewOffersComponent';
import { HotOffersComponent } from './Components/HotOffersComponent';
import { ExpiringOffersComponent } from './Components/ExpiringOffersComponent';

function App() {
  return (
    <>
      <NewOffersComponent />
      <HotOffersComponent />
      <ExpiringOffersComponent />
    </>
  );
}

export default App;
