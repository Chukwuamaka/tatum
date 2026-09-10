import { createBrowserRouter } from "react-router";

import DashboardLayout from "./pages/dashboard/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: "<Login />",
  },
  {
    path: "/change-password",
    element: "<ChangePassword />",
  },
  {
    path: "/password-changed",
    element: "<PasswordChanged />",
  },
  {
    path: "/reset-password",
    element: "<ResetPassword />",
  },
  {
    path: "/check-your-email",
    element: "<CheckYourEmail />",
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
    ],
  },
]);

export default router;
