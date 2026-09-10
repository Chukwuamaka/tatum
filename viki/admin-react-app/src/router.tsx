import { createBrowserRouter } from "react-router";
import Login from "./pages/login/Login";
import Password from "./pages/password/Password";
import ChangePass from "./pages/change-pass/change-pass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
   {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/change-pass",
    element: <ChangePass />,
  }
]);

export default router;