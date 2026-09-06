import { assets } from "../utils/data";
import BellOutlineIcon from "../icons/BellOutlineIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import SearchIcon from "../icons/SearchIcon";
import type { SearchQueryState } from "./types";

function Topbar({
  query,
  updateQuery,
}: Pick<SearchQueryState, "query" | "updateQuery">) {
  return (
    <header className="flex min-h-20 shrink-0 items-center justify-between gap-6 border-b border-[var(--border)] bg-[var(--surface)] px-8 py-4 max-[900px]:px-5 max-[680px]:items-start max-[680px]:flex-col">
      <div className="flex items-center gap-4">
        <button
          className="cursor-pointer border-0 bg-transparent text-[var(--muted)]"
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <div>
          <h1 className="text-lg font-bold leading-7 text-[var(--text)]">
            Customer Directory
          </h1>
          <p className="text-xs text-[var(--muted)]">
            Search and manage customers.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8 max-[900px]:gap-3 max-[680px]:w-full">
        <label className="relative w-[274px] max-[900px]:w-[220px] max-[680px]:flex-1">
          <span className="sr-only">Search customers</span>
          <input
            className="w-full rounded-lg border-0 bg-[#f1f5f9] px-4 py-2.5 pr-9 text-[11px] text-[var(--muted)] outline-0"
            id="topbar-search"
            name="topbar-search"
            value={query}
            onChange={(event) => updateQuery?.(event.target.value)}
            placeholder="Search by name, phone, email or customer ID..."
          />
          <SearchIcon className="text-[#94A3B8] text-[18px] absolute right-3.5 top-2.5" />
        </label>
        <button
          className="relative cursor-pointer border-0 bg-transparent text-[var(--muted)]"
          aria-label="Notifications"
        >
          <BellOutlineIcon />
          <b className="absolute -right-2 -top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-[var(--surface)] bg-[#facc15] text-[8px] text-[#1a1a1a]">
            12
          </b>
        </button>
        <div className="flex items-center gap-3 border-l border-[var(--border)] pl-4">
          <img
            className="size-10 rounded-full object-cover"
            src={assets.avatar}
            alt=""
          />
          <span className="flex flex-col">
            <strong className="text-xs">John Doe</strong>
            <small className="text-[10px] text-[var(--muted)]">Admin</small>
          </span>
          <ChevronDownIcon className="text-[#94A3B8]" />
        </div>
      </div>
    </header>
  );
}

export default Topbar;
