import { createBrowserRouter } from "react-router";

import DashboardLayout from "./dashboard/DashboardLayout";
import Customers from "./dashboard/customers/Customers";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "customers",
        element: <Customers />,
      },
    ],
  },
]);

export default router;
