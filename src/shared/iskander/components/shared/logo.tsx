// Логотип MonClips — настоящий SVG с monclips.com
export function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "small" | "default" | "large";
}) {
  const heights = {
    small: 28,
    default: 36,
    large: 48,
  };

  return (
    <a href="/" className={`flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/img/memories/logo.svg"
        alt="MonClips"
        height={heights[size]}
        style={{ height: heights[size], width: "auto" }}
      />
    </a>
  );
}
