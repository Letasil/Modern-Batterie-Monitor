#!/usr/bin/env python3
"""Build and verify the compact manual-installation and Marketplace ZIP."""

from __future__ import annotations

import json
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"


def main() -> None:
    version = (ROOT / "VERSION.txt").read_text(encoding="utf-8").strip()
    DIST.mkdir(exist_ok=True)
    archive = DIST / f"Modern-Batterie-Monitor-v{version}.zip"
    entries = [ROOT / "modern-batterie-monitor.js", ROOT / "VERSION.txt"]
    entries.extend(sorted((ROOT / "translations").glob("*.json")))

    with zipfile.ZipFile(archive, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as package:
        for path in entries:
            package.write(path, path.relative_to(ROOT).as_posix())

    with zipfile.ZipFile(archive, "r") as package:
        bad_entry = package.testzip()
        if bad_entry:
            raise SystemExit(f"ZIP CRC check failed for {bad_entry}")
        names = package.namelist()
        if "modern-batterie-monitor.js" not in names:
            raise SystemExit("ZIP is missing modern-batterie-monitor.js at its root")
        if any(name.startswith("Modern-Batterie-Monitor/") for name in names):
            raise SystemExit("ZIP has an unexpected enclosing directory")
        if "VERSION.txt" not in names or len([name for name in names if name.startswith("translations/") and name.endswith(".json")]) != 9:
            raise SystemExit("ZIP does not contain VERSION.txt and all nine translations")
        json.loads(package.read("translations/en.json"))

    print(f"Created and verified {archive}")


if __name__ == "__main__":
    main()
