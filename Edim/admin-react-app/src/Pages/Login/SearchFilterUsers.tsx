import { useState } from "react";

import SearchIcon from "../../icons/SearchIcon.tsx";
import FilterIcon from "../../icons/FilterIcon.tsx";
// import ChevronUpIcon from "../../icons/ChevronUpIcon";
import ChevronDownIcon from "../../icons/ChevronDownIcon.tsx";
import PlusIcon from "../../icons/PlusIcon.tsx";
import Button from "./Button.tsx";
import Input from "./Input.tsx";
import UserList from "./UserList.tsx";

function SearchFilterUsers() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900">
            Search &amp; Filter Users
          </h2>
          <button
            type="button"
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
            {showFilters ? (
              <ChevronDownIcon className="w-3.5 h-3.5" />
            ) : (
              <ChevronDownIcon className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {showFilters && (
          <div className="flex items-center gap-3">
            <Input
              type="text"
              name="search"
              placeholder="Search by name, email or user ID..."
              leftIcon={<SearchIcon />}
              className="flex-1"
            />

            <Input
              type="text"
              name="filter"
              placeholder="Filter"
              leftIcon={<FilterIcon />}
              readOnly
              className="w-40 cursor-pointer"
            />

            <Button
              type="button"
              text="Add New User"
              leftIcon={<PlusIcon />}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2.5 rounded-md text-sm font-medium whitespace-nowrap"
            />
          </div>
        )}
      </div>

      <UserList />
    </div>
  );
}

export default SearchFilterUsers;
