import { useState } from "react";
import { useNavigate } from "react-router";

import ChevronDownIcon from "../../icons/ChevronDownIcon";
import DoubleChevronLeftIcon from "../../icons/DoubleChevronLeftIcon";
import InfoCircleIcon from "../../icons/InfoCircleIcon";
import DownloadIcon from "../../icons/DownloadIcon";
import SearchIcon from "../../icons/SearchIcon";

const inputClass =
  "h-[46px] w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none placeholder:text-[var(--placeholder)] focus:border-[#94a3b8] focus:ring-2 focus:ring-[#dbeafe]";

interface InviteFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

function InviteField({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}: InviteFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-[#0f172a]">{label}</span>
      <input
        className={inputClass}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required
      />
    </label>
  );
}

function DepartmentField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-[#0f172a]">Department</span>
      <span className="relative">
        <select
          className={`${inputClass} appearance-none pr-10`}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required
        >
          <option value="">Select Department</option>
          <option value="operations">Operations</option>
          <option value="support">Customer Support</option>
          <option value="finance">Finance</option>
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-2.5 -translate-y-1/2 text-[#94a3b8]" />
      </span>
    </label>
  );
}

function InvitationNotice() {
  return (
    <div className="flex gap-3 rounded-lg border border-[#ebecf0] bg-[#f8f9fb] p-4 text-[13px] leading-[21px] text-[#64748b]">
      <DownloadIcon className="mt-0.5 w-3 h-4 shrink-0 text-[#64748b]" />
      <p>
        An invitation link will be sent to the user&apos;s email address. They
        will be required to set up their password and complete their profile
        within 48 hours.
      </p>
    </div>
  );
}

function ImportantNote() {
  return (
    <aside className="flex max-w-[800px] gap-4 rounded-lg border border-[#dbeafe] bg-[#eff6ff] px-4 py-6 text-[#1d4ed8]">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#bfdbfe] bg-[var(--surface)]">
        <InfoCircleIcon />
      </span>
      <div className="flex flex-col gap-1 text-sm leading-5">
        <h2 className="font-bold text-[#1e3a8a]">Important Note</h2>
        <p>
          Invited users will receive an email with instructions to set their
          password and complete their profile registration. Invitations expire
          after 48 hours.
        </p>
      </div>
    </aside>
  );
}

function InviteUser() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [sent, setSent] = useState(false);

  const submitInvitation = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="flex flex-col gap-8">
      <form
        className="w-full max-w-[800px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_2px_rgb(0_0_0_/_5%)]"
        onSubmit={submitInvitation}
      >
        <header className="flex items-center gap-3 border-b border-[var(--border)] p-6">
          <button
            className="cursor-pointer rounded-full p-2 text-[#64748b]"
            type="button"
            aria-label="Back to users"
            onClick={() => navigate("/dashboard/users")}
          >
            <DoubleChevronLeftIcon />
          </button>
          <h1 className="text-lg font-bold text-[#0f172a]">Invite New User</h1>
        </header>
        <div className="flex flex-col gap-6 p-8 max-[680px]:p-5">
          <div className="grid grid-cols-2 gap-6 max-[680px]:grid-cols-1">
            <InviteField
              label="Full Name"
              name="fullName"
              placeholder="Enter full name"
              value={fullName}
              onChange={setFullName}
            />
            <InviteField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="e.g. +234 800 000 0000"
              value={phone}
              onChange={setPhone}
            />
            <InviteField
              label="Email Address"
              name="email"
              type="email"
              placeholder="e.g. name@tatumbank.com"
              value={email}
              onChange={setEmail}
            />
            <DepartmentField value={department} onChange={setDepartment} />
          </div>
          <InvitationNotice />
        </div>
        <footer className="flex items-center justify-end gap-4 border-t border-[var(--border)] bg-[#f9fbfc] p-6 max-[680px]:flex-col-reverse">
          <button
            className="cursor-pointer h-[46px] rounded-lg border border-[var(--border)] bg-[var(--surface)] px-8 text-sm font-bold text-[#0f172a] max-[680px]:w-full"
            type="button"
            onClick={() => navigate("/dashboard/users")}
          >
            Cancel
          </button>
          <button
            className="cursor-pointer flex h-[46px] items-center justify-center gap-2 rounded-lg bg-[#facc15] px-8 text-sm font-bold text-[#0f172a] max-[680px]:w-full"
            type="submit"
          >
            <SearchIcon className="text-[#0f172a]" />
            Send Invitation
          </button>
        </footer>
      </form>
      <ImportantNote />
      {sent && (
        <p className="text-sm font-semibold text-[#15803d]">
          Invitation ready to send to {email}.
        </p>
      )}
    </main>
  );
}

export default InviteUser;
