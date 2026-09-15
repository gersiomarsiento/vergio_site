// app/components/icons/SliderArrow.tsx

interface IconProps {
  className?: string;
}

export default function SliderArrow({ className }: IconProps) {
  return (
    <svg
      width="46"
      height="64"
      viewBox="0 0 46 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16 4L30 32L16 60" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
