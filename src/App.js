import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Clock from "./pages/Clock/Clock.js";
import CurrencyCalculator from "./pages/CurrencyCalculator/CurrencyCalculator.js";
import MagicTable from "./pages/MagicTable/MagicTable.js";

function App() {
  return (
    <Router>
      <Route path="/" component={Clock} />
      <Route
        path={["/CurrencyCalculator/", "/CurrencyCalculator/:currencyParam"]}
        excat
        component={CurrencyCalculator}
      />
      <Route path={["/MagicTable", "/Table"]} excat component={MagicTable} />
      <Route path="/Table1">
        {42 == 42 ? <Redirect push to="/MagicTable" /> : <Clock />}
      </Route>
    </Router>
  );
}

export default App;
