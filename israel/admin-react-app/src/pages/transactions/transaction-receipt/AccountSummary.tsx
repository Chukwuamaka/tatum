const AccountSummary = () => {
  return (
    <div className="p-6 flex flex-col gap-4 rounded-xl border border-(--border) bg-(--page)">
      <h2 className="font-bold text-sm leading-5.25 text-[#111827]">
        Account Summary
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-xs leading-4.5 text-(--muted)">Initial Balance</p>
          <p className="font-medium text-sm leading-5.25 tracking-[0.39%] text-[#111827]">
            Initial Balance
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs leading-4.5 text-(--muted) tracking-[0.2%]">
            Transaction Amount
          </p>
          <p className="font-medium text-sm leading-5.25 tracking-[0.59%] text-[#EF4444]">
            - ₦5,000.00
          </p>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-dashed border-t-(--border)">
          <p className="font-bold text-xs leading-4.5 tracking-[0.78%] text-[#111827]">
            New Balance
          </p>
          <p className="font-bold text-base leading-6 tracking-[0.29%] text-[#111827]">
            ₦40,000.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
