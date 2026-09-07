import { Link, useParams } from "react-router";

import DeleteIcon from "../../../icons/DeleteIcon";
import VerticalArrowsIcon from "../../../icons/VerticalArrowsIcon";
import {
  assets,
  customers,
  networkClassNames,
  transactions,
  transactionStatusClassNames,
  type CustomerRecord,
  type TransactionRecord,
} from "../../../utils/data";
import ChevronDownIcon from "../../../icons/ChevronDownIcon";

const cardClass =
  "rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_1px_rgb(0_0_0_/_5%)]";
const labelClass =
  "text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--muted)]";

interface ProfileSummaryProps {
  customer: CustomerRecord;
  avatar: string;
}

function ProfileSummary({ customer, avatar }: ProfileSummaryProps) {
  return (
    <section
      className={`${cardClass} flex flex-wrap items-center justify-between gap-6 p-6`}
    >
      <div className="flex items-center gap-6">
        <img
          className="size-20 rounded-full border-2 border-[#f1f5f9] object-cover"
          src={avatar}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-[var(--text)]">
              {customer.name}
            </h2>
            <span className="rounded-full bg-[#e6f4ea] px-3 py-1 text-xs font-bold text-[#039855]">
              Verified
            </span>
          </div>
          <span className="text-base font-semibold uppercase text-[#2563eb]">
            {customer.id}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-lg bg-[var(--button)] px-5 py-2.5 text-sm font-bold text-[var(--button-text)]">
          Edit Profile
        </button>
        <button className="rounded-lg border border-[#000b17] bg-[var(--surface)] px-5 py-2.5 text-sm font-bold text-[#00070e]">
          Freeze Account
        </button>
        <button
          className="flex size-[42px] items-center justify-center rounded-lg border border-[#dc2626] bg-[var(--surface)] text-[#dc2626]"
          aria-label="Delete customer"
        >
          <DeleteIcon />
        </button>
      </div>
    </section>
  );
}

interface InformationItemProps {
  label: string;
  value: string;
  emphasis?: boolean;
}

function InformationItem({
  label,
  value,
  emphasis = false,
}: InformationItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <dt className={labelClass}>{label}</dt>
      <dd
        className={
          emphasis
            ? "text-lg font-bold text-[var(--text)]"
            : "text-sm font-medium text-[var(--text)]"
        }
      >
        {value}
      </dd>
    </div>
  );
}

function PersonalInformation({ customer }: { customer: CustomerRecord }) {
  return (
    <section className={`${cardClass} flex-1 p-6`}>
      <h3 className="mb-6 text-base font-bold text-[var(--text)]">
        Personal Information
      </h3>
      <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
        <InformationItem label="Full Name" value={customer.name} />
        <InformationItem label="Email Address" value={customer.email} />
        <InformationItem label="Phone Number" value={customer.phone} />
        <InformationItem label="Date of Birth" value="14 Jul 1994" />
        <InformationItem label="Gender" value="Female" />
        <InformationItem
          label="Residential Address"
          value="12 Victoria Island, Lagos, Nigeria"
        />
      </dl>
    </section>
  );
}

function AccountInformation() {
  return (
    <section className={`${cardClass} flex-1 p-6`}>
      <h3 className="mb-6 text-base font-bold text-[var(--text)]">
        Account Information
      </h3>
      <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
        <InformationItem label="Account Number" value="2034889210" />
        <InformationItem label="Account Type" value="Savings" />
        <InformationItem
          label="Account Balance"
          value="₦1,250,400.00"
          emphasis
        />
        <div className="flex flex-col gap-1">
          <dt className={labelClass}>Account Status</dt>
          <dd>
            <span className="rounded bg-[#e6f4ea] px-2 py-1 text-[10px] font-bold uppercase text-[#039855]">
              Active
            </span>
          </dd>
        </div>
        <InformationItem label="Date Joined" value="12 Jan 2024" />
      </dl>
    </section>
  );
}

function TransactionRow({ transaction }: { transaction: TransactionRecord }) {
  return (
    <tr className="border-b border-[#f3f4f6] last:border-0">
      <td className="px-3 py-5 text-xs font-semibold text-[#0052cc]">
        {transaction.id}
      </td>
      <td className="px-3 py-5 text-xs text-[var(--muted)]">
        27 May 2024, 10:28 AM
      </td>
      <td className="px-3 py-5 text-xs text-[#4b5563]">{transaction.phone}</td>
      <td className="px-3 py-5 text-center">
        <span
          className={`rounded border px-2 py-0.5 text-[10px] font-bold uppercase ${networkClassNames[transaction.network]}`}
        >
          {transaction.network}
        </span>
      </td>
      <td className="px-3 py-5 text-right text-xs font-bold text-[#111827]">
        {transaction.amount}
      </td>
      <td className="px-3 py-5">
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] capitalize font-bold ${transactionStatusClassNames[transaction.status]}`}
        >
          {transaction.status}
        </span>
      </td>
      <td className="px-3 py-5 text-center text-lg text-[var(--placeholder)]">
        ⋮
      </td>
    </tr>
  );
}

function RecentTransactions() {
  return (
    <section className={`${cardClass} overflow-hidden`}>
      <div className="flex items-center justify-between border-b border-[var(--border)] p-6">
        <h3 className="text-base font-bold text-[var(--text)]">
          Recent Transactions
        </h3>
        <Link
          to="/dashboard/transactions"
          className="text-sm font-semibold text-[#2563eb]"
        >
          View All
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead className="bg-[#f9fafb] text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--placeholder)]">
            <tr>
              <th className="px-3 py-4">Transaction ID</th>
              <th className="px-3 py-4">
                Date &amp; Time{" "}
                <VerticalArrowsIcon className="ml-1 inline-block" />
              </th>
              <th className="px-3 py-4">Phone Number</th>
              <th className="px-3 py-4 text-center">Network</th>
              <th className="px-3 py-4 text-right">Amount(₦)</th>
              <th className="px-3 py-4">Status</th>
              <th className="px-3 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Customer() {
  const { customerId } = useParams();
  const decodedCustomerId = customerId ? decodeURIComponent(customerId) : "";
  const customer =
    customers.find((item) => item.id === decodedCustomerId) ?? customers[0];
  const avatar =
    assets.avatars[customers.indexOf(customer)] ?? assets.avatars[0];

  return (
    <main className="flex flex-col gap-6">
      <Link
        to="/dashboard/customers"
        className="flex items-center gap-2 text-sm font-semibold text-[var(--muted)]"
      >
        <ChevronDownIcon className="rotate-90" />
        <span>Back to Directory</span>
      </Link>
      <ProfileSummary customer={customer} avatar={avatar} />
      <div className="flex flex-col gap-6 lg:flex-row">
        <PersonalInformation customer={customer} />
        <AccountInformation />
      </div>
      <RecentTransactions />
    </main>
  );
}

export default Customer;
