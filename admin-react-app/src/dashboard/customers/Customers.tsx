import { useMemo, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

import { assets, KycStatus } from "../../utils/data";
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import FilterIcon from "../../icons/FilterIcon";
import SearchIcon from "../../icons/SearchIcon";
import VerticalArrowsIcon from "../../icons/VerticalArrowsIcon";
import { customers, type Customer } from "../../utils/data";
import DownloadIcon from "../../icons/DownloadIcon";
import type { SearchQueryState } from "../types";

const kycStatusClassNames = {
  [KycStatus.UNVERIFIED]: "bg-[#fee4e2] text-[#d92d20]",
  [KycStatus.PENDING]: "bg-[#fff4e5] text-[#b76e00]",
  [KycStatus.VERIFIED]: "bg-[#e6f4ea] text-[#039855]",
};

function SearchAndFilterCustomers({
  query,
  updateQuery,
}: Pick<SearchQueryState, "query" | "updateQuery">) {
  const [filtersVisible, setFiltersVisible] = useState(true);

  if (filtersVisible) {
    return (
      <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_1px_1px_rgb(0_0_0_/_5%)] max-[680px]:p-4">
        <div className="mb-6 flex items-center justify-between gap-5 text-[13px]">
          <strong>Search &amp; Filter Customers</strong>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center gap-2 border-0 bg-transparent text-xs text-[var(--text)]"
            onClick={() => setFiltersVisible(false)}
          >
            Hide Filters
            <ChevronDownIcon
              width={10}
              height={10}
              className="rotate-180 text-[#0F172A]"
            />
          </button>
        </div>
        <div className="flex items-stretch justify-between gap-5 max-[680px]:flex-col">
          <label className="relative w-[444px] max-[680px]:w-full">
            <SearchIcon className="absolute left-3.5 top-3.5 text-[18px] text-[#64748B]" />
            <input
              className="h-[46px] w-full rounded-lg border border-[var(--border)] px-4 pl-11 text-[11px] text-[var(--muted)] outline-0"
              id="filter-search"
              name="filter-search"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Search by name, phone, email or customer ID..."
            />
          </label>
          <button
            type="button"
            className="flex h-[46px] w-[158px] cursor-pointer items-center justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 text-xs font-semibold text-[#374151] max-[680px]:h-[42px]"
          >
            <span className="mr-auto flex gap-3">
              <FilterIcon className="text-[var(--placeholder)]" />
              Filter
            </span>
            <ChevronDownIcon className="text-[var(--placeholder)]" />
          </button>
        </div>
      </section>
    );
  }
  return (
    <button
      className="mt-[-12px] inline-flex cursor-pointer items-center justify-center gap-2 self-end border-0 bg-transparent text-xs text-[var(--text)]"
      type="button"
      onClick={() => setFiltersVisible(true)}
    >
      Show Filters
      <ChevronDownIcon width={10} height={10} className="text-[#0F172A]" />
    </button>
  );
}

function CustomerRow({ customer }: { customer: Customer }) {
  const navigate = useNavigate();
  const customerPath = `/dashboard/customers/${encodeURIComponent(customer.id)}`;

  return (
    <tr
      className="cursor-pointer border-b border-[#f1f5f9] hover:bg-[var(--bg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button)]"
      onClick={() => navigate(customerPath)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigate(customerPath);
        }
      }}
      tabIndex={0}
    >
      <td className="h-[72px] whitespace-nowrap px-4 pl-6 text-[var(--text)]">
        <div className="flex items-center gap-3">
          <img
            className="size-8 rounded-full object-cover"
            src={assets.avatars[customers.indexOf(customer)]}
            alt=""
          />
          <span className="font-bold text-[#2563eb]">{customer.id}</span>
        </div>
      </td>
      <td className="h-[72px] whitespace-nowrap px-4 text-[var(--text)]">
        {customer.name}
      </td>
      <td className="h-[72px] whitespace-nowrap px-4 text-[var(--text)]">
        {customer.phone}
      </td>
      <td className="h-[72px] whitespace-nowrap px-4 text-[var(--muted)]">
        {customer.email}
      </td>
      <td className="h-[72px] whitespace-nowrap px-4 text-[var(--text)]">
        <span
          className={`rounded px-2 py-[3px] text-[9px] font-bold capitalize ${
            kycStatusClassNames[customer.kycStatus]
          }`}
        >
          {customer.kycStatus}
        </span>
      </td>
      <td className="h-[72px] whitespace-nowrap px-4 text-[var(--muted)]">
        {customer.dateRegistered}
      </td>
      <td className="h-[72px] whitespace-nowrap px-4 text-[var(--text)]">
        <button
          className="cursor-pointer border-0 bg-transparent text-sm tracking-[2px] text-[var(--muted)]"
          aria-label={`Actions for ${customer.name}`}
          onClick={(event) => event.stopPropagation()}
        >
          •••
        </button>
      </td>
    </tr>
  );
}

function Customers() {
  const { query, updateQuery, page, setPage } =
    useOutletContext<SearchQueryState>();

  const filteredCustomers = useMemo(
    () =>
      customers.filter((customer) =>
        Object.values(customer)
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase().trim()),
      ),
    [query],
  );

  const exportCustomers = () => {
    const csv = [
      "Customer ID,Full Name,Contact,Email Address,KYC Status,Date Registered",
      ...filteredCustomers.map((customer) => Object.values(customer).join(",")),
    ].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const link = document.createElement("a");

    link.href = url;
    link.download = "customers.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <SearchAndFilterCustomers query={query} updateQuery={updateQuery} />

      <section className="min-h-max overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_1px_rgb(0_0_0_/_5%)]">
        <div className="flex min-h-[72px] items-center justify-between border-b border-[var(--border)] px-6 py-6 text-[13px]">
          <strong>
            Customer List{" "}
            <span className="font-normal text-[var(--muted)]">
              (
              {filteredCustomers.length === customers.length
                ? "2,458"
                : filteredCustomers.length}
              )
            </span>
          </strong>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-3 border-0 rounded-lg bg-[var(--button)] px-4 py-2 font-inherit text-xs font-semibold text-[var(--button-text)]"
            onClick={exportCustomers}
          >
            <DownloadIcon className="text-[#00070E]" />
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-[#f1f5f9]">
                <th className="h-12 whitespace-nowrap bg-[var(--bg)] px-4 pl-6 text-left text-[9px] uppercase tracking-[0.08em] text-[var(--muted)]">
                  <span className="flex items-center gap-2">
                    Customer ID
                    <VerticalArrowsIcon />
                  </span>
                </th>
                {[
                  "Full Name",
                  "Contact",
                  "Email Address",
                  "KYC Status",
                  "Date Registered",
                  "Actions",
                ].map((heading) => (
                  <th
                    className="h-12 whitespace-nowrap bg-[var(--bg)] px-4 text-left text-[9px] uppercase tracking-[0.08em] text-[var(--muted)]"
                    key={heading}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <CustomerRow key={customer.id} customer={customer} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex min-h-[58px] items-center justify-between px-4 text-[11px] text-[var(--muted)] max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-2.5 max-[680px]:py-3.5">
          <span>
            Showing 1 to {filteredCustomers.length} of 2,458 customers
          </span>
          <div className="flex items-center gap-1">
            <label className="flex h-7 w-[92px] items-center justify-around rounded-lg bg-[#f1f5f9] text-[11px]">
              10 per page
            </label>
            {["«", "‹", "1", "2", "3", "4", "5", "246", "›", "»"].map(
              (item) => (
                <button
                  key={item}
                  className={`h-7 min-w-6 cursor-pointer rounded-lg border px-1 text-[11px] ${page.toString() === item ? "border-[var(--button)] bg-[var(--button)] text-[var(--button-text)]" : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]"}`}
                  onClick={() =>
                    ["1", "2", "3", "4", "5"].includes(item) &&
                    setPage(Number(item))
                  }
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Customers;
