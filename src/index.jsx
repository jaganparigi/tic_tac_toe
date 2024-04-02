// eslint-disable-next-line no-unused-vars
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Board from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board />
  </StrictMode>
);
