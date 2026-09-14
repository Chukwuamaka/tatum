import { createBrowserRouter } from "react-router";
import Login from "./pages/login/Login";
import Password from "./pages/password/Password";
import ChangePassword from "./pages/change-pass/ChangePassword";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import MyprofileCard from "./pages/dashboard/myprofile/MyprofileCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
   {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
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
      path:"profile",
      element:<MyprofileCard />,
      handle:{
        title:"My Profile",
        description:"",
      },
    },
    ],
  },
  
]);

export default router;
