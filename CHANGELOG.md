# Änderungsprotokoll

## 1.5.0 — 2026-11-22

- Konfigurationsbutton links neben das Suchfeld gesetzt.
- Warnschwelle als Prozent-Slider im Schnellmenü und Karteneditor ergänzt.
- Silbernen Batterierahmen verkleinert, ohne den farbigen Ladestand und Glanzverlauf zu ändern.
- Geöffnete Raum- und Gerätegruppen erhalten einen türkisfarbenen Glaszustand; geschlossene Gruppen bleiben neutral. Die Button-Schriftfarbe bleibt einheitlich und kontrastreich.
- Oberflächentexte für Deutsch und Englisch lokalisiert; die Karte folgt standardmäßig der Home-Assistant-Sprache und bietet eine Sprachwahl in den Einstellungen.
- Gerätereigene Namen und Raumnamen bleiben unverändert.
- Registrierungen werden erneut abgefragt, wenn ein neuer Batterie-Sensor in Home-Assistant-Zuständen auftaucht.
- Versionsnummern folgen Semantic Versioning.

## 1.4.0 — 2026-11-22

- Batterie-Illustration weiter an die glänzende Referenz-App angelehnt; die Füllung ist glatt, stufenlos und behält den Farbumschlag.
- Reine Binärsensoren zeigen rechts eine Glas-Statusschaltfläche statt eines Batterie-Symbols; „OK“, „Niedrig“ und „Unbekannt“ bleiben farblich unterscheidbar.
- Buttons auf die Form der Filterleiste vereinheitlicht und Konfiguration neben das Suchfeld gesetzt.
- Sortierauswahl direkt mit der Baumansicht verbunden und die aktuelle Auswahl nach dem Sortieren beibehalten.

## 1.3.0 — 2026-11-21

- Gerätebaum auf **Raum → Gerät** vereinfacht; mehrere Batterie-Sensoren eines Geräts werden in einer Zeile zusammengefasst.
- Gerätenamen aus der Geräteregistrierung verwenden und Batterie-Entity-Namen aus der Liste entfernen.
- Raum-Icons und Gerätekategorie-Icons ergänzt; das Stiftsymbol führt direkt zur Namensänderung.
- Raumgruppen und Gerätezeilen optisch an `battery-dashboard-treeview.html` angelehnt; Buttons und Filter in Glasoptik gestaltet.
- Binärsensor-Hinweis und grüne/rote Statusdarstellung erhalten; Batterieanzeige behält ihre stufenlose, farbige Füllung.

## 1.2.0 — 2026-11-21

- Handys, Tablets und Wearables werden anhand der Mobile-App-Integration und Gerätehinweisen standardmäßig aus der Übersicht gefiltert; der Filter ist in den Einstellungen und im Karteneditor abschaltbar.
- Batterieanzeige an die glänzende Batterie der referenzierten App angelehnt: metallischer Rahmen, Lichtreflexe, Farbverlauf und stufenloser Prozentfüllstand.
- Dokumentation und Beispielkonfiguration auf die neue Version aktualisiert.

## 1.1.0 — 2026-11-21

- Einstellungsdialog bleibt bei Home-Assistant-Aktualisierungen geöffnet und erhält ungespeicherte Eingaben.
- Geräteüberschriften verwenden nach Möglichkeit den Namen des Home-Assistant-Geräts statt den übersetzten Namen des Batterie-Sensors.
- Baumansicht auf Raum → Gerät → Batterie-Sensor erweitert.
- Schaltflächen „Alles aufklappen“ und „Alles zuklappen“ ergänzt; individuelle Aufklappzustände bleiben bei Aktualisierungen erhalten.
- Gruppe „Ohne Raum“ bleibt bei allen Sortierungen am Ende.
- Binäre Batterie-Symbole zeigen Normalstatus grün und Niedrigstatus rot.
- Glass-Effekt der Schaltflächen an Modern-Thermostat angeglichen.
- Konfigurationsfenster auf Desktop und Mobilgeräten vergrößert.

## 1.0.0 — 2026-11-21

- Erste Version der Lovelace-Karte mit Batterie-Sensorerkennung, Raumgruppen, Filtern, Suche, Umbenennen, Ausblenden und Austauschdatum-Schätzung.

