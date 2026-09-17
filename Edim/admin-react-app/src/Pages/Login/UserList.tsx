// import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
// import ChevronRightIcon from "../../icons/ChevronRightIcon";
import DoubleChevronLeftIcon from "../../icons/DoubleChevronLeftIcon";
// import DoubleChevronRightIcon from "../../icons/DoubleChevronRightIcon";
import DownloadIcon from "../../icons/DownloadIcon";
import Button from "./Button";
// import { users, type UserStatus } from "../../utils/data";
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import { useEffect, useState } from "react";
import { getAllUsers, type AuthUser } from "../../api-clients/auth";
import Toast from "../../reusables/Toast";
import { formatDate, getFullName } from "../../utils/helpers";

type UserStatus = "active" | "inactive";

const userStatusClassNames: Record<UserStatus, string> = {
  active: "bg-[#e6f4ea] text-[#039855]",
  inactive: "bg-[#fff7ed] text-[#f59e0b]",
};

function StatusBadge({ status }: { status: UserStatus }) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium capitalize ${userStatusClassNames[status]}`}
    >
      {status}
    </span>
  );
}

function UserList() {
  const [users, setUsers] = useState<AuthUser[]>([]);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        console.log(users);
        const responseData = await getAllUsers();
        if (responseData.success) {
          setUsers(responseData.data?.items || []);
        } else {
          setToastMessage(responseData.message || "An error occured!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}

      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="flex items-center justify-between p-6">
          <h2 className="font-semibold text-gray-900">User List</h2>
          <Button
            type="button"
            text="Export"
            leftIcon={<DownloadIcon />}
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-t border-gray-200">
            <thead>
              <tr className="bg-gray-50 text-xs font-medium text-gray-500 uppercase">
                <th className="px-6 py-3">
                  <span className="inline-flex items-center gap-1">
                    User
                    <span aria-hidden="true">⇅</span>
                  </span>
                </th>
                <th className="px-6 py-3">Email Address</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Last Login</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {users.map((u) => (
                <tr key={u.id} className="text-sm hover:bg-gray-50">
                  <td className="px-6 py-4 flex items-center gap-3 truncate max-w-[300px]">
                    <img
                      src={u.profileImageUrl ?? "/default-avatar.png"}
                      alt={`${u.firstName} ${u.lastName}`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>
                      <span className="font-medium text-gray-900">
                        {getFullName(u.firstName, u.lastName)}
                      </span>
                      <span className="text-xs text-gray-400">{u.staffId}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-blue-600">{u.email}</td>
                  <td className="px-6 py-4 text-gray-700">{u.role}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={u.isActive ? "active" : "inactive"} />
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {formatDate(u.lastLoginAt, true)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      aria-label={`View ${u.firstName} ${u.lastName}`}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100"
                    >
                      <ChevronDownIcon className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Showing 1 to {users.length} of {users.length} users
          </p>

          <div className="flex items-center gap-2">
            <select className="text-sm border border-gray-300 rounded-md px-2.5 py-1.5 bg-gray-50 text-gray-700 focus:outline-none">
              <option>10 per page</option>
              <option>25 per page</option>
              <option>50 per page</option>
            </select>

            <nav className="flex items-center gap-1">
              <button
                type="button"
                aria-label="First page"
                className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100"
              >
                <DoubleChevronLeftIcon className="w-3 h-3" />
              </button>
              <button
                type="button"
                aria-label="Previous page"
                className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100"
              >
                <ChevronDownIcon className="w-3 h-3" />
              </button>

              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`w-7 h-7 rounded-md text-sm flex items-center justify-center ${
                    page === 1
                      ? "bg-yellow-400 text-gray-900 font-medium"
                      : "border border-gray-200 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                aria-label="Next page"
                className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100"
              >
                <ChevronDownIcon className="w-3 h-3" />
              </button>
              <button
                type="button"
                aria-label="Last page"
                className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100"
              >
                <DoubleChevronLeftIcon className="w-3 h-3" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
