import React from 'react';
import './App.css';
import AppTitle from './Components/AppTitle';

import AppContainer from './Components/AppContainer';
import AppBody from './Components/AppBody';


function App() {
  return (
    <AppContainer>
      <AppTitle titleText='Lovely Trees' />
      <AppBody />
    </AppContainer>
  );
}

export default App;
