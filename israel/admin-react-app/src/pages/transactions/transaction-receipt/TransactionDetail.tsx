import type { TransactionData } from "../../../api-clients/transactions";
import CheckmarkCircleIcon from "../../../icons/CheckmarkCircleIcon";
import TriangleWarningIcon from "../../../icons/TriangleWarningIcon";
import { formatDate } from "../../../utils/helpers";

interface TransactionDataProps {
  transactionData: TransactionData;
}

const TransactionDetail = ({ transactionData }: TransactionDataProps) => {
  return (
    <div className="col-span-3 rounded-xl border border-(--border) bg-(--page)">
      <div className="p-8 flex flex-col items-center border-b border-b-[#E5E7EB]">
        <div
          className={`size-16 flex items-center justify-center rounded-full mb-4 ${transactionData.status === "Failed" ? "bg-[#FEF2F2]" : transactionData.status === "Pending" ? "bg-[#FFF7ED]" : "bg-[#F0FDF4]"}`}
        >
          {transactionData.status === "Successful" && <CheckmarkCircleIcon />}
        </div>
        <h1 className="text-[28px] leading-10.5 font-bold tracking-[0.2%]">
          {transactionData.amount.toFixed(2)}
        </h1>
        <div
          className={`mt-2 flex gap-2 py-1 px-3 rounded-full items-center ${transactionData.status === "Failed" ? "bg-[#FEF2F2] text-[#EF4444]" : transactionData.status === "Pending" ? "bg-[#FFF7ED] text-[#F59E0B]" : "bg-[#F0FDF4] text-[#22C55E]"}`}
        >
          <div
            className={`size-2 rounded-full ${transactionData.status === "Failed" ? "bg-[#EF4444]" : transactionData.status === "Pending" ? "bg-[#F59E0B]" : "bg-[#22C55E]"}`}
          ></div>
          <p className="uppercase text-xs font-bold leading-4.5 tracking-[0.6px] ">
            {transactionData.status}
          </p>
        </div>
      </div>
      <div className="p-8 flex flex-col gap-10">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-(--placeholder) text-xs leading-4.5 tracking-[1.2px]">
              Sender Information
            </h3>
            <div>
              <p className="font-semibold text-base leading-6 text-[#111827]">
                {transactionData.userName}
              </p>
              <p className="text-sm leading-5.25 text-(--muted)">
                {transactionData.accountNumber} • Tatum Bank
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-(--placeholder) text-xs leading-4.5 tracking-[1.2px]">
              Recipient Information
            </h3>
            <div>
              <p className="font-semibold text-base leading-6 text-[#111827] tracking-[0.68%]">
                09079761752
              </p>
              <div className="flex gap-2 items-center">
                <div
                  className={`px-2 py-0.5 rounded-sm border uppercase font-bold text-[10px] leading-3.75 ${transactionData.billerCode === "GLO" ? "bg-[#F0FDF4] border-[#BBF7D0] text-[#15803D]" : transactionData.billerCode === "MTN" ? "bg-[#FEF9C3] border-[#FDE047] text-[#000000]" : transactionData.billerCode === "Airtel" ? "bg-[#FEE2E2] border-[#FECACA] text-[#DC2626]" : "bg-[#064E3B] border-[#064E3B] text-(--surface)"}`}
                >
                  {transactionData.billerCode}
                </div>
                <p className="text-xs leading-5.25 text-(--muted) tracking-[0.29%]">
                  {transactionData.productCategory} Purchase
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="pt-8 flex flex-col gap-4 border-t border-t-(--border)">
          <h3 className="uppercase font-bold text-(--placeholder) text-xs leading-4.5 tracking-[1.2px]">
            Transaction Details
          </h3>
          <div className="grid grid-cols-2 gap-y-6">
            <div>
              <h4 className="text-xs leading-4.5 text-(--muted)">
                Date & Time
              </h4>
              <p className="font-medium text-sm leading-5.25 text-[#111827]">
                {formatDate(transactionData.createdAt, true)}
              </p>
            </div>
            <div className="text-right">
              <h4 className="text-xs leading-4.5 text-(--muted)">Channel</h4>
              <p className="font-medium text-sm leading-5.25 text-[#111827]">
                Mobile App
              </p>
            </div>
            <div>
              <h4 className="text-xs leading-4.5 text-(--muted)">
                Reference ID
              </h4>
              <p className="font-medium text-sm leading-5.25 text-[#111827]">
                {transactionData.reference}
              </p>
            </div>
            <div className="text-right">
              <h4 className="text-xs leading-4.5 text-(--muted)">Session ID</h4>
              <p className="font-medium text-sm leading-5.25 text-[#111827]">
                {transactionData.billerId}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 border-t border-t-[#F9FAFB4D] flex justify-between">
        <p className="text-xs leading-4.5 tracking-[0.2%] text-(--placeholder)">
          Having issues with this transaction?
        </p>
        <div className="flex gap-2 items-center text-[#EF4444]">
          <TriangleWarningIcon />
          <p className="font-bold text-sm leading-5.25 tracking-[0.1%] ">
            Report an Issue
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
