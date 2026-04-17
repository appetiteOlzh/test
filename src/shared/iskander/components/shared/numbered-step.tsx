// Шаг-карточка с номером в цветном квадрате + заголовок + описание
// Используется в секциях "How it works" на светлых лендингах

export function NumberedStep({
  n,
  title,
  text,
  accent = "#F2CF40",
  align = "left",
}: {
  n: number;
  title: string;
  text: string;
  accent?: string;
  align?: "left" | "right";
}) {
  // align управляет выравниванием на десктопе — для шагов слева от центрального
  // изображения хотим выравнивание вправо, и наоборот
  const alignClass = align === "right" ? "md:items-end md:text-right" : "md:items-start";

  return (
    <div className={`flex flex-col gap-3 items-start ${alignClass}`}>
      <div
        className="size-12 rounded-xl flex items-center justify-center text-lg font-bold text-neutral-900"
        style={{
          background: `${accent}33`, // 20% прозрачности от акцента
          border: `1px solid ${accent}66`, // 40% прозрачности для обводки
        }}
      >
        {n}
      </div>
      <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
      <p className="text-sm text-neutral-500 max-w-xs">{text}</p>
    </div>
  );
}
