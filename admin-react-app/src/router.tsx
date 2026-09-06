import { createBrowserRouter } from "react-router";

import DashboardLayout from "./dashboard/DashboardLayout";
import Customers from "./dashboard/customers/Customers";
import Customer from "./dashboard/customers/Customer";

const router = createBrowserRouter([
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
        element: <Customers />,
        handle: {
          title: "Customer Directory",
          description: "Search and manage customers.",
          searchPlaceholder: "Search by name, phone, email or customer ID...",
        },
      },
      {
        path: "customers/:customerId",
        element: <Customer />,
        handle: {
          title: "Customer Profile",
          description: "View and manage customer details.",
          searchPlaceholder: "Search by name, phone, email or customer ID...",
        },
      },
    ],
  },
]);

export default router;
