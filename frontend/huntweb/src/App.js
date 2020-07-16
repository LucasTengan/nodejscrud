import React from 'react';
import api from './services/api';
import Main from './pages/main';

import './styles.css';

import Header from './Components/Header'
import Routes from './routes'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
)


export default App;
