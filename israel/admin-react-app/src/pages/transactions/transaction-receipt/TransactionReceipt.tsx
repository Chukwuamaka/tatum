import DownloadIcon from "../../../icons/DownloadIcon";
import ShareIcon from "../../../icons/ShareIcon";
import TransactionDetail from "./TransactionDetail";
import AccountSummary from "./AccountSummary";
import QuickActions from "./QuickActions";

const TransactionReceipt = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center text-(--placeholder) text-xs leading-4.5 tracking-[0.2%]">
            <span className="">Transactions</span>
            <span>/</span>
            <span className="text-[#111827] font-medium tracking-[0.68%]">
              AT2405270012464
            </span>
          </div>
          <h1 className="font-bold text-2xl leading-9 tracking-[0.2%]">
            Transaction Detail
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-(--button) flex gap-2 items-center px-4 py-2 rounded-lg cursor-pointer">
            <DownloadIcon className="text-[#00070E]" />
            <span className="text-[#00070E] text-sm leading-5.25 font-semibold">
              Download Receipt
            </span>
          </button>
          <button className="bg-white flex gap-2 items-center px-4 py-2 rounded-lg border border-(--border) cursor-pointer">
            <ShareIcon className="text-[#4B5563]" />
            <span className="text-[#4B5563] text-sm leading-5.25 font-semibold tracking-[1.66%]">
              Share
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <TransactionDetail />

        <div className="flex flex-col gap-6">
          <AccountSummary />
          <QuickActions />
        </div>
      </div>
    </>
  );
};

export default TransactionReceipt;
