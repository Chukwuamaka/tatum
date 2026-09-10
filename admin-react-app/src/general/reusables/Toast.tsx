interface ToastProps {
  message: string;
  onClose: () => void;
  variant?: "error" | "success";
}

function Toast({ message, onClose, variant = "error" }: ToastProps) {
  return (
    <div
      role="alert"
      className={`fixed right-6 top-6 z-50 flex max-w-sm items-center gap-4 rounded-lg px-4 py-3 text-sm font-semibold text-white shadow-lg ${variant === "success" ? "bg-[#15803d]" : "bg-[#b42318]"}`}
    >
      <span>{message}</span>
      <button
        type="button"
        className="cursor-pointer border-0 bg-transparent text-lg leading-none text-white"
        aria-label="Close notification"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
}

export default Toast;
