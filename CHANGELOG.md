# Änderungsprotokoll

## 1.7.0

- Das Konfigurationsmenü öffnet sich im sichtbaren Fenster und behält bei Statusupdates Scrollposition und Eingabefokus.
- Eigene Anzeigenamen gelten nur in der Batterieanzeige.
- Die Karte übernimmt Bereichsicons aus Home Assistant und erkennt weitere Gerätetypen.

## 1.6.5 — 2026-11-22

- Marketplace-Release stellt `modern-batterie-monitor.js` als einzelne Datei bereit; die Karte benötigt beim Installieren keine separate Übersetzungsdatei.
- Übersetzungen für alle neun unterstützten Sprachen sind zusätzlich in der JavaScript-Datei eingebettet und fallen bei fehlenden JSON-Dateien darauf zurück.
- HACS-Manifest und Release-Workflow auf den direkten JavaScript-Download abgestimmt.
- Release- und Validierungs-Workflows sowie eine Prüfung der Installations-ZIP ergänzt.

## 1.6.4 — 2026-11-22

- README auf den Funktionsumfang des ersten Releases konzentriert und um drei erklärende Screenshots ergänzt.

## 1.6.3 — 2026-11-22

- Batteriehöhe an den OK-Statusbutton angepasst: 38 px am Desktop und 36 px auf kleinen Displays.
- Geräteanzahl in einem zugeklappten Raum wird bei einer vorhandenen Batteriewarnung gelb hinterlegt; geöffnet bleibt die Anzeige neutral.

## 1.6.2 — 2026-11-22

- Prozentwert und Batterieanzeige getauscht; der Prozentwert steht links von der Batterie.
- Batterieanzeige bündig rechts ausgerichtet und auf dieselbe Breite wie der OK-Statusbutton gesetzt.
- Sichtbaren silbernen Rahmen auf höchstens 1 px reduziert.

## 1.6.1 — 2026-11-22

- Sortierfeld und Sortiercode entfernt; die Räume und Gerätenamen bleiben alphabetisch sortiert, „Ohne Raum“ steht immer am Ende.
- Suchfeld und Konfiguration rechtsbündig angeordnet.
- Aktive Filter- und Auf-/Zuklapp-Schaltflächen markieren ihren Zustand nur mit grünem Rahmen und weißer Schrift; inaktive Beschriftungen bleiben grau.
- Hover-Effekt zwischen Filter-Tabs und Glas-Schaltflächen vereinheitlicht.
- Batterierahmen auf maximal 2 px sichtbare Stärke reduziert.
- Sprachwahl entfernt; Karte und Karteneditor verwenden ausschließlich die Home-Assistant-Sprache.
- Gerätefiltertexte in den neun Übersetzungen angepasst; Wearables sind nun als Smartwatches und Fitness-Tracker übersetzt.

## 1.6.0 — 2026-11-22

- Inaktive Umschalt- und Gruppenbeschriftungen wieder grau; aktive hell. Button-Texte sind normalgewichtig statt fett.
- Grüne Füllungen an Gruppenflächen entfernt; die offene und geschlossene Ansicht bleibt dezent unterscheidbar.
- Gerätekategorie-Icons neutralisiert; Binärsensoren zeigen ihren Status weiterhin im separaten Statusknopf.
- Übersetzungen aus dem JavaScript in `translations/` ausgelagert und Dateien für Arabisch, Deutsch, Englisch, Spanisch, Französisch, Niederländisch, Polnisch, Russisch und Türkisch ergänzt.
- Sprachwahl im Schnellmenü und Karteneditor erweitert; automatisch wird weiterhin die Home-Assistant-Sprache verwendet.

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
