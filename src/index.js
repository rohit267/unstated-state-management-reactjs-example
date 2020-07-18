import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unstated";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
