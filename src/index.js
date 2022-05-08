import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ConnContextProvider } from "./context/ConnContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ConnContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
