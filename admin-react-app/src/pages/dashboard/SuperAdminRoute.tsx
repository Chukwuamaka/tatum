import { Navigate, Outlet, useOutletContext } from "react-router";

import { isSuperAdmin } from "../../utils/auth";
import type { SearchQueryState } from "./types";

function SuperAdminRoute() {
  const context = useOutletContext<SearchQueryState>();

  return isSuperAdmin() ? (
    <Outlet context={context} />
  ) : (
    <Navigate to="/dashboard/customers" replace />
  );
}

export default SuperAdminRoute;
