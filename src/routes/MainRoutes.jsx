import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../components/pages/homepage/Homepage";

import NotFound from "../components/static/NotFound";
import Signup from "../components/pages/signUp/Signup";
import SignIn from "../components/pages/signIn/SignIn";
import Products from "../components/pages/menu/Products";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/menu",
        element: <Products />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default MainRoutes;
