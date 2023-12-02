/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Router } from "@solidjs/router";
import { ToastProvider } from "./libs/components/ToastContainer";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Router>
  ),
  root
);
