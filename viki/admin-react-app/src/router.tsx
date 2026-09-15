import { createBrowserRouter } from "react-router";

import Login from "./pages/login/Login";
import PasswordChanged from "./pages/password-changed/PasswordChanged";
import ChangePassword from "./pages/change-password/ChangePassword";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import MyprofileCard from "./pages/dashboard/myprofile/MyprofileCard";

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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    handle: {
      title: "Dashboard",
      description: "View an overview of your banking operations.",
    },

    children: [
      {
        path: "customers",
        element: "",
        handle: {
          title: "Customer Directory",
          description: "Search and manage customers.",
          searchPlaceholder: "Search by name, phone, email or customer ID...",
        },
      },
      {
        path: "profile",
        element: <MyprofileCard />,
        handle: {
          title: "My Profile",
          description: "",
        },
      },
    ],
  },
]);

export default router;
