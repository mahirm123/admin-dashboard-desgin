import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import { router } from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    {" "}
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
