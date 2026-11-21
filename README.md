# Modern-Batterie-Monitor

Eine responsive Lovelace-Karte für Home Assistant. Sie findet Batterie-Prozentwerte und binäre „Batterie leer“-Sensoren, gruppiert die Geräte nach ihren Bereichen und zeigt den Ladestand als feingranulare, farbwechselnde Batterie an.

## Funktionen

- Erkennt `sensor`- und `binary_sensor`-Entitäten mit `device_class: battery`.
- Verwendet Binärsensoren als Status „Niedrig“ oder „OK“, ohne einen Prozentwert zu erfinden.
- Ordnet Geräte über die Entitäts- und Geräteregistrierung den Home-Assistant-Bereichen zu.
- Filtert nach niedrigem Stand und fehlendem Raum; Suche und Sortierung sind enthalten.
- Die Batterieanzeige hat zehn Segmente und füllt das jeweilige Segment proportional bis auf den exakten Sensorwert.
- Langer Druck auf Gerätename, Batterieanzeige oder Wert öffnet den Home-Assistant-Dialog „Mehr Informationen“.
- Schnellkonfiguration für Anzeigenamen, Ausblenden, Grenzwert und Benachrichtigungen.
- Schätzt den letzten Batterietausch aus dem Recorder-Verlauf: Prozentwerte werden bei einem starken Sprung auf mindestens 80 % erkannt; Binärsensoren bei einem Wechsel von „niedrig“ zu „OK“.

## Installation mit HACS

1. In HACS unter **Integrationen / Frontend** (Dashboard) die **benutzerdefinierten Repositories** öffnen.
2. Dieses GitHub-Repository als Kategorie **Dashboard** hinzufügen.
3. **Modern-Batterie-Monitor** installieren und Home Assistant bzw. den Browser neu laden.
4. Im Dashboard eine manuelle Karte hinzufügen und die Konfiguration aus [`lovelace-example.yaml`](lovelace-example.yaml) verwenden.

Wenn HACS die Ressource nicht automatisch registriert, unter **Einstellungen → Dashboards → Ressourcen** die JavaScript-Datei als Typ **JavaScript-Modul** eintragen. HACS stellt die Datei üblicherweise unter `/hacsfiles/modern-batterie-monitor.js` bereit.

## Manuelle Installation

1. Kopiere `modern-batterie-monitor.js` in `www/` in deinem Home-Assistant-Konfigurationsverzeichnis.
2. Registriere `/local/modern-batterie-monitor.js` unter **Einstellungen → Dashboards → Ressourcen** als **JavaScript-Modul**.
3. Füge die Beispielkarte aus [`lovelace-example.yaml`](lovelace-example.yaml) zu einem Dashboard hinzu.

## Optionen

| Option | Standard | Bedeutung |
| --- | --- | --- |
| `title` | `Batterien` | Überschrift der Karte |
| `low_threshold` | `25` | Prozentwert, ab dem ein Prozent-Sensor als niedrig zählt |
| `hidden_entities` | `[]` | Entity-IDs, die ausgeblendet werden sollen |
| `name_overrides` | `{}` | Anzeigenamen pro Entity-ID |
| `notifications_enabled` | `false` | Benachrichtigung bei neu niedrigem Stand einschalten |
| `notification_service` | `""` | Benachrichtigungsdienst, zum Beispiel `notify.mobile_app_handy` |

Die **Konfiguration** in der Karte speichert ihre Schnelländerungen im Browserprofil. Für eine dashboardweite, geräteübergreifende Konfiguration nutze die Optionen des Karteneditors. Benachrichtigungen aus der Karte werden nur gesendet, während die Karte in einem geöffneten Home-Assistant-Dashboard aktiv ist. Für Hintergrundbenachrichtigungen sollte zusätzlich eine Home-Assistant-Automation eingerichtet werden.

## Hinweise zum Batterietauschdatum

Das Datum ist eine Schätzung aus aufgezeichneten Zustandsänderungen, kein bestätigtes Ereignis. Es wird nur angezeigt, wenn der Recorder einen plausiblen Wechsel enthält. Ist die Historie nicht vorhanden oder wurde ein Sensor neu angelegt, kann die Karte kein Datum bestimmen. Auch ein zurückgesetzter Sensorwert kann wie ein Batterietausch aussehen.

## Datenschutz und Voraussetzungen

Die Karte sendet keine Daten nach außen. Für Raumzuordnungen fragt sie die Home-Assistant-Entitäts-, Geräte- und Bereichsregistrierung ab; dafür ist ein Benutzer mit ausreichenden Home-Assistant-Rechten nötig. Für die Tauschschätzung muss der Recorder die Entitätshistorie gespeichert haben.

