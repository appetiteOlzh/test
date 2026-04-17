// Пункт-фича: иконка в сером квадрате + заголовок + описание
// Используется в секциях Features на светлых лендингах

export function FeatureItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      {/* Иконка в сером квадрате */}
      <div className="shrink-0 size-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-bold text-neutral-900 mb-1">{title}</h3>
        <p className="text-sm text-neutral-500 max-w-sm">{text}</p>
      </div>
    </div>
  );
}
