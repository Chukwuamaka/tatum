import { createBrowserRouter } from "react-router";

import Login from "./pages/login/Login";
import ChangePassword from "./pages/change-password/ChangePassword";
import PasswordChanged from "./pages/password-changed/PasswordChanged";
import ResetPassword from "./pages/reset-password/ResetPassword";
import CheckYourEmail from "./pages/check-your-email/CheckYourEmail";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Customers from "./pages/dashboard/customers/Customers";
import Customer from "./pages/dashboard/customers/Customer";
import Transactions from "./pages/dashboard/transactions/Transactions";
import TransactionDetails from "./pages/dashboard/transactions/TransactionDetails";
import Profile from "./pages/dashboard/profile/Profile";
import EditProfile from "./pages/dashboard/profile/EditProfile";
import Users from "./pages/dashboard/users/Users";
import InviteUser from "./pages/dashboard/users/InviteUser";

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
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/check-your-email",
    element: <CheckYourEmail />,
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
      {
        path: "users",
        element: <Users />,
        handle: {
          title: "User Management",
          description: "Manage system users, roles, and permissions.",
          searchPlaceholder: "Search by name, email or user ID...",
        },
      },
      {
        path: "users/invite",
        element: <InviteUser />,
        handle: {
          title: "User Management",
          description: "Manage system users, roles, and permissions.",
          searchPlaceholder: "Search by name, email or user ID...",
        },
      },
    ],
  },
]);

export default router;
