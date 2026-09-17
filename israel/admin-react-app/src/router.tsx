import { createBrowserRouter } from "react-router";
import Login from "./pages/login/Login";
import ChangePassword from "./pages/change-password/ChangePassword";
import PasswordChanged from "./pages/password-changed/PasswordChanged";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import TransactionReceipt from "./pages/transactions/transaction-receipt/TransactionReceipt";
import TransactionMonitor from "./pages/transactions/transaction-monitor/TransactionMonitor";

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
        path: "transactions/:transactionId",
        element: <TransactionReceipt />,
        handle: {
          title: "Transaction Receipt",
          description: "View and manage transaction details.",
          searchPlaceholder: "Search by Transaction ID...",
        },
      },
      {
        path: "transactions",
        element: <TransactionMonitor />,
        handle: {
          title: "Transaction Monitor",
          description: "Search, filter and identify airtime transactions.",
          searchPlaceholder: "Search by Transaction ID, Customer ID...",
        },
      },
    ],
  },
]);

export default router;
