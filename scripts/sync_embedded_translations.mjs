import { readFile, writeFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const translationsDirectory = join(root, "translations");
const jsPath = join(root, "modern-batterie-monitor.js");
const startMarker = "/* BEGIN EMBEDDED TRANSLATIONS */";
const endMarker = "/* END EMBEDDED TRANSLATIONS */";

const names = (await readdir(translationsDirectory)).filter((name) => name.endsWith(".json")).sort();
const translations = Object.fromEntries(
  await Promise.all(names.map(async (name) => [
    name.slice(0, -5),
    JSON.parse(await readFile(join(translationsDirectory, name), "utf8")),
  ])),
);
if (Object.keys(translations).length === 0) throw new Error("No translation JSON files found");

const source = await readFile(jsPath, "utf8");
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker, start + startMarker.length);
if (start < 0 || end < 0 || source.indexOf(startMarker, start + 1) >= 0) {
  throw new Error("Expected exactly one embedded translation marker block");
}

const block = `${startMarker}\nconst M_BATTERY_EMBEDDED_TRANSLATIONS = ${JSON.stringify(translations, null, 2)};\n${endMarker}`;
await writeFile(jsPath, source.slice(0, start) + block + source.slice(end + endMarker.length), "utf8");
console.log(`Embedded ${Object.keys(translations).length} translation files in modern-batterie-monitor.js`);
