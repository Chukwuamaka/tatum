import { type ComponentProps } from "react";

export default function PhoneIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_1613_5548)">
        <path
          d="M5.15312 0.769455C4.9125 0.188205 4.27813 -0.12117 3.67187 0.0444546L0.921875 0.794455C0.378125 0.944455 0 1.43821 0 2.00071C0 9.73195 6.26875 16.0007 14 16.0007C14.5625 16.0007 15.0562 15.6226 15.2063 15.0789L15.9562 12.3288C16.1218 11.7226 15.8125 11.0882 15.2312 10.8476L12.2312 9.59758C11.7218 9.38507 11.1312 9.53195 10.7844 9.96008L9.52188 11.5007C7.32188 10.4601 5.54063 8.67883 4.5 6.47883L6.04063 5.21945C6.46875 4.86945 6.61562 4.28195 6.40312 3.77258L5.15312 0.772579V0.769455Z"
          fill="#94A3B8"
        />
      </g>
      <defs>
        <clipPath id="clip0_1613_5548">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
