import { FC } from "react";
import { TabContent } from "./tab-content";
import { useTranslations } from "next-intl";

export const Albums: FC = () => {
  const t = useTranslations("Unlimited.album");

  const galleryList = [
    {
      title: t("made_by", { author: "Гаухар" }),
      img: "/assets/img/limitless/album/maldives.png",
      link: "https://share.monclips.com/c/13fgc77nvow8sl",
      text: "«Я обычно всё хранила в телефоне — а тут, пока ехали на остров, уже некуда было снимать. Дочка вспомнила, что турагент дал ссылку на MonClips. Всё загрузили в облако — и больше не думали о памяти. Очень удобно.»",
    },
    {
      title: t("made_by", { author: "Aru" }),
      img: "/assets/img/limitless/album/maldives-1.png",
      link: "https://share.monclips.com/c/1797vek78fxwdgj",
      text: "«На второй день поездки телефон написал: “Память заполнена”. Удалять ничего не хотелось. В турагентстве ещё до вылета посоветовали MonClips — и это реально спасло. Скинула все видео и фото в папку “Мальдивы”. И дальше просто жила и снимала.»",
    },
    {
      title: t("made_by", { author: "Hoc" }),
      img: "/assets/img/limitless/album/viet.png",
      link: "https://share.monclips.com/c/105786vvjdwxqkxw45",
      text: "«Во время поездки во Вьетнам собрал все фото и видео в один альбом и просто отправил ссылку друзьям. Это удобно. Без рекламы. Без подписок. Просто красиво и понятно. Я бы хотел, чтобы такое приложение появилось раньше.»",
    },
  ];

  return (
    <section className="pt-[160px]">
      <div className="max-w-[970px] mx-auto px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 font-apple font-black uppercase text-balance md:text-center text-yellow-darker">
          {t("title")}
        </h2>
        <p className="text-xl md:text-2xl leading-tight mb-14 text-balance md:text-center">
          {t("description")}
        </p>
        <div className="overflow-hidden mb-4">
          <TabContent list={galleryList} />
        </div>
        <p className="text-lg md:text-2xl leading-tight mb-14 text-balance text-yellow-darker md:text-center">
          {t("description_second")}
        </p>
      </div>
    </section>
  );
};
