import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Clock from './pages/Clock/Clock.js';
import CurrencyCalculator from './pages/CurrencyCalculator/CurrencyCalculator.js';
import MagicTable from './pages/MagicTable/MagicTable.js';

function App() {
  return (
    <Router>
      <Route path='/' component={Clock}/>
      <Route path='/CurrencyCalculator' excat component={CurrencyCalculator}/>
      <Route path={['/MagicTable', '/Table']} excat component={MagicTable}/>
    </Router>
  );
}

export default App;
