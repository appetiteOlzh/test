import { AppStoreButton } from "@/shared/ui/button-apps/apple-store";
import s from "./styles.module.css";
import { GoogleplayButton } from "@/shared/ui/button-apps/googleplay";

export const Content = ({ content }: { content: string }) => {
  return (
    <>
      <div
        className={s.content}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className="max-w-[780px] mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="px-3 basis-auto mb-4">
            <AppStoreButton isDark />
          </div>
          <div className="px-3 basis-auto mb-4">
            <GoogleplayButton isDark />
          </div>
        </div>
      </div>
    </>
  );
};
