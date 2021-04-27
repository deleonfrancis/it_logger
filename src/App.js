import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/log/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/log/AddLogModal";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </div>
  );
};

export default App;
