import { createBrowserRouter } from "react-router";
import Login from "./Pages/Login/Login.tsx";
import ChangePassword from "./Pages/Login/Change-Password.tsx";
import CheckYourEmail from "./Pages/Login/Check-Your-Email.tsx";
import PasswordChanged from "./Pages/Login/Password-Changed";
import ResetPassword from "./Pages/Login/ResetPassword.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "change-password",
    element: <ChangePassword />,
  },
  {
    path: "check-your-email",
    element: <CheckYourEmail />,
  },
  {
    path: "password-changed",
    element: <PasswordChanged />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
]);

export default router;
