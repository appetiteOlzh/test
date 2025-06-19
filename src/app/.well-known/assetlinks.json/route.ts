import { promises as fs } from "fs";

export async function GET() {
  const file = await fs.readFile(
    process.cwd() + "/public/json/assetlinks.json",
    "utf8"
  );
  const f = JSON.parse(file);
  return Response.json(f);
}
