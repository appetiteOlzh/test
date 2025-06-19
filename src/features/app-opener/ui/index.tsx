import { matchDevice } from "@/shared/lib/match-device";
import { AppStoreCustomButton, GoogleplayCustomButton } from "@/shared/ui";
import { headers } from "next/headers";
import { AppOpenerButton } from "./button";

export const AppOpener = ({
  isPremium,
  textVarity,
}: {
  isPremium?: boolean;
  textVarity?: "family";
}) => {
  const userAgent = headers().get("user-agent");

  if (matchDevice(userAgent).isIos)
    return (
      <AppStoreCustomButton isPremium={isPremium} textVarity={textVarity} />
    );
  if (matchDevice(userAgent).isAndroid)
    return (
      <GoogleplayCustomButton isPremium={isPremium} textVarity={textVarity} />
    );
  if (matchDevice(userAgent).isWeb)
    return <AppOpenerButton isPremium={isPremium} textVarity={textVarity} />;
};
