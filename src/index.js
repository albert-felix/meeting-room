import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./store/UserProvider/UserProvider";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <UserProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </UserProvider>,
  rootElement
);
