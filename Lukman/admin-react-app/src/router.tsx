import { createBrowserRouter } from "react-router";
import Login from "./Pages/login/Login";
import ChangePassword from "./Pages/change_password/Change_password";
import PasswordChanged from "./Pages/password_Change/password_change";

const router = createBrowserRouter([
    {
        path: "/",
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