import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import {DataProvider} from "./contextAndReducers/DataProvider";
// Call make Server
makeServer();
// IIFE  for me being always logged-in for various functionalities
  

ReactDOM.render(
  <React.StrictMode>
     <Router>
       <DataProvider>
    <App />
    </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
