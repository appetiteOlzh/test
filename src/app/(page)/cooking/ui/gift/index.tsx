import { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const list = [
  {
    title: "Завтраки",
    description: "Открыть в MonClips",
    image: "/assets/img/cooking/gifts/1.jpg",
    link: "#",
  },
  {
    title: "Десерты",
    description: "Открыть в MonClips",
    image: "/assets/img/cooking/gifts/2.jpg",
    link: "#",
  },
  {
    title: "Обеды",
    description: "Открыть в MonClips",
    image: "/assets/img/cooking/gifts/3.jpg",
    link: "#",
  },
];

export const Gift: FC = () => {
  const t = useTranslations("Cooking.gift");

  return (
    <section className="section">
      <div className="container">
        <h2
          className="text-h1-clamp md:text-center heading max-w-3xl mx-auto mb-6"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        ></h2>
        <p
          className="md:text-center text-h4-clamp max-w-3xl mx-auto text-balance mb-9"
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
        ></p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {list.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="block cursor-pointer"
              >
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  className="bg-cover bg-center rounded-3xl p-8 h-60 flex flex-col justify-end"
                >
                  <h4 className="text-2xl leading-tight mb-1">{item.title}</h4>
                  <p className="hover:underline">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
