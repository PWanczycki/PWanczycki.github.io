import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.tsx";
import ErrorPage from "./error-page.tsx";
import ProjectsList, {
  loader as projectsListLoader,
} from "./routes/ProjectsList.tsx";
import ProjectDetails, {
  loader as projectLoader,
} from "./routes/ProjectDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <ProjectsList />,
    loader: projectsListLoader,
    children: [
      {
        path: ":projectId",
        element: <ProjectDetails />,
        loader: projectLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
