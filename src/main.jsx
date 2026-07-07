import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import AuthProvider from "./context/AuthContext";
import UserContext from "./context/UserContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <UserContext>
            <App />
            <ToastContainer />
          </UserContext>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);