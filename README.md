# Modern-Batterie-Monitor

**Version 1.3.0**

Eine responsive Lovelace-Karte für Home Assistant. Sie findet Batterie-Prozentwerte und binäre „Batterie leer“-Sensoren, gruppiert die Geräte nach ihren Bereichen und zeigt den Ladestand als feingranulare, farbwechselnde Batterie an.

## Funktionen

- Erkennt `sensor`- und `binary_sensor`-Entitäten mit `device_class: battery`.
- Verwendet Binärsensoren als Status „Niedrig“ oder „OK“, ohne einen Prozentwert zu erfinden.
- Ordnet Geräte über die Entitäts- und Geräteregistrierung den Home-Assistant-Bereichen zu.
- Zeigt die Baumstruktur **Raum → Gerät** wie in der Vorschau; mehrere Batterie-Entitäten desselben Geräts erscheinen als ein Geräteeintrag.
- Verwendet den Gerätenamen aus der Geräteregistrierung und zeigt keine Batterie-Entity-Namen in der Geräteliste an. Ein Stiftsymbol öffnet die Umbenennung direkt.
- Zeigt passende Raum- und Geräte-Icons, zum Beispiel für Schlafzimmer, Flur, Rauchmelder, Türkontakt, Bewegung und Klima.
- Räume lassen sich einzeln sowie mit den Glas-Schaltflächen global auf- und zuklappen.
- Hält den Bereich „Ohne Raum“ bei jeder Sortierung am Ende.
- Filtert nach niedrigem Stand und fehlendem Raum; Suche und Sortierung sind enthalten.
- Die Batterieanzeige greift die glänzende, dreidimensionale Batterie aus der Referenz-App auf: metallischer Rahmen, Lichtreflexe und farbiger Verlauf. Die Füllung reagiert stufenlos auf jeden Prozentpunkt und wechselt je nach Ladestand von Rot über Gelb zu Grün.
- Die Filter-, Konfigurations- und Baum-Schaltflächen verwenden eine einheitliche Glasoptik. Binärsensoren behalten ihren gut sichtbaren Statushinweis „Binärsensor“ sowie die grüne oder rote Statusfarbe.
- Erkennt und filtert Handys, Tablets und Wearables standardmäßig automatisch. Dazu nutzt die Karte die Home-Assistant-Mobile-App-Integration und Hinweise in Gerätename, Modell sowie Kennung. Die Geräte können im Einstellungsfenster oder Karteneditor wieder eingeblendet werden.
- Zeigt den Gerätenamen über dem Sensor-Namen; der übersetzte Entity-Name wie „Batterie fast leer“ steht als Sensorbezeichnung in der untergeordneten Baumebene.
- Markiert Batterie-Binärsensoren bei Normalstatus grün und bei Niedrigstatus rot.
- Langer Druck auf Gerätename, Batterieanzeige oder Wert öffnet den Home-Assistant-Dialog „Mehr Informationen“.
- Schnellkonfiguration für Anzeigenamen, Ausblenden, Grenzwert und Benachrichtigungen.
- Das Konfigurationsfenster bleibt bei laufenden Home-Assistant-Aktualisierungen geöffnet und behält ungespeicherte Eingaben.
- Schätzt den letzten Batterietausch aus dem Recorder-Verlauf: Prozentwerte werden bei einem starken Sprung auf mindestens 80 % erkannt; Binärsensoren bei einem Wechsel von „niedrig“ zu „OK“.

## Installation mit HACS

1. In HACS über das Menü **Benutzerdefinierte Repositories** öffnen.
2. `https://github.com/Letasil/Modern-Batterie-Monitor` als Kategorie **Dashboard** hinzufügen.
3. **Modern-Batterie-Monitor** installieren und Home Assistant bzw. den Browser neu laden.
4. Im Dashboard eine manuelle Karte hinzufügen und die Konfiguration aus [`lovelace-example.yaml`](lovelace-example.yaml) verwenden.

Wenn HACS die Ressource nicht automatisch registriert, unter **Einstellungen → Dashboards → Ressourcen** die JavaScript-Datei als Typ **JavaScript-Modul** eintragen. HACS speichert Dashboard-Dateien im Home-Assistant-Konfigurationsverzeichnis unter `www/community/Modern-Batterie-Monitor/`.

## Manuelle Installation

1. Kopiere `modern-batterie-monitor.js` in `www/` in deinem Home-Assistant-Konfigurationsverzeichnis.
2. Registriere `/local/modern-batterie-monitor.js` unter **Einstellungen → Dashboards → Ressourcen** als **JavaScript-Modul**.
3. Füge die Beispielkarte aus [`lovelace-example.yaml`](lovelace-example.yaml) zu einem Dashboard hinzu.

## Optionen

| Option | Standard | Bedeutung |
| --- | --- | --- |
| `title` | `Batterien` | Überschrift der Karte |
| `low_threshold` | `25` | Prozentwert, ab dem ein Prozent-Sensor als niedrig zählt |
| `hidden_entities` | `[]` | Geräte-IDs oder zugehörige Entity-IDs, die ausgeblendet werden sollen |
| `name_overrides` | `{}` | Anzeigenamen pro Geräte-ID oder Entity-ID |
| `notifications_enabled` | `false` | Benachrichtigung bei neu niedrigem Stand einschalten |
| `notification_service` | `""` | Benachrichtigungsdienst, zum Beispiel `notify.mobile_app_handy` |
| `show_mobile_devices` | `false` | Handys, Tablets und Wearables ebenfalls anzeigen |

Die **Konfiguration** in der Karte speichert ihre Schnelländerungen im Browserprofil. Für eine dashboardweite, geräteübergreifende Konfiguration nutze die Optionen des Karteneditors. Benachrichtigungen aus der Karte werden nur gesendet, während die Karte in einem geöffneten Home-Assistant-Dashboard aktiv ist. Für Hintergrundbenachrichtigungen sollte zusätzlich eine Home-Assistant-Automation eingerichtet werden.

Der Gerätefilter arbeitet mit den in Home Assistant verfügbaren Integrations-, Namens- und Modellangaben. Je nach Gerät kann die automatische Erkennung daher einzelne Treffer übersehen oder ein Smart-Home-Gerät falsch zuordnen. Mit **„Handys, Tablets und Wearables ebenfalls anzeigen“** lässt sich der Filter ausschalten.

## Hinweise zum Batterietauschdatum

Das Datum ist eine Schätzung aus aufgezeichneten Zustandsänderungen, kein bestätigtes Ereignis. Es wird nur angezeigt, wenn der Recorder einen plausiblen Wechsel enthält. Ist die Historie nicht vorhanden oder wurde ein Sensor neu angelegt, kann die Karte kein Datum bestimmen. Auch ein zurückgesetzter Sensorwert kann wie ein Batterietausch aussehen.

## Datenschutz und Voraussetzungen

Die Karte sendet keine Daten nach außen. Für Raumzuordnungen fragt sie die Home-Assistant-Entitäts-, Geräte- und Bereichsregistrierung ab; dafür ist ein Benutzer mit ausreichenden Home-Assistant-Rechten nötig. Für die Tauschschätzung muss der Recorder die Entitätshistorie gespeichert haben.

