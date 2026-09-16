import DownloadIcon from "../../../icons/DownloadIcon";
import TransactionResultTableRow from "./TransactionResultTableRow";
import TransactionResultTableFooter from "./TransactionResultTableFooter";

const tableHead = [
  "Transaction ID",
  "Date & Time",
  "Phone Number",
  "Network",
  "Amount(₦)",
  "Status",
  "Customer Name",
  "Actions",
];

const tableData = [
  {
    transactionId: "AT2405270012457",
    dateAndTime: "27 May 2024, 10:28 AM",
    phoneNumber: "07088109974",
    network: "MTN",
    amount: "25,000.00",
    status: "Failed",
    customerName: "Grace Lee",
  },
  {
    transactionId: "AT2405270012458",
    dateAndTime: "27 May 2024, 10:28 AM",
    phoneNumber: "09013055377",
    network: "GLO",
    amount: "10,000.00",
    status: "Failed",
    customerName: "Amaka Okeke",
  },
  {
    transactionId: "AT2405270012459",
    dateAndTime: "27 May 2024, 10:28 AM",
    phoneNumber: "07091538631",
    network: "GLO",
    amount: "25,000.00",
    status: "Pending",
    customerName: "Michael Chen",
  },
  {
    transactionId: "AT2405270012460",
    dateAndTime: "27 May 2024, 10:28 AM",
    phoneNumber: "09016792939",
    network: "GLO",
    amount: "500.00",
    status: "Failed",
    customerName: "Sarah Williams",
  },
  {
    transactionId: "AT2405270012461",
    dateAndTime: "27 May 2024, 10:28 AM",
    phoneNumber: "08022567823",
    network: "Airtel",
    amount: "500.00",
    status: "Pending",
    customerName: "John Adebayo",
  },
  {
    transactionId: "AT2405270012462",
    dateAndTime: "27 May 2024, 10:28 AM",
    phoneNumber: "08113580666",
    network: "9MOBILE",
    amount: "25,000.00",
    status: "Pending",
    customerName: "Grace Lee",
  },
  {
    transactionId: "AT2405270012463",
    dateAndTime: "27 May 2024, 10:28 AM",
    phoneNumber: "07064460987",
    network: "Airtel",
    amount: "5,000.00",
    status: "Pending",
    customerName: "John Adebayo",
  },
  {
    transactionId: "AT2405270012464",
    dateAndTime: "27 May 2024, 10:28 AM",
    phoneNumber: "09079761752",
    network: "Airtel",
    amount: "5,000.00",
    status: "Successful",
    customerName: "Oluwaseun Ajayi",
  },
  {
    transactionId: "AT2405270012465",
    dateAndTime: "27 May 2024, 10:28 AM",
    phoneNumber: "08021797938",
    network: "9MOBILE",
    amount: "500.00",
    status: "Failed",
    customerName: "Oluwaseun Ajayi",
  },
];

const TransactionResults = () => {

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

      <table className="w-full">
        <thead className="bg-[#F3F4F6] border-b border-b-[#F9FAFB]  w-full">
          <tr>
            <th className="py-4 flex justify-center">
              <div className="border border-[#767676] size-3.25 bg-(--surface) rounded-[2.5px] cursor-pointer"></div>
            </th>
            {tableHead.map((head) => (
              <th className="p-4 font-bold text-[10px] leading-3.75 tracking-[0.5px] text-(--placeholder)">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <TransactionResultTableRow data ={data} />
          ))}
        </tbody>
      </table>

      <TransactionResultTableFooter />
    </div>
  );
};

export default TransactionResults;
