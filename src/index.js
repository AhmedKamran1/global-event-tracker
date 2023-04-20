import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EventDataProvider } from "./components/store/EventDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EventDataProvider>
    <App />
  </EventDataProvider>
);
