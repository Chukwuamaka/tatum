import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

function Input({ leftIcon, rightIcon, className, ...rest }: InputProps) {
  return (
    <div className={`relative flex items-center ${className ?? ""}`}>
      {leftIcon && (
        <span
          aria-hidden="true"
          className="absolute left-3 flex items-center text-gray-400"
        >
          {leftIcon}
        </span>
      )}

      <input
        className={`w-full border border-gray-300 rounded-md py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          leftIcon ? "pl-9" : "pl-3"
        } ${rightIcon ? "pr-9" : "pr-3"}`}
        {...rest}
      />

      {rightIcon && (
        <span
          aria-hidden="true"
          className="absolute right-3 flex items-center text-gray-400"
        >
          {rightIcon}
        </span>
      )}
    </div>
  );
}

export default Input;
