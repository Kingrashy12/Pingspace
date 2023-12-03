/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Router } from "@solidjs/router";
import { ToastProvider } from "./libs/components/ToastContainer";
import { AuthProvider } from "./state/auth";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <ToastProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ToastProvider>
    </Router>
  ),
  root
);
