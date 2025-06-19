import { ImageComparison } from "@/widgets/image-comparison";
import { FC } from "react";

export const WhyItPossible: FC = () => {
  return (
    <section className="md:pt-[200px] pt-[180px]">
      <div className="max-w-[1270px] mx-auto px-4">
        <h2 className="text-yellow-darker text-2xl md:text-4xl lg:text-5xl mb-4 font-apple font-black uppercase text-balance">
          Почему это возможно?
        </h2>
        <p className="mb-2 text-lg md:text-2xl leading-tight max-w-[900px]">
          MonClips использует умную технологию сжатия. Фото выглядят так же
          чётко — <span className="text-yellow-darker">до качества 4K</span>, но
          занимают{" "}
          <span className="text-yellow-darker">в 10 раз меньше места</span>.
        </p>
        <p className="mb-2 text-lg md:text-2xl leading-tight">
          Это даёт тебе свободу. Не думать о памяти. Просто жить, путешествовать
          и снимать.
        </p>
        <div className="py-6 relative">
          <ImageComparison
            originalImage="/assets/img/limitless/comp-img-original.jpg"
            compressedImage="/assets/img/limitless/comp-img-compressed.jpg"
          />
        </div>
      </div>
    </section>
  );
};
