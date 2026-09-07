import { useMemo, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import DownloadIcon from "../../../icons/DownloadIcon";
import FilterIcon from "../../../icons/FilterIcon";
import SearchIcon from "../../../icons/SearchIcon";
import type { SearchQueryState } from "../types";
import VerticalArrowsIcon from "../../../icons/VerticalArrowsIcon";
import { users, type UserRecord, type UserStatus } from "../../../utils/data";
import PlusIcon from "../../../icons/PlusIcon";

const userTableHeaders = [
  "User",
  "Email Address",
  "Role",
  "Status",
  "Last Login",
  "Actions",
];
const paginationItems = ["«", "‹", "1", "2", "3", "4", "5", "›", "»"];
const statusClassNames: Record<UserStatus, string> = {
  active: "bg-[#e6f4ea] text-[#039855]",
  inactive: "bg-[#fff4e5] text-[#b76e00]",
  suspended: "bg-[#fee4e2] text-[#d92d20]",
};

function SearchAndFilterUsers({
  query,
  updateQuery,
  onAddUser,
}: Pick<SearchQueryState, "query" | "updateQuery"> & {
  onAddUser: () => void;
}) {
  const [filtersVisible, setFiltersVisible] = useState(true);

  if (!filtersVisible) {
    return (
      <button
        className="self-end text-sm font-semibold text-[var(--text)]"
        type="button"
        onClick={() => setFiltersVisible(true)}
      >
        Show Filters <ChevronDownIcon className="ml-1 inline-block size-2.5" />
      </button>
    );
  }

  return (
    <section className="flex flex-col gap-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_1px_1px_rgb(0_0_0_/_5%)] max-[680px]:p-4">
      <div className="flex items-center justify-between text-base font-bold text-[#0f172a]">
        <h2>Search &amp; Filter Users</h2>
        <button
          className="text-sm font-semibold text-[#0f172a]"
          type="button"
          onClick={() => setFiltersVisible(false)}
        >
          Hide Filters{" "}
          <ChevronDownIcon className="ml-1 inline-block size-2.5 rotate-180" />
        </button>
      </div>
      <div className="flex items-center gap-4 max-[680px]:flex-col">
        <label className="relative flex-1 max-[680px]:w-full">
          <span className="sr-only">Search users</span>
          <SearchIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#64748b]" />
          <input
            className="h-[46px] w-full rounded-lg border border-[var(--border)] px-4 pl-11 text-sm text-[var(--muted)] outline-0"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
            placeholder="Search by name, email or user ID..."
          />
        </label>
        <button
          className="flex h-[46px] w-48 items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold text-[#374151] max-[680px]:w-full"
          type="button"
        >
          <span className="flex items-center gap-3">
            <FilterIcon className="size-3.5 text-[var(--placeholder)]" />
            Filter
          </span>
          <ChevronDownIcon className="size-2.5 text-[var(--placeholder)]" />
        </button>
        <button
          className="cursor-pointer flex h-[46px] items-center gap-2 rounded-lg bg-[#facc15] px-8 text-sm font-bold text-[#0f172a] max-[680px]:w-full max-[680px]:justify-center"
          type="button"
          onClick={onAddUser}
        >
          <PlusIcon /> Add New User
        </button>
      </div>
    </section>
  );
}

function UserRow({ user }: { user: UserRecord }) {
  return (
    <tr className="border-b border-[#ebecf0] last:border-0 hover:bg-[var(--bg)]">
      <td className="ps-6 pe-8 py-4">
        <div className="flex items-center gap-3">
          <img
            className="size-8 rounded-full object-cover"
            src={user.avatar}
            alt=""
          />
          <div>
            <strong
              className="block max-w-[120px] truncate whitespace-nowrap text-sm font-semibold text-[#0f172a]"
              title={user.name}
            >
              {user.name}
            </strong>
            <span className="block text-xs text-[var(--muted)]">{user.id}</span>
          </div>
        </div>
      </td>
      <td className="max-w-[240px] px-4 py-4 text-sm text-[var(--muted)]">
        <span className="block truncate whitespace-nowrap" title={user.email}>
          {user.email}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-[#0f172a]">
        {user.role}
      </td>
      <td className="px-4 py-4">
        <span
          className={`rounded px-2 py-1 text-[10px] font-bold capitalize ${statusClassNames[user.status]}`}
        >
          {user.status}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-sm text-[var(--muted)]">
        {user.lastLogin}
      </td>
      <td className="px-4 py-4 text-right">
        <button
          className="flex size-10 items-center justify-center rounded-full bg-[#f9fbfc] text-[#475569]"
          type="button"
          aria-label={`Open actions for ${user.name}`}
        >
          <ChevronDownIcon className="size-3 rotate-90" />
        </button>
      </td>
    </tr>
  );
}

interface UserListProps extends Pick<SearchQueryState, "page" | "setPage"> {
  userList: UserRecord[];
  onExport: () => void;
}

function UserList({ userList, onExport, page, setPage }: UserListProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_2px_rgb(0_0_0_/_5%)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] p-6">
        <h2 className="text-base font-medium text-[#0f172a]">
          User List ({userList.length === users.length ? 48 : userList.length})
        </h2>
        <button
          className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[#0f172a]"
          type="button"
          onClick={onExport}
        >
          <DownloadIcon className="text-[#64748B]" />
          Export
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead className="bg-[#f8f9fb] text-[11px] font-bold uppercase tracking-[0.05em] text-[#64748b]">
            <tr>
              {userTableHeaders.map((heading) => (
                <th className="px-6 py-4" key={heading}>
                  {heading}
                  {heading === "User" && (
                    <VerticalArrowsIcon className="ml-2 inline-block" />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--border)] px-6 py-5 text-xs text-[var(--muted)] max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-4">
        <span>Showing 1 to {userList.length} of 48 users</span>
        <div className="flex items-center gap-2">
          <span className="mr-2 rounded-lg bg-[#f1f5f9] px-4 py-2 text-[#374151]">
            10 per page
          </span>
          {paginationItems.map((item) => (
            <button
              key={item}
              className={`h-7 min-w-6 cursor-pointer rounded-lg border px-1 text-[11px] ${page.toString() === item ? "border-[var(--button)] bg-[var(--button)] text-[var(--button-text)]" : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]"}`}
              onClick={() => setPage(Number(item))}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Users() {
  const navigate = useNavigate();
  const { query, updateQuery, page, setPage } =
    useOutletContext<SearchQueryState>();

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        `${user.name} ${user.email} ${user.id}`
          .toLowerCase()
          .includes(query.toLowerCase().trim()),
      ),
    [query],
  );

  const exportUsers = () => {
    const csv = [
      "Name,User ID,Email,Role,Status,Last Login",
      ...filteredUsers.map((user) =>
        [
          user.name,
          user.id,
          user.email,
          user.role,
          user.status,
          user.lastLogin,
        ].join(","),
      ),
    ].join("\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    link.download = "users.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <main className="flex flex-col gap-6">
      <SearchAndFilterUsers
        query={query}
        updateQuery={updateQuery}
        onAddUser={() => navigate("/dashboard/users/invite")}
      />
      <UserList
        userList={filteredUsers}
        onExport={exportUsers}
        page={page}
        setPage={setPage}
      />
    </main>
  );
}

export default Users;
