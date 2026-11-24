# Release veröffentlichen

1. Alle Dateien aus diesem Paket im Hauptverzeichnis des Repositorys `Letasil/Modern-Batterie-Monitor` hochladen und bestehende Dateien aktualisieren. Achte besonders darauf, dass `.github/workflows/validate.yml`, `.github/workflows/release.yml` und `scripts/` enthalten sind.
2. Warten, bis der GitHub-Actions-Workflow **Validate** erfolgreich abgeschlossen ist.
3. Unter **Actions → Release → Run workflow** die Version aus `VERSION.txt` eintragen: `1.7.0`.
4. Den Workflow starten. Er prüft die Version und Dateien, baut ein ZIP und erstellt einen **Entwurf** mit zwei Assets: `modern-batterie-monitor.js` und `Modern-Batterie-Monitor-v1.7.0.zip`.
5. Den Entwurf öffnen. Prüfen, dass die JavaScript-Datei exakt `modern-batterie-monitor.js` heißt und im ZIP dieselbe Datei direkt auf oberster Ebene liegt.
6. Erst danach in GitHub **Publish release** auswählen.

Das Release wird durch diese Schritte nicht automatisch veröffentlicht. Das abschließende Veröffentlichen bleibt eine bewusste Aktion im GitHub-Entwurf.

## Inhalt des ZIP

Das Installations-ZIP enthält `modern-batterie-monitor.js`, `VERSION.txt` und `translations/*.json`. Die Karte funktioniert auch ohne den Übersetzungsordner, weil alle neun Übersetzungen in der JavaScript-Datei eingebettet sind.
