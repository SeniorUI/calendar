import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { setDefaultOptions } from "date-fns";
import { enUS } from "date-fns/locale";

import "./tailwind.css";

setDefaultOptions({
  locale: enUS,
  weekStartsOn: 1,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
