export default function PlaceholderSwatch({
  gradient,
  label,
  className = "",
}: {
  gradient: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
    >
      {label && (
        <span className="text-[11px] tracking-wide text-white/85 px-2 text-center">
          {label}
        </span>
      )}
    </div>
  );
}
