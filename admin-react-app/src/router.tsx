import { createBrowserRouter } from "react-router";

import DashboardLayout from "./dashboard/DashboardLayout";
import Customers from "./dashboard/customers/Customers";
import Customer from "./dashboard/customers/Customer";
import Transactions from "./dashboard/transactions/AirtimeTransactions";
import TransactionDetails from "./dashboard/transactions/TransactionDetails";
import Profile from "./dashboard/profile/Profile";
import EditProfile from "./dashboard/profile/EditProfile";

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
      {
        path: "transactions",
        element: <Transactions />,
        handle: {
          title: "Transaction Monitor",
          description: "Search, filter and identify airtime transactions.",
          searchPlaceholder: "Search by Transaction ID, Customer ID...",
        },
      },
      {
        path: "transactions/:transactionId",
        element: <TransactionDetails />,
        handle: {
          title: "Transaction Receipt",
          description: "View and manage transaction details.",
          searchPlaceholder: "Search by Transaction ID...",
        },
      },
      {
        path: "profile",
        element: <Profile />,
        handle: {
          title: "My Profile",
        },
      },
      {
        path: "profile/edit",
        element: <EditProfile />,
        handle: {
          title: "Edit Profile",
        },
      },
    ],
  },
]);

export default router;
