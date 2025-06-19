"use server";
import { cookies } from "next/headers";
import { localeCookie } from "@/shared/lib/i18n/routing";

async function changeLanguage(lng: string) {
  const cookiesStore = cookies();
  const currentLng = cookiesStore.get(localeCookie)?.value;
  if (currentLng !== lng)
    cookies().set({
      name: localeCookie,
      value: lng,
      path: "/",
    });
}

export { changeLanguage };
