import { useState } from "react";
import MoreImg from "../../../assets/images/more.png";

interface DataRow {
  transactionId: string;
  dateAndTime: string;
  phoneNumber: string;
  network: string;
  amount: string;
  status: string;
  customerName: string;
}

interface TransactionResultProps {
  data: DataRow;
}

const TransactionResultTableRow = ({data}: TransactionResultProps) => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function handleCheckboxChange(transactionId: string): void {
    setChecked((prev) => ({
      ...prev,
      [transactionId]: !prev[transactionId],
    }));
  }

  return (
    <tr
      className={`text-center text-xs leading-4 ${checked[data.transactionId] ? "bg-[#F0F9FF]" : ""}`}
    >
      <td className="p-6 flex justify-center">
        <input
          type="checkbox"
          name={data.transactionId}
          id="checkbox"
          checked={checked[data.transactionId] || false}
          onChange={() => handleCheckboxChange(data.transactionId)}
        />
        {/* <div className="border border-[#767676] size-3.25 bg-(--surface) rounded-[2.5px]"></div> */}
      </td>
      <td className="text-[#0052CC] tracking-[0.59%] font-semibold py-6">
        {data.transactionId}
      </td>
      <td className="tracking-[0.2%] text-[#6B7280]">{data.dateAndTime}</td>
      <td className="tracking-[0.59%] text-[#4B5563]">{data.phoneNumber}</td>
      <td>
        <span
          className={`text-[10px] leading-3.75 tracking[1.66%] font-bold px-2 py-[0.5px] rounded-sm border ${data.network === "GLO" ? "bg-[#F0FDF4] border-[#BBF7D0] text-[#15803D]" : data.network === "MTN" ? "bg-[#FEF9C3] border-[#FDE047] text-[#000000]" : data.network === "Airtel" ? "bg-[#FEE2E2] border-[#FECACA] text-[#DC2626]" : "bg-[#064E3B] border-[#064E3B] text-(--surface)"}`}
        >
          {data.network}
        </span>
      </td>
      <td className="font-bold tracking-[0.98%] text-[#111827]">
        {data.amount}
      </td>
      <td>
        <span
          className={`text-[10px] leading-3.75 tracking[0.49%] font-bold px-2.5 py-[2.5px] rounded-full ${data.status === "Failed" ? "bg-[#FEF2F2] text-[#EF4444]" : data.status === "Pending" ? "bg-[#FFF7ED] text-[#F59E0B]" : "bg-[#F0FDF4] text-[#22C55E]"}`}
        >
          {data.status}
        </span>
      </td>
      <td className="font-medium tracking-[0.59%] text-[#111827]">
        {data.customerName}
      </td>
      <td className="flex justify-center items-center">
        <img src={MoreImg} className="cursor-pointer" />
      </td>
    </tr>
  );
};

export default TransactionResultTableRow;
