import { useEffect, useState } from "react";
import type  { TransactionData } from "../../../api-clients/transactions";
import DownloadIcon from "../../../icons/DownloadIcon";
import TransactionResultTableRow from "./TransactionResultTableRow";
import TransactionResultTableFooter from "./TransactionResultTableFooter";
import { getMyTransactions } from "../../../api-clients/transactions";

const tableHead = [
  "Transaction ID",
  "Date & Time",
  "Account Number",
  "Network",
  "Amount(₦)",
  "Status",
  "Customer Name",
  "Actions",
];

const TransactionResults = () => {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  useEffect(() => {
    const getTransactions = async () => {
      try {
        const responseData = await getMyTransactions();
        if (responseData.success) {
          setTransactions(responseData.data?.items || [])
        }
      } catch (error) {
        console.log(error);
      }
    };

    getTransactions();
  }, []);


  return (
    <div className="rounded-xl bg-(--surface) border border-(--border)">
      <div className="p-6 border-b border-b-[#F3F4F6] flex justify-between items-center">
        <div className="flex gap-1 text-base leading-6 items-center">
          <h3 className="font-bold text-[#111827]">Transaction Results</h3>
          <p className="text-[#9CA3AF] tracking-[0.98%]">(3,456)</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="rounded-full bg-[#F0FDF4] flex px-3 py-1.5 gap-2 items-center">
            <div className="size-1.5 rounded-full bg-[#22C55E]"></div>
            <p className="text-xs leading-4 tracking-[0.1%] font-medium text-[#22C55E]">
              Auto refresh: On
            </p>
          </div>
          <div className="rounded-md bg-[#FFCC33] flex gap-2 py-1.5 px-3 text-[#00070E]">
            <DownloadIcon />
            <p className="font-semibold text-xs leading-4 tracking-[1.86%]">
              Export
            </p>
          </div>
        </div>
      </div>

      {transactions && (
      <table className="w-full">
        <thead className="bg-[#F3F4F6] border-b border-b-[#F9FAFB]  w-full">
          <tr>
            <th className="py-4 flex justify-center">
              <div className="border border-[#767676] size-3.25 bg-(--surface) rounded-[2.5px] cursor-pointer"></div>
            </th>
            {tableHead.map((head) => (
              <th key={head} className="p-4 font-bold text-[10px] leading-3.75 tracking-[0.5px] text-(--placeholder)">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionResultTableRow key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>)}

      <TransactionResultTableFooter />
    </div>
  );
};

export default TransactionResults;
