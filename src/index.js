import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import {DataProvider} from "./contextAndReducers/DataProvider";
import{AuthProvider} from "./contextAndReducers/AuthProvider"
// Call make Server
makeServer();


  

ReactDOM.render(
  <React.StrictMode>
     <Router>
         <DataProvider>
     <AuthProvider>  
      <App />
    </AuthProvider>
    </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
