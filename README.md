# Modern-Batterie-Monitor

**Version 1.6.2**

Versionen folgen [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`. Neue Funktionen erhöhen MINOR, rückwärtskompatible Fehlerkorrekturen PATCH und inkompatible Änderungen MAJOR.

Eine responsive Lovelace-Karte für Home Assistant. Sie findet Batterie-Prozentwerte und binäre „Batterie leer“-Sensoren, gruppiert die Geräte nach ihren Bereichen und zeigt den Ladestand als feingranulare, farbwechselnde Batterie an.

## Funktionen

- Erkennt `sensor`- und `binary_sensor`-Entitäten mit `device_class: battery`.
- Verwendet Binärsensoren als Status „Niedrig“ oder „OK“, ohne einen Prozentwert zu erfinden.
- Ordnet Geräte über die Entitäts- und Geräteregistrierung den Home-Assistant-Bereichen zu.
- Zeigt die Baumstruktur **Raum → Gerät** wie in der Vorschau; mehrere Batterie-Entitäten desselben Geräts erscheinen als ein Geräteeintrag.
- Verwendet den Gerätenamen aus der Geräteregistrierung und zeigt keine Batterie-Entity-Namen in der Geräteliste an. Ein Stiftsymbol öffnet die Umbenennung direkt.
- Zeigt passende Raum- und Geräte-Icons, zum Beispiel für Schlafzimmer, Flur, Rauchmelder, Türkontakt, Bewegung und Klima.
- Räume lassen sich einzeln sowie mit den Glas-Schaltflächen global auf- und zuklappen.
- Sortiert Räume alphabetisch, setzt „Ohne Raum“ immer ans Ende und ordnet Geräte innerhalb der Räume alphabetisch.
- Filtert nach niedrigem Stand und fehlendem Raum; die Suche findet Geräte und Räume.
- Die Batterie steht rechts neben dem Prozentwert, bündig zum OK-Button der Binärsensoren. Ihre Anzeige ist genauso breit wie der OK-Button; der silberne Rahmen ist 1 px stark. Die Füllung reagiert stufenlos auf jeden Prozentpunkt und wechselt je nach Ladestand von Rot über Gelb zu Grün.
- Geräte mit reinem Binärsensor zeigen statt eines Batterie-Symbols eine Glas-Statusschaltfläche mit „OK“, „Niedrig“ oder „Unbekannt“; die grüne oder rote Statusfarbe bleibt erhalten.
- Filter-, Konfigurations- und Baum-Schaltflächen verwenden die gleiche abgerundete Glasform. Der Konfigurationsbutton steht direkt neben der Suche.
- Aktive Filter sowie die passenden Schaltflächen zum Auf- und Zuklappen haben einen grünen Rahmen und weiße Schrift. Inaktive Schaltflächen bleiben grau; Hover verhält sich einheitlich.
- Gerätekategorie-Icons bleiben neutral und werden nicht nach dem Batteriestatus eingefärbt. Binäre Sensoren behalten ihren eigenen Statusknopf.
- Die Warnschwelle lässt sich im Konfigurationsfenster und im Karteneditor über einen Prozent-Slider einstellen.
- Benutzeroberflächentexte liegen in separaten JSON-Dateien im Ordner translations/: Arabisch, Deutsch, Englisch, Spanisch, Französisch, Niederländisch, Polnisch, Russisch und Türkisch. Die Karte verwendet ausschließlich die in Home Assistant eingestellte Sprache; Geräte- und Raumnamen bleiben unverändert.
- Erkennt und filtert Smartphones, Tablets, Smartwatches und Fitness-Tracker standardmäßig automatisch. Dazu nutzt die Karte die Home-Assistant-Mobile-App-Integration und Hinweise in Gerätename, Modell sowie Kennung. Die Geräte können im Einstellungsfenster oder Karteneditor wieder eingeblendet werden.
- Zeigt für jedes Gerät nur den Gerätenamen an; Batterie-Entity-Namen erscheinen nicht in der Geräteübersicht.
- Markiert Batterie-Binärsensoren bei Normalstatus grün und bei Niedrigstatus rot.
- Langer Druck auf Gerätename, Batterieanzeige, Prozentwert oder Binärstatus öffnet den Home-Assistant-Dialog „Mehr Informationen“.
- Schnellkonfiguration für Anzeigenamen, Ausblenden, Grenzwert und Benachrichtigungen.
- Das Konfigurationsfenster bleibt bei laufenden Home-Assistant-Aktualisierungen geöffnet und behält ungespeicherte Eingaben.
- Schätzt den letzten Batterietausch aus dem Recorder-Verlauf: Prozentwerte werden bei einem starken Sprung auf mindestens 80 % erkannt; Binärsensoren bei einem Wechsel von „niedrig“ zu „OK“.

## Installation mit HACS

1. In HACS über das Menü **Benutzerdefinierte Repositories** öffnen.
2. `https://github.com/Letasil/Modern-Batterie-Monitor` als Kategorie **Dashboard** hinzufügen.
3. **Modern-Batterie-Monitor** installieren und Home Assistant bzw. den Browser neu laden.
4. Im Dashboard eine manuelle Karte hinzufügen und die Konfiguration aus [`lovelace-example.yaml`](lovelace-example.yaml) verwenden.
5. Den Ordner `translations/` zusammen mit der JavaScript-Datei beibehalten; die Karte lädt automatisch die Datei für die in Home Assistant eingestellte Sprache.

Wenn HACS die Ressource nicht automatisch registriert, unter **Einstellungen → Dashboards → Ressourcen** die JavaScript-Datei als Typ **JavaScript-Modul** eintragen. HACS speichert Dashboard-Dateien im Home-Assistant-Konfigurationsverzeichnis unter `www/community/Modern-Batterie-Monitor/`.

## Manuelle Installation

1. Kopiere `modern-batterie-monitor.js` und den vollständigen Ordner `translations/` nebeneinander in `www/` in deinem Home-Assistant-Konfigurationsverzeichnis.
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
| `show_mobile_devices` | `false` | Handys, Tablets, Smartwatches und Fitness-Tracker ebenfalls anzeigen |

Die **Konfiguration** in der Karte speichert ihre Schnelländerungen im Browserprofil. Für eine dashboardweite, geräteübergreifende Konfiguration nutze die Optionen des Karteneditors. Benachrichtigungen aus der Karte werden nur gesendet, während die Karte in einem geöffneten Home-Assistant-Dashboard aktiv ist. Für Hintergrundbenachrichtigungen sollte zusätzlich eine Home-Assistant-Automation eingerichtet werden.

Der Gerätefilter arbeitet mit den in Home Assistant verfügbaren Integrations-, Namens- und Modellangaben. Je nach Gerät kann die automatische Erkennung daher einzelne Treffer übersehen oder ein Smart-Home-Gerät falsch zuordnen. Mit **„Handys, Tablets, Smartwatches und Fitness-Tracker ebenfalls anzeigen“** lässt sich der Filter ausschalten.

## Wann neue Geräte gefunden werden

Beim Laden der Karte werden die Home-Assistant-Registrierungen für Entitäten, Geräte und Bereiche abgefragt. Die Karte prüft danach erneut, sobald Home Assistant einen Zustandssatz mit einer neuen Entität der Geräteklasse `battery` übergibt. Das ist ereignisgesteuert und kein periodischer Timer. Ein neu hinzugefügter Batteriesensor erscheint, sobald Home Assistant ihn in seinen Zuständen bereitstellt; seine Raum- und Gerätenamen werden beim anschließenden Registerabruf zugeordnet.

## Hinweise zum Batterietauschdatum

Das Datum ist eine Schätzung aus aufgezeichneten Zustandsänderungen, kein bestätigtes Ereignis. Es wird nur angezeigt, wenn der Recorder einen plausiblen Wechsel enthält. Ist die Historie nicht vorhanden oder wurde ein Sensor neu angelegt, kann die Karte kein Datum bestimmen. Auch ein zurückgesetzter Sensorwert kann wie ein Batterietausch aussehen.

## Datenschutz und Voraussetzungen

Die Karte sendet keine Daten nach außen. Für Raumzuordnungen fragt sie die Home-Assistant-Entitäts-, Geräte- und Bereichsregistrierung ab; dafür ist ein Benutzer mit ausreichenden Home-Assistant-Rechten nötig. Für die Tauschschätzung muss der Recorder die Entitätshistorie gespeichert haben.
