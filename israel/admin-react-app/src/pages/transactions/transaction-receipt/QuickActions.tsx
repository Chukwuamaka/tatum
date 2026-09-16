import RecycleIcon from "../../../icons/RecycleIcon";
import SphereIcon from "../../../icons/SphereIcon";

const QuickActions = () => {
  return (
    <div className="p-6 flex flex-col gap-4 rounded-xl border border-(--border) bg-(--page)">
      <h2 className="font-bold text-sm leading-5.25 text-[#111827]">
        Quick Actions
      </h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 p-3 rounded-lg border border-(--border) bg-[#F9FAFB]">
          <div className="size-8 rounded-sm border border-(--border) text-[#4B5563] flex items-center justify-center">
            <RecycleIcon />
          </div>
          <div>
            <h3 className="font-bold text-xs leading-4.5 tracking-[0.49%] text-[#111827]">
              Initiate Reversal
            </h3>
            <p className="text-[10px] leading-3.75 tracking-[0.49% text-(--placeholder)]">
              Reverse this transaction
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg border border-(--border) bg-[#F9FAFB]">
          <div className="size-8 rounded-sm border border-(--border) text-[#4B5563] flex items-center justify-center">
            <SphereIcon />
          </div>
          <div>
            <h3 className="font-bold text-xs leading-4.5 tracking-[0.29%] text-[#111827]">
              Flag Transaction
            </h3>
            <p className="text-[10px] leading-3.75 tracking-[0.2%] text-(--placeholder)]">
              Mark for manual review
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
