import React, { useEffect } from "react";

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/log/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/log/AddLogModal";
import EditLogModal from "./components/log/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </div>
    </Provider>
  );
};

export default App;
