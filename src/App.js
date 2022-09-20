import React from 'react';
import './App.css';

import Routes from './Routes';
import GlobalStyle from './themes/global-style';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;