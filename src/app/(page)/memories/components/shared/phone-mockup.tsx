// CSS-мокап телефона со скриншотом приложения внутри
export function PhoneMockup({
  screenshot,
  className = "",
}: {
  screenshot?: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Корпус телефона */}
      <div className="relative w-[280px] h-[580px] rounded-[40px] border-[6px] border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
        {/* Нотч */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-neutral-800 rounded-b-2xl z-10" />

        {/* Экран */}
        <div className="w-full h-full rounded-[34px] overflow-hidden bg-neutral-950">
          {screenshot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={screenshot}
              alt="MonClips app screenshot"
              className="w-full h-full object-cover"
            />
          ) : (
            // Плейсхолдер — сетка фото
            <div className="w-full h-full pt-8 p-2">
              <div className="grid grid-cols-3 gap-1 animate-scroll-up">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-md"
                    style={{
                      background: `hsl(${40 + i * 15}, ${60 + (i % 3) * 10}%, ${45 + (i % 4) * 8}%)`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
