import { createBrowserRouter } from "react-router";
import Login from "./pages/login/Login";
import ChangePassword from "./pages/change_password/Change_password";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import PasswordChanged from "./pages/change_password/Change_password";
import EditAdminProfile from "./pages/dashboard/EditAdminProfile";

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
        path: "edit-admin-profile",
        element: <EditAdminProfile />,
        handle: {
          title: "My Profile",
          description: "",
          searchPlaceholder: "Search anything...",
        },
      },
    ],
  },
]);

export default router;
