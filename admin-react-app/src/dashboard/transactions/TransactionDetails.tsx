import { Link, useParams } from "react-router";

import DownloadIcon from "../../icons/DownloadIcon";
import RecycleIcon from "../../icons/RecycleIcon";
import ShareIcon from "../../icons/ShareIcon";
import TriangleWarningIcon from "../../icons/TriangleWarningIcon";
import {
  networkClassNames,
  transactions,
  TransactionStatus,
  type TransactionRecord,
} from "../../utils/data";
import SphereIcon from "../../icons/SphereIcon";
import CheckmarkCircleIcon from "../../icons/CheckmarkCircleIcon";

const cardClass =
  "rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_1px_rgb(0_0_0_/_5%)]";
const labelClass = "text-xs text-[var(--muted)]";

const statusClassNames = {
  [TransactionStatus.FAILED]: "bg-[#fef2f2] text-[#ef4444]",
  [TransactionStatus.PENDING]: "bg-[#fff7ed] text-[#f59e0b]",
  [TransactionStatus.SUCCESS]: "bg-[#f0fdf4] text-[#22c55e]",
};

interface TransactionHeaderProps {
  transaction: TransactionRecord;
}

function TransactionHeader({ transaction }: TransactionHeaderProps) {
  return (
    <header className="flex items-end justify-between gap-6 max-[680px]:items-start max-[680px]:flex-col">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs">
          <Link
            className="text-[var(--placeholder)]"
            to="/dashboard/transactions"
          >
            Transactions
          </Link>
          <span className="text-[var(--placeholder)]">/</span>
          <span className="font-medium text-[var(--text)]">
            {transaction.id}
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-[#111827]">
          Transaction Detail
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 rounded-lg bg-[var(--button)] px-4 py-2 text-sm font-semibold text-[var(--button-text)]">
          <DownloadIcon /> Download Receipt
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[#4b5563]">
          <ShareIcon /> Share
        </button>
      </div>
    </header>
  );
}

function TransactionInfo({ transaction }: { transaction: TransactionRecord }) {
  const statusLabel =
    transaction.status === TransactionStatus.SUCCESS
      ? "Successful"
      : transaction.status;

  return (
    <section className={`${cardClass} overflow-hidden`}>
      <div className="flex flex-col items-center border-b border-[var(--border)] bg-[#f9fafb]/50 p-8">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#f0fdf4] text-2xl text-[#22c55e]">
          <CheckmarkCircleIcon />
        </div>
        <h2 className="text-[28px] font-bold tracking-tight text-[#111827]">
          ₦{transaction.amount}
        </h2>
        <span
          className={`mt-2 flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.05em] ${statusClassNames[transaction.status]}`}
        >
          <span className="size-2 rounded-full bg-current" /> {statusLabel}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 p-8 max-[680px]:grid-cols-1 max-[680px]:p-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--placeholder)]">
            Sender Information
          </h3>
          <div>
            <p className="text-base font-semibold text-[#111827]">
              Oluwaseun Ajayi
            </p>
            <p className="text-sm text-[var(--muted)]">
              0123456789 · Tatum Bank
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--placeholder)]">
            Recipient Information
          </h3>
          <div>
            <p className="text-base font-semibold text-[#111827]">
              {transaction.phone}
            </p>
            <p className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <span
                className={`rounded border border-[#fecaca] bg-[#fee2e2] px-2 py-0.5 text-[10px] font-bold uppercase text-[#dc2626] ${networkClassNames[transaction.network]}`}
              >
                {transaction.network}
              </span>
              Airtime Purchase
            </p>
          </div>
        </div>
        <div className="col-span-2 border-t border-[var(--border)] pt-8 max-[680px]:col-span-1">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--placeholder)]">
            Transaction Details
          </h3>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <dt className={labelClass}>Date &amp; Time</dt>
              <dd className="mt-1 text-sm font-medium text-[#111827]">
                27 May 2024, 10:28 AM
              </dd>
            </div>
            <div className="text-right">
              <dt className={labelClass}>Channel</dt>
              <dd className="mt-1 text-sm font-medium text-[#111827]">
                Mobile App
              </dd>
            </div>
            <div>
              <dt className={labelClass}>Reference ID</dt>
              <dd className="mt-1 font-mono text-sm text-[#111827]">
                TAT-AIR-240527-012464
              </dd>
            </div>
            <div className="text-right">
              <dt className={labelClass}>Session ID</dt>
              <dd className="mt-1 break-all font-mono text-sm text-[#111827]">
                99923456789012345678901234
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--border)] bg-[#f9fafb]/30 p-8 max-[680px]:items-start max-[680px]:gap-4 max-[680px]:p-6">
        <span className="text-xs text-[var(--placeholder)]">
          Having issues with this transaction?
        </span>
        <button className="flex items-center gap-2 text-sm font-bold text-[#ef4444]">
          <TriangleWarningIcon /> Report an Issue
        </button>
      </div>
    </section>
  );
}

function AccountSummary() {
  return (
    <section className={`${cardClass} p-6`}>
      <h2 className="mb-4 text-sm font-bold text-[#111827]">Account Summary</h2>
      <dl className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <dt className={labelClass}>Initial Balance</dt>
          <dd className="text-sm font-medium text-[#111827]">₦45,000.00</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className={labelClass}>Transaction Amount</dt>
          <dd className="text-sm font-bold text-[#ef4444]">- ₦5,000.00</dd>
        </div>
        <div className="flex items-center justify-between border-t border-dashed border-[var(--border)] pt-4">
          <dt className="text-xs font-bold text-[#111827]">New Balance</dt>
          <dd className="text-base font-bold text-[#111827]">₦40,000.00</dd>
        </div>
      </dl>
    </section>
  );
}

function QuickActions() {
  return (
    <section className={`${cardClass} p-6`}>
      <h2 className="mb-4 text-sm font-bold text-[#111827]">Quick Actions</h2>
      <div className="flex flex-col gap-3">
        <button className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[#f9fafb] p-3 text-left">
          <span className="flex size-8 items-center justify-center rounded border border-[var(--border)] bg-[var(--surface)]">
            <RecycleIcon />
          </span>
          <span>
            <strong className="block text-xs text-[#111827]">
              Initiate Reversal
            </strong>
            <small className="block text-[10px] text-[var(--placeholder)]">
              Reverse this transaction
            </small>
          </span>
        </button>
        <button className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[#f9fafb] p-3 text-left">
          <span className="flex size-8 items-center justify-center rounded border border-[var(--border)] bg-[var(--surface)]">
            <SphereIcon />
          </span>
          <span>
            <strong className="block text-xs text-[#111827]">
              Flag Transaction
            </strong>
            <small className="block text-[10px] text-[var(--placeholder)]">
              Mark for manual review
            </small>
          </span>
        </button>
      </div>
    </section>
  );
}

function TransactionDetails() {
  const { transactionId } = useParams();
  const transaction =
    transactions.find((item) => item.id === transactionId) ?? transactions[0];

  return (
    <main className="flex flex-col gap-6">
      <TransactionHeader transaction={transaction} />
      <div className="grid grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] items-start gap-5 max-[900px]:grid-cols-1">
        <TransactionInfo transaction={transaction} />
        <div className="flex flex-col gap-6">
          <AccountSummary />
          <QuickActions />
        </div>
      </div>
    </main>
  );
}

export default TransactionDetails;
