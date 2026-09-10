import type { ComponentProps } from "react";

export default function ShieldIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      {...props}
    >
      <path
        d="M7.50001 1C7.64376 1 7.78751 1.03125 7.91877 1.09063L13.8031 3.5875C14.4906 3.87813 15.0031 4.55625 15 5.37499C14.9843 8.47499 13.7094 14.1469 8.32502 16.725C7.80314 16.975 7.19689 16.975 6.67502 16.725C1.29064 14.1469 0.0156392 8.47499 1.4214e-05 5.37499C-0.00311079 4.55625 0.50939 3.87813 1.19689 3.5875L7.08439 1.09063C7.21251 1.03125 7.35626 1 7.50001 1Z"
        fill="#94A3B8"
      />
    </svg>
  );
}
