// app/components/icons/ArrowRound.tsx

interface IconProps {
  className?: string;
}

export default function ArrowRound({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="currentColor" />
      <path
        d="M24 16L16 24M24 22.6667V16H17.3333"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
