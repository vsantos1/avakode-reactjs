import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { GlobalStyle } from "./styles/Global";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<Error />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
  // </React.StrictMode>
);
