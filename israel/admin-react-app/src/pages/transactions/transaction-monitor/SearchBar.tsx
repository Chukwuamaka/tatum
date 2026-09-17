import SearchIcon from "../../../icons/SearchIcon";
import FilterIcon from "../../../icons/FilterIcon";
import ChevronDownIcon from "../../../icons/ChevronDownIcon";

const SearchBar = () => {
  return (
    <div className="flex gap-4 p-4 border border-(--border) rounded-xl bg-(--surface)">
      <div className="py-3 px-4 flex gap-3 items-center border border-(--border) rounded-lg flex-1">
        <SearchIcon />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search transactions by reference, phone number or name..."
          className="flex-1 focus:outline-0 focus:border-0 text-sm"
        />
      </div>
      <div className="px-6 py-3 rounded-lg flex gap-10 items-center border border-(--border)">
        <div className="flex gap-3 items-center cursor-pointer">
          <FilterIcon />
          <p className="text-[#374151] font-semibold text-sm leading-5 tracking-[1.07%]">
            Filter
          </p>
        </div>
        <ChevronDownIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
