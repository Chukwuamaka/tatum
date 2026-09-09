import { createBrowserRouter } from "react-router";
import Login from "./pages/login/Login.tsx";
import ChangePassword from "./pages/change-password/ChangePassword.tsx";
import PasswordChanged from "./pages/password-changed/PasswordChanged.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/password-changed",
    element: <PasswordChanged />,
  },
]);

export default router;