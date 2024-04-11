import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { AdsContextProvider } from "./context/AdsContext";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AdsContextProvider>
        <App />
      </AdsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
