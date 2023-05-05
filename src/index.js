import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./pages/login/login";
import Erro from "./pages/404/index";
import Nav from "./components/Header/index";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/home";
import MyRoute from "./routes/MyRoutes";
import store, { persistor } from "./store/index";
import Privada from "./pages/privada";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Erro />} />
            <Route
              path="/privada"
              element={
                <MyRoute>
                  <Privada />
                </MyRoute>
              }
            />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          className="toast__container"
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <GlobalStyles />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
