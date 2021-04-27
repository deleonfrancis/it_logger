import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/log/Logs";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <SearchBar />
      <Logs />
    </div>
  );
};

export default App;
