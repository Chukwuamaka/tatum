import type { ButtonHTMLAttributes } from "react";

interface ButtonComponent extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit" | "reset" | "button";
  text: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

function Button({
  type,
  text,
  leftIcon,
  rightIcon,
  className,
  ...others
}: ButtonComponent) {
  return (
    <button
      type={type}
      className={`inline-flex items-center gap-2 ${className ?? ""}`}
      {...others}
    >
      {leftIcon && <span aria-hidden="true">{leftIcon} </span>} {text}
      {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
    </button>
  );
}

export default Button;
