import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Help from "../Pages/Help";
import Projects from "../Pages/Projects";
import Settings from "../Pages/Settings";
import Tasks from "../Pages/Tasks";
import Layout from "../Layout/Layout";
import AddProject from "../Pages/AddProject";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/add-project",
        element: <AddProject />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);
