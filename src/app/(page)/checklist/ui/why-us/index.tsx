import Image from "next/image";
import { FC } from "react";

const list = [
  {
    icon: "/assets/icons/cloud-add.svg",
    title: "Свободная память",
    description: "Фото и видео загружаются в облако — телефон не перегружен",
  },
  {
    icon: "/assets/icons/shield-tick.svg",
    title: "Безопасность и доступ",
    description: "Все снимки сохраняются и доступны с любого устройства",
  },
  {
    icon: "/assets/icons/folder-favorite.svg",
    title: "Порядок по папкам",
    description: "Создавайте альбомы с обложками и подписями",
  },
  {
    icon: "/assets/icons/share.svg",
    title: "Легко делиться",
    description: "Отправляйте ссылку друзьям и семье",
  },
];

export const WhyUs: FC = () => {
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <h2 className="mb-4 md:mb-[30px] text-yellow-darker md:text-4xl text-xl font-apple font-bold uppercase md:text-center max-w-[660px] mx-auto">
          Почему MonClips — лучший спутник в путешествии
        </h2>
        <div className="flex flex-wrap -mx-[5px]">
          {list.map((card, index) => (
            <div
              className="px-[5px] basis-full md:basis-1/2 xl:basis-1/4 mb-2.5"
              key={index}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Card: FC<{ icon: string; title: string; description: string }> = (
  props
) => {
  const { icon, title, description } = props;

  return (
    <div className="md:p-9 py-6 px-4 rounded-3xl lg:rounded-[2.25rem] bg-[#202020] h-full flex flex-wrap content-between">
      <div className="mb-6 basis-full">
        <Image src={icon} width={48} height={48} alt="" />
      </div>
      <div className="mt-auto basis-full max-w-[180px]">
        <h4 className="font-apple font-black text-xl md:text-2xl uppercase mb-2 text-balance">
          {title}
        </h4>
        <p className="text-light text-lg md:text-xl text-balance">
          {description}
        </p>
      </div>
    </div>
  );
};
