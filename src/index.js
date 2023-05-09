import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./pages/login";
import Aluno from "./pages/Aluno";
import Alunos from "./pages/Alunos";
import Register from "./pages/Register";
import Fotos from "./pages/Fotos";
import Erro from "./pages/404/index";
import Nav from "./components/Header/index";
import GlobalStyles from "./styles/GlobalStyles";
import MyRoute from "./routes/MyRoutes";
import store, { persistor } from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Alunos />} />
            <Route
              path="/aluno/:id/edit"
              element={
                <MyRoute>
                  <Aluno />
                </MyRoute>
              }
            />
            <Route
              path="/aluno/"
              element={
                <MyRoute>
                  <Aluno />
                </MyRoute>
              }
            />
            <Route
              path="/fotos/:id"
              element={
                <MyRoute>
                  <Fotos />
                </MyRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          className="toast__container"
          position="bottom-right"
          autoClose={2000}
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
