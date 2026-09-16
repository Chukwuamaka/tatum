import { useState } from "react";
import { type TransactionData } from "../../../api-clients/transactions";
import { formatDate } from "../../../utils/helpers";
import MoreImg from "../../../assets/images/more.png";
import { Link } from "react-router";

interface TransactionDataProps {
  transaction: TransactionData;
}

const TransactionResultTableRow = ({ transaction }: TransactionDataProps) => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function handleCheckboxChange(transactionId: string): void {
    setChecked((prev) => ({
      ...prev,
      [transactionId]: !prev[transactionId],
    }));
  }

  return (
    <tr
      className={`text-center text-xs leading-4 ${checked[transaction.id] ? "bg-[#F0F9FF]" : ""}`}
    >
      <td className="p-6 flex justify-center">
        <input
          type="checkbox"
          name={transaction.id}
          id="checkbox"
          checked={checked[transaction.id] || false}
          onChange={() => handleCheckboxChange(transaction.id)}
        />
      </td>
      <td className="text-[#0052CC] tracking-[0.59%] font-semibold py-6 cursor-pointer">
        <Link to={`/dashboard/transactions/${transaction.id}`}>
          {transaction.id}
        </Link>
      </td>
      <td className="tracking-[0.2%] text-[#6B7280]">
        {formatDate(transaction.createdAt)}
      </td>
      <td className="tracking-[0.59%] text-[#4B5563]">
        {transaction.accountNumber}
      </td>
      <td>
        <span
          className={`text-[10px] leading-3.75 tracking[1.66%] font-bold px-2 py-[0.5px] rounded-sm border ${transaction.billerCode === "GLO" ? "bg-[#F0FDF4] border-[#BBF7D0] text-[#15803D]" : transaction.billerCode === "MTN" ? "bg-[#FEF9C3] border-[#FDE047] text-[#000000]" : transaction.billerCode === "Airtel" ? "bg-[#FEE2E2] border-[#FECACA] text-[#DC2626]" : "bg-[#064E3B] border-[#064E3B] text-(--surface)"}`}
        >
          {transaction.billerCode}
        </span>
      </td>
      <td className="font-bold tracking-[0.98%] text-[#111827]">
        {transaction.amount.toFixed(2)}
      </td>
      <td>
        <span
          className={`text-[10px] leading-3.75 tracking[0.49%] font-bold px-2.5 py-[2.5px] rounded-full ${transaction.status === "Failed" ? "bg-[#FEF2F2] text-[#EF4444]" : transaction.status === "Pending" ? "bg-[#FFF7ED] text-[#F59E0B]" : "bg-[#F0FDF4] text-[#22C55E]"}`}
        >
          {transaction.status}
        </span>
      </td>
      <td className="font-medium tracking-[0.59%] text-[#111827]">
        {transaction.userName}
      </td>
      <td className="flex justify-center items-center">
        <img src={MoreImg} className="cursor-pointer" />
      </td>
    </tr>
  );
};

export default TransactionResultTableRow;