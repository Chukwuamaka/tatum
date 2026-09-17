import { createBrowserRouter } from "react-router";
import Login from "./Pages/Login/Login.tsx";
import ChangePassword from "./Pages/Login/Change-Password.tsx";
import CheckYourEmail from "./Pages/Login/Check-Your-Email.tsx";
import PasswordChanged from "./Pages/Login/Password-Changed";
import ResetPassword from "./Pages/Login/ResetPassword.tsx";
import DashboardLayout from "./Pages/dashboard/DashboardLayout.tsx";
import SearchFilterUsers from "./Pages/Login/Users.tsx";
import Users from "./Pages/Login/Invite.tsx";

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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    handle: {
      title: "Dashboard",
      description: "View an overview of your banking operations.",
    },
    children: [
      {
        path: "users/invite",
        element: <Users />,
        handle: {
          title: "User Management",
          description: "Search and filter users.",
          searchPlaceholder: "Search by name, email or user ID...",
        },
      },
      {
        path: "users",
        element: <SearchFilterUsers />,
        handle: {
          title: "User Management",
          description: "Search and filter users.",
          searchPlaceholder: "Search by name, email or user ID...",
        },
      },
    ],
  },
]);

export default router;
