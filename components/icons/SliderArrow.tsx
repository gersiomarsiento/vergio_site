// app/components/icons/SliderArrow.tsx

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

export default function SliderArrow({ className, strokeWidth = 3}: IconProps) {
  return (
    <svg
      width="46"
      height="64"
      viewBox="0 0 46 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16 4L30 32L16 60" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}
