import { useMemo, useState } from "react";
import { Link, useOutletContext } from "react-router";

import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import DownloadIcon from "../../../icons/DownloadIcon";
import FilterIcon from "../../../icons/FilterIcon";
import SearchIcon from "../../../icons/SearchIcon";
import VerticalArrowsIcon from "../../../icons/VerticalArrowsIcon";
import {
  networkClassNames,
  transactions,
  transactionStatusClassNames,
  type TransactionRecord,
} from "../../../utils/data";
import type { SearchQueryState } from "../types";

const transactionsTableHeaders = [
  "Transaction ID",
  "Date & Time",
  "Phone Number",
  "Network",
  "Amount(₦)",
  "Status",
  "Customer Name",
  "Actions",
];

function SearchAndFilterTransactions({
  query,
  updateQuery,
}: Pick<SearchQueryState, "query" | "updateQuery">) {
  return (
    <section className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_1px_1px_rgb(0_0_0_/_5%)] max-[680px]:flex-col">
      <label className="relative flex-1">
        <span className="sr-only">Search transactions</span>
        <SearchIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--placeholder)]" />
        <input
          className="h-[46px] w-full rounded-lg border border-[var(--border)] px-4 pl-11 text-sm text-[var(--muted)] outline-0"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
          placeholder="Search transactions by reference, phone number or name..."
        />
      </label>
      <button className="flex h-[46px] w-[158px] items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 text-sm font-semibold text-[#374151] max-[680px]:w-full">
        <span className="flex items-center gap-3">
          <FilterIcon className="size-3.5 text-[var(--placeholder)]" />
          Filter
        </span>
        <ChevronDownIcon className="size-2.5 text-[var(--placeholder)]" />
      </button>
    </section>
  );
}

interface TransactionRowProps {
  transaction: TransactionRecord;
  selected: boolean;
  onSelect: (checked: boolean) => void;
}

function TransactionRow({
  transaction,
  selected,
  onSelect,
}: TransactionRowProps) {
  return (
    <tr className={selected ? "bg-[#eff8ff]" : "bg-[var(--surface)]"}>
      <td className="px-6 py-4">
        <input
          className="size-3.5 accent-[#2563eb]"
          type="checkbox"
          checked={selected}
          onChange={(event) => onSelect(event.target.checked)}
          aria-label={`Select ${transaction.id}`}
        />
      </td>
      <td className="px-4 py-4 text-xs font-semibold text-[#2563eb]">
        <Link
          className="text-[#2563eb] no-underline"
          to={`/dashboard/transactions/${transaction.id}`}
        >
          {transaction.id}
        </Link>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-xs text-[var(--muted)]">
        27 May 2024, 10:28 AM
      </td>
      <td className="px-4 py-4 text-xs text-[#4b5563]">{transaction.phone}</td>
      <td className="px-4 py-4 text-center">
        <span
          className={`rounded border px-2 py-0.5 text-[10px] font-bold uppercase ${networkClassNames[transaction.network]}`}
        >
          {transaction.network}
        </span>
      </td>
      <td className="px-4 py-4 text-right text-xs font-bold text-[#111827]">
        {transaction.amount}
      </td>
      <td className="px-4 py-4">
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-bold capitalize ${transactionStatusClassNames[transaction.status]}`}
        >
          {transaction.status}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-xs text-[var(--text)]">
        {transaction.customer}
      </td>
      <td className="px-4 py-4 text-center text-lg text-[var(--placeholder)]">
        ⋮
      </td>
    </tr>
  );
}

interface TransactionsProps {
  transactionsList: TransactionRecord[];
  selectedIds: string[];
  onSelect: (id: string, checked: boolean) => void;
}

function TransactionsList({
  transactionsList,
  selectedIds,
  onSelect,
}: TransactionsProps) {
  const allSelected =
    transactionsList.length > 0 &&
    transactionsList.every((item) => selectedIds.includes(item.id));

  return (
    <section className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_1px_rgb(0_0_0_/_5%)]">
      <div className="flex items-center justify-between border-b border-[#f3f4f6] p-6 max-[680px]:items-start max-[680px]:gap-4">
        <h2 className="text-base font-bold text-[#111827]">
          Transaction Results{" "}
          <span className="font-normal text-[var(--placeholder)]">(3,456)</span>
        </h2>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-[#f0fdf4] px-3 py-1.5 text-xs font-medium text-[#22c55e]">
            Auto refresh: On
          </span>
          <button className="flex items-center gap-2 rounded-md bg-[var(--button)] px-3 py-1.5 text-xs font-semibold text-[var(--button-text)]">
            <DownloadIcon /> Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] border-collapse text-left">
          <thead className="bg-[#f9fafb] text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--placeholder)]">
            <tr>
              <th className="px-6 py-4">
                <input
                  className="size-3.5 accent-[#2563eb]"
                  type="checkbox"
                  checked={allSelected}
                  onChange={(event) =>
                    transactionsList.forEach((item) =>
                      onSelect(item.id, event.target.checked),
                    )
                  }
                  aria-label="Select all transactions"
                />
              </th>
              {transactionsTableHeaders.map((heading, index) => (
                <th
                  className={`whitespace-nowrap px-4 py-4 ${heading === "Amount(₦)" ? "text-right" : heading === "Network" || heading === "Actions" ? "text-center" : ""}`}
                  key={heading}
                >
                  {heading}
                  {index === 1 && (
                    <VerticalArrowsIcon className="ml-1 inline-block" />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactionsList.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                selected={selectedIds.includes(transaction.id)}
                onSelect={(checked) => onSelect(transaction.id, checked)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-[#f3f4f6] px-5 py-4 text-[11px] text-[var(--muted)] max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-3">
        <span>
          Showing 1 to {transactionsList.length} of 3,456 transactions
        </span>
        <div className="flex items-center gap-1">
          <span className="mr-2">Rows per page</span>
          <button className="flex h-7 items-center gap-2 rounded border border-[var(--border)] bg-[var(--surface)] px-2">
            10 <ChevronDownIcon className="size-2.5" />
          </button>
          {["‹", "1", "2", "3", "4", "5", "…", "346", "›"].map((item) => (
            <button
              className={`size-7 rounded ${item === "1" ? "bg-[var(--button)] font-bold text-[var(--button-text)]" : "text-[var(--muted)]"}`}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Transactions() {
  const { query, updateQuery } = useOutletContext<SearchQueryState>();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const filteredTransactions = useMemo(
    () =>
      transactions.filter((transaction) =>
        `${transaction.id} ${transaction.phone} ${transaction.network}`
          .toLowerCase()
          .includes(query.toLowerCase().trim()),
      ),
    [query],
  );
  const updateSelection = (id: string, checked: boolean) =>
    setSelectedIds((current) =>
      checked
        ? [...new Set([...current, id])]
        : current.filter((item) => item !== id),
    );

  return (
    <main className="flex flex-col gap-6">
      <SearchAndFilterTransactions query={query} updateQuery={updateQuery} />
      <TransactionsList
        transactionsList={filteredTransactions}
        selectedIds={selectedIds}
        onSelect={updateSelection}
      />
    </main>
  );
}

export default Transactions;
