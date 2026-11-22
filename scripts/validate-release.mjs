import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFile(join(root, path), "utf8");
const version = (await read("VERSION.txt")).trim();
const requestedVersion = process.argv[2]?.trim();
assert.match(version, /^\d+\.\d+\.\d+$/, `Invalid VERSION.txt value: ${version}`);
if (requestedVersion && requestedVersion !== version) {
  throw new Error(`Requested release ${requestedVersion} does not match VERSION.txt (${version})`);
}

const source = await read("modern-batterie-monitor.js");
assert.ok(source.includes(`const M_BATTERY_VERSION = "${version}";`), "JS constant version differs from VERSION.txt");
assert.ok(source.includes(`· Lovelace custom card · ${version} */`), "JS header version differs from VERSION.txt");
assert.ok((await read("README.md")).includes(`**Version ${version}**`), "README version differs from VERSION.txt");

const manifest = JSON.parse(await read("hacs.json"));
assert.equal(manifest.filename, "modern-batterie-monitor.js", "Unexpected HACS filename");
assert.equal(manifest.content_in_root, false, "HACS must resolve the direct release JS asset");

const startMarker = "/* BEGIN EMBEDDED TRANSLATIONS */";
const endMarker = "/* END EMBEDDED TRANSLATIONS */";
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker, start + startMarker.length);
assert.ok(start >= 0 && end > start, "Embedded translation markers are missing");
const section = source.slice(start + startMarker.length, end);
const match = section.match(/const M_BATTERY_EMBEDDED_TRANSLATIONS = (\{[\s\S]*?\n\});/);
assert.ok(match, "Could not parse embedded translation map");
const embedded = JSON.parse(match[1]);

const translationFiles = (await readdir(join(root, "translations"))).filter((name) => name.endsWith(".json")).sort();
assert.equal(translationFiles.length, 9, `Expected 9 translation files, found ${translationFiles.length}`);
const languages = Object.fromEntries(await Promise.all(translationFiles.map(async (name) => [
  name.slice(0, -5),
  JSON.parse(await read(`translations/${name}`)),
])));
assert.deepStrictEqual(embedded, languages, "Embedded translations differ from translations/*.json");
const supportedMatch = source.match(/const M_BATTERY_TRANSLATION_LANGUAGES = new Set\((\[[^\n]+\])\);/);
assert.ok(supportedMatch, "Supported translation language set is missing");
const supportedLanguages = JSON.parse(supportedMatch[1]);
assert.deepStrictEqual([...supportedLanguages].sort(), Object.keys(languages).sort(), "Supported language set differs from translation files");
assert.ok(source.includes("M_BATTERY_EMBEDDED_TRANSLATIONS[language]"), "Translation loader lacks embedded fallback");

console.log(`Validated Modern-Batterie-Monitor v${version}: HACS manifest, standalone fallback, and ${translationFiles.length} translations.`);
