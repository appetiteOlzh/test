"use server";
import { GA_URL, MEASUREMENT_ID } from "@/shared/data";
import { cookies } from "next/headers";
import { generateClientId } from "../generate-client-id";

const API_SECRET = process.env.GA_API_SECRET;

export async function sendGAEvent(event: string) {
  if (!API_SECRET) return;
  const cookieStore = cookies();
  const gaCookie = cookieStore.get("_ga")?.value;
  const clientId = (() => {
    if (!gaCookie) return generateClientId();

    const parts = gaCookie.split(".");

    if (parts.length === 4) return `${parts[2]}.${parts[3]}`;

    const clientId = generateClientId();
    cookieStore.set("_ga", `GA1.1.${clientId}`, {
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: false,
      path: "/",
    });

    return clientId;
  })();

  try {
    await fetch(
      `${GA_URL}?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          events: [
            {
              name: event,
            },
          ],
        }),
      }
    );
  } catch (err) {
    console.error("GA event error:", err);
  }
}
