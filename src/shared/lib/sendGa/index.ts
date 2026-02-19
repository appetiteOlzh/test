"use server";
import { cookies } from "next/headers";

const GA_URL = "https://www.google-analytics.com/mp/collect";
const MEASUREMENT_ID = "G-ZMWY92F4Z8";
const API_SECRET = process.env.GA_API_SECRET;

export async function sendGAEvent(event: string) {
  if (!API_SECRET) return;
  const cookieStore = cookies();
  let clientId = cookieStore.get("_ga")?.value;

  if (!clientId) {
    clientId = generateClientId();
  }

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

function generateClientId(): string {
  // Генерация случайного client_id в формате "randomNumber.randomNumber"
  const part1 = Math.floor(Math.random() * 1e10);
  const part2 = Math.floor(Math.random() * 1e10);
  return `${part1}.${part2}`;
}
