"use client";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import cn from "classnames";
import { Modal } from "@/shared/ui/modal";
import { Form } from "./form";

export const SendApplicationButton: FC<{
  buttonText?: string;
  buttonClassName?: string;
}> = ({ buttonText, buttonClassName = "" }) => {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    globalThis.gtag("event", "desktop_popup");
    setOpen(true);
  };

  return (
    <>
      <button
        className={twMerge(
          cn(
            "bg-gradient-to-br from-[#018C6E] via-[#014F42] to-[#035846] py-4 px-7 rounded-full text-yellow uppercase font-bold w-full md:w-72 block text-center",
            buttonClassName
          )
        )}
        onClick={onClick}
      >
        {buttonText ? buttonText : "Оставить заявку"}
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        size="md"
        isRestricted
      >
        <div className="p-9 rounded-2xl bg-[#1A1A1A]">
          <h3 className="font-secondary text-2xl text-[#00896F] mb-6 font-bold text-center text-balance">
            Получите эксклюзивный доступ
          </h3>
          <p className="text-[#466765] mb-8 text-center font-medium leading-tight">
            Укажите ваш email и мы уведомим Вас когда приложение будет доступно
            для скачивания
          </p>
          <Form />
        </div>
      </Modal>
    </>
  );
};
