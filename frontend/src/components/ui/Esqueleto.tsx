export function Esqueleto({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-raio bg-superficie-2 ${className}`}
    />
  );
}
