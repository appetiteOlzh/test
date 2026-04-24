"use client";
import { matchDevice } from "@/shared/lib/match-device";
import { AppStoreCustomButton, GoogleplayCustomButton } from "@/shared/ui";
import { AppOpenerButton } from "./button";
import { useEffect, useState } from "react";

export const AppOpener = ({
  buttonText,
  className = "",
  eventName,
  eventNameGoogleplay,
  eventNameAppstore,
}: {
  buttonText: string;
  className?: string;
  eventName?: string;
  eventNameGoogleplay?: string;
  eventNameAppstore?: string;
}) => {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith("deviceOs="))
      ?.split("=")[1];

    setUserAgent(value ?? "");
  }, []);

  if (matchDevice(userAgent).isIos)
    return (
      <AppStoreCustomButton
        className={className}
        buttonText={buttonText}
        eventName={eventNameAppstore}
      />
    );
  if (matchDevice(userAgent).isAndroid)
    return (
      <GoogleplayCustomButton
        className={className}
        buttonText={buttonText}
        eventName={eventNameGoogleplay}
      />
    );
  if (matchDevice(userAgent).isWeb)
    return (
      <AppOpenerButton
        className={className}
        buttonText={buttonText}
        eventName={eventName}
        eventNameGoogleplay={eventNameGoogleplay}
        eventNameAppstore={eventNameAppstore}
      />
    );
};
