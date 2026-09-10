import { createBrowserRouter } from "react-router"

import Login from "../pages/login/Login"
import ChangePassword from "../pages/change-password/ChangePassword";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/change-password',
        element: <ChangePassword />
    }
])

export default routes;