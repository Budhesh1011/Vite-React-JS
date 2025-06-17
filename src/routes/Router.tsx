// src/router/index.js
import { createBrowserRouter } from "react-router-dom";
import {
  CalculatorPage,
  ChartPage,
  ErrorPage,
  FrameWorkPage,
  HomePage,
  LandingPage,
  ToDoPage,
  UserDataPage,
} from "../pages";
import MainLayout from "../components/layouts/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "home",
        element: <HomePage />,
        children: [],
      },
      {
        path: "list-of-framework",
        element: <FrameWorkPage />,
      },
      {
        path: "users-list",
        element: <UserDataPage />,
      },
      {
        path: "charts",
        element: <ChartPage />,
      },
      {
        path: "todo-list",
        element: <ToDoPage />,
      },
      {
        path: "calculator",
        element: <CalculatorPage />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
