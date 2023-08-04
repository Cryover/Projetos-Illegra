import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../index.css";
import { CurriculoListContextProvider } from "./contexts/curriculoContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CurriculoListContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurriculoListContextProvider>
  </React.StrictMode>
);
