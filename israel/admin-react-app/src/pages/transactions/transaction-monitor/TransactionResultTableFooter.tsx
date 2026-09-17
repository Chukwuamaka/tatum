import DoubleChevronLeftIcon from "../../../icons/DoubleChevronLeftIcon";
import ChevronDownIcon from "../../../icons/ChevronDownIcon";

const TransactionResultTableFooter = () => {
  return (
    <div className="flex justify-between border-t border-t-[#F3F4F6] p-6 items-center">
      <p className="text-xs leading-4 text-(--placeholder)">
        Showing 1 to 10 of 3,456 transactions
      </p>
      <div className="flex gap-6">
        <div className="flex gap-3 items-center">
          <p className="text-xs text-(--placeholder) leading-4 tracking-[0.29%]">
            Rows per page
          </p>
          <div className="border border-(--border) px-3 py-1 rounded-sm flex gap-2 items-center text-[#9CA3AF]">
            <p className="font-semibold text-xs leading-4 tracking-[5.86%] text-[#111827]">
              10
            </p>
            <ChevronDownIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="flex gap-1 text-(--placeholder) text-xs font-bold leading-4">
          <div className="size-8 rounded-lg border border-[#F3F4F6] flex items-center justify-center cursor-pointer">
            <DoubleChevronLeftIcon />
          </div>
          <div className="size-8 rounded-lg border border-[#F3F4F6] flex items-center justify-center cursor-pointer">
            <ChevronDownIcon className="rotate-90" />
          </div>
          <div className="size-8 rounded-lg flex items-center justify-center cursor-pointer bg-[#FDB813] text-[#111827]">
            1
          </div>
          <div className="size-8 rounded-lg flex items-center justify-center cursor-pointer">
            2
          </div>
          <div className="size-8 rounded-lg flex items-center justify-center cursor-pointer">
            3
          </div>
          <div className="size-8 rounded-lg flex items-center justify-center cursor-pointer">
            4
          </div>
          <div className="size-8 rounded-lg flex items-center justify-center cursor-pointer">
            5
          </div>
          <div className="size-8 rounded-lg flex items-center justify-center cursor-pointer">
            ...
          </div>
          <div className="size-8 rounded-lg flex items-center justify-center cursor-pointer">
            346
          </div>
          <div className="size-8 rounded-lg border border-[#F3F4F6] flex items-center justify-center cursor-pointer">
            <ChevronDownIcon className="-rotate-90" />
          </div>
          <div className="size-8 rounded-lg border border-[#F3F4F6] flex items-center justify-center cursor-pointer">
            <DoubleChevronLeftIcon className="rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionResultTableFooter;
