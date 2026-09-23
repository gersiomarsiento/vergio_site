// app/components/icons/ArrowSmall.tsx

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

export default function ArrowSmall({ className, strokeWidth = 1.33333 }: IconProps) {
  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.33317 11.3332V0.666504M9.99984 6.6665L5.33317 11.3332L0.666504 6.6665"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
