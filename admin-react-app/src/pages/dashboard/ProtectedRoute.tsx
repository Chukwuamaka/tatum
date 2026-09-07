import { Navigate, Outlet } from "react-router";

import { hasValidSession } from "../../utils/session";

function ProtectedRoute() {
  return hasValidSession() ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
