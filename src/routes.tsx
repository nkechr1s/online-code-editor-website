import { createBrowserRouter } from "react-router-dom";
import { Home } from "src/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
