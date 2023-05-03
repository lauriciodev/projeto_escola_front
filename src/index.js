import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Erro from "./pages/404/index";
import Nav from "./components/Header/index";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/home";
import MyRoute from "./routes/MyRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Erro />} />
        <Route
          path="/"
          element={
            <MyRoute>
              <Home />
            </MyRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);
