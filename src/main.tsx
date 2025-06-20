import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router.tsx";
import "./assets/css/tailwind.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
