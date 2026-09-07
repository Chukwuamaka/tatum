import { useState } from "react";
import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const updateQuery = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <div className="flex h-[100dvh] overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <Sidebar />
      <main className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar query={query} updateQuery={updateQuery} />
        <div className="flex flex-col gap-6 overflow-y-auto p-8 max-[900px]:px-5 max-[680px]:p-4">
          <Outlet context={{ query, updateQuery, page, setPage }} />
        </div>
      </main>
    </div>
  );
}
