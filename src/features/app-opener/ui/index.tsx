import { matchDevice } from "@/shared/lib/match-device";
import { AppStoreCustomButton, GoogleplayCustomButton } from "@/shared/ui";
import { headers } from "next/headers";
import { AppOpenerButton } from "./button";

export const AppOpener = ({ buttonText }: { buttonText: string }) => {
  const userAgent = headers().get("user-agent");

  if (matchDevice(userAgent).isIos)
    return <AppStoreCustomButton buttonText={buttonText} />;
  if (matchDevice(userAgent).isAndroid)
    return <GoogleplayCustomButton buttonText={buttonText} />;
  if (matchDevice(userAgent).isWeb)
    return <AppOpenerButton buttonText={buttonText} />;
};
