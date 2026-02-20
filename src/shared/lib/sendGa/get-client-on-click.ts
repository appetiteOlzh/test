import { sendGAEvent } from ".";

export function getClickGa({
  eventName,
  callback,
}: {
  eventName: string;
  callback?: () => void;
}): () => void {
  return () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      globalThis.gtag("event", eventName);
    } else {
      sendGAEvent(eventName);
    }

    if (callback) callback();
  };
}
