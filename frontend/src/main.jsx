import React from "react";
import ReactDOM from "react-dom/client";
import { AdsContextProvider } from "./context/AdsContext";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdsContextProvider>
      <App />
    </AdsContextProvider>
  </React.StrictMode>
);
