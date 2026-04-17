import Image from "next/image";

export function PhoneOnCircle({
  src,
  alt = "MonClips app",
  accentFrom = "#F2CF40",
  accentTo = "#E8B400",
  circleInset = "10%",
  imageWidth = "70%",
  circleClassName = "",
  imageClassName = "",
  className = "",
  children,
}: {
  src?: string;
  alt?: string;
  accentFrom?: string;
  accentTo?: string;
  circleInset?: string;
  imageWidth?: string;
  circleClassName?: string;
  imageClassName?: string;
  className?: string;
  children?: React.ReactNode; // Плавающие плашки, доп. мокапы и т.п.
}) {
  return (
    <div className={`relative aspect-square mx-auto ${className}`}>
      <div
        className={`absolute rounded-full ${circleClassName}`}
        style={{
          inset: circleInset,
          background: `radial-gradient(circle, ${accentFrom} 0%, ${accentTo} 100%)`,
        }}
      />

      {src && (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            className={`relative z-10 object-contain drop-shadow-2xl shrink-0 max-w-none ${imageClassName}`}
            style={{ width: imageWidth }}
            width={900}
            height={675}
            quality={100}
          />
        </div>
      )}

      {children}
    </div>
  );
}
