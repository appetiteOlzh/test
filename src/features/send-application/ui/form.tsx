"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormUI, Loader, Modal } from "@/shared/ui";
import { RecaptchaLoader } from "@/shared/ui/form/recaptch-loader";
import { formSchema, FromType } from "../data";

export const Form: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const setTokenVal = (token: string) => {
    setValue("token", token);
  };

  const onSubmit = async (data: FromType) => {
    setError(false);
    setLoading(true);

    const res = await fetch("https://api-v2.monclips.com/website/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    setLoading(false);
    if (response.ok) {
      reset();
      setOpen(true);
    } else {
      setError(true);
      console.error("Ошибка при отправке формы:", response);
    }
  };

  const { ref: nameRef, ...nameProps } = register("name");
  const { ref: emailRef, ...emailProps } = register("email");
  const { ref: tokenRef, ...tokenProps } = register("token");

  return (
    <>
      {isError ? (
        <p className="text-red-800 mb-8 text-center text-xl text-bold">
          Ошибка при обработке формы
        </p>
      ) : null}
      {isLoading ? (
        <div className="absolute bg-[#181818]/30 inset-0 flex items-center justify-center z-50">
          <Loader />
        </div>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2.5">
          <FormUI.Input
            {...nameProps}
            errorMessage={errors.name?.message}
            placeholder="Имя"
            refProps={nameRef}
            readOnly={isLoading}
          />
        </div>
        <div className="mb-6">
          <FormUI.Input
            {...emailProps}
            errorMessage={errors.email?.message}
            placeholder="E-mail"
            refProps={emailRef}
            readOnly={isLoading}
          />
        </div>
        <RecaptchaLoader
          {...tokenProps}
          refProps={tokenRef}
          setTokenVal={setTokenVal}
        />
        <button
          className="bg-gradient-to-br from-[#018C6E] via-[#014F42] to-[#035846] py-4 px-7 text-yellow uppercase font-bold w-full rounded-full"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Обработка формы..." : "Отправить"}
        </button>
      </form>
      <Modal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        size="md"
        isRestricted
      >
        <div className="p-9 rounded-2xl bg-[#1A1A1A]">
          <h3 className="font-secondary text-2xl text-[#00896F] mb-6 font-bold text-center text-balance">
            Поздравляем!
          </h3>
          <p className="text-[#466765] mb-8 text-center font-medium leading-tight">
            Вы будете в числе первых кто получит <br />
            письмо и доступ к MonClips
          </p>
          <button
            className="bg-gradient-to-br from-[#018C6E] via-[#014F42] to-[#035846] py-4 px-7 text-yellow uppercase font-bold w-full rounded-full"
            type="button"
            onClick={() => setOpen(false)}
          >
            Закрыть
          </button>
        </div>
      </Modal>
    </>
  );
};
