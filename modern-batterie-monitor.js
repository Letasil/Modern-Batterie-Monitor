/* Modern-Batterie-Monitor · Lovelace custom card · 1.7.0 */
const M_BATTERY_VERSION = "1.7.0";
const M_BATTERY_DEFAULTS = {
  type: "custom:modern-batterie-monitor",
  title: "Batterien",
  low_threshold: 25,
  hidden_entities: [],
  name_overrides: {},
  notifications_enabled: false,
  notification_service: "",
  show_mobile_devices: false,
};

const M_BATTERY_TRANSLATION_LANGUAGES = new Set(["ar","de","en","es","fr","nl","pl","ru","tr"]);

/* BEGIN EMBEDDED TRANSLATIONS */
const M_BATTERY_EMBEDDED_TRANSLATIONS = {
  "ar": {
    "smart_home": "Smart Home",
    "default_title": "البطاريات",
    "status_auto": "تم الاكتشاف تلقائيًا",
    "waiting_ha": "بانتظار Home Assistant",
    "overview": "نظرة عامة على الأجهزة",
    "subtitle": "جميع مستشعرات البطارية وتحذيراتها مرتبة حسب الغرفة.",
    "detected_devices": "الأجهزة المكتشفة",
    "device_unit": "جهاز",
    "devices": "أجهزة",
    "shown_hidden": "المعروض {shown} · المخفي {hidden}",
    "low_battery": "البطارية منخفضة",
    "under_binary": "أقل من {threshold}% أو تحذير ثنائي",
    "keep_watch": "راقب مستويات البطارية",
    "rooms_with_devices": "الغرف التي تحتوي على أجهزة",
    "room_unit": "غرفة",
    "rooms": "غرف",
    "no_area_separate": "تظهر الأجهزة التي بلا غرفة بشكل منفصل",
    "all_devices": "كل الأجهزة",
    "low_filter": "بطارية منخفضة",
    "no_room": "بلا غرفة",
    "search": "ابحث عن جهاز أو غرفة…",
    "no_room_heading": "أجهزة بلا غرفة",
    "room_heading": "الأجهزة حسب الغرفة",
    "one_device": "جهاز واحد ({count})",
    "many_devices": "{count} أجهزة",
    "expand_all": "توسيع الكل",
    "collapse_all": "طي الكل",
    "area_assign": "عيّن غرفة في Home Assistant",
    "batteries_in_room": "أجهزة البطارية في هذه الغرفة",
    "no_matching": "لا توجد أجهزة تطابق عامل التصفية الحالي.",
    "no_sensors": "لم يتم العثور على مستشعرات بفئة جهاز «البطارية» بعد.",
    "battery_change_note": "يُقدّر تاريخ استبدال البطارية فقط عند وجود ارتفاع واضح إلى مستوى شحن مرتفع أو انتقال من منخفض إلى OK في السجل. لا يظهر التاريخ عند غياب السجل.",
    "configure_aria": "إعداد مراقب البطارية",
    "configure_title": "إعداد Modern Battery Monitor",
    "settings_button": "الإعدادات",
    "close": "إغلاق",
    "display_notifications": "العرض والإشعارات",
    "threshold": "حد انخفاض البطارية (%)",
    "notify_service": "خدمة إشعارات Home Assistant",
    "notify_note": "تعمل الإشعارات أثناء فتح هذه البطاقة في Home Assistant. للتنبيهات المستمرة، أنشئ أيضًا إجراءً آليًا في Home Assistant.",
    "enable_notifications": "الإشعار عند انخفاض البطارية لأول مرة",
    "device_filter": "فلاتر الأجهزة",
    "show_mobile": "إظهار الهواتف والأجهزة اللوحية والساعات الذكية وأساور اللياقة",
    "mobile_note": "تُخفى الأجهزة المحمولة افتراضيًا بالاستناد إلى تكامل Mobile App والاسم والطراز ومعرّفات الجهاز. فعّل هذا الخيار إذا تم التعرف على جهاز بشكل خاطئ.",
    "customize_devices": "تخصيص الأجهزة",
    "binary_sensor": "مستشعر ثنائي",
    "battery": "بطارية",
    "rename_placeholder": "تعيين الاسم المعروض",
    "hide": "إخفاء",
    "no_batteries": "لم يتم العثور على مستشعرات بطارية.",
    "cancel": "إلغاء",
    "save": "حفظ",
    "local_only": "تُحفظ تغييرات هذه القائمة السريعة في ملف المتصفح هذا؛ وتظل خيارات محرر لوحة المعلومات متاحة أيضًا.",
    "unavailable": "غير متاح",
    "low": "منخفض",
    "ok": "OK",
    "unknown": "غير معروف",
    "binary_status": "مستشعر ثنائي · الحالة {status} · آخر تحديث {time}",
    "binary_low_line": "يشير المستشعر الثنائي إلى انخفاض البطارية · آخر تحديث {time}",
    "level_unavailable": "مستوى البطارية غير متاح · آخر تحديث {time}",
    "change_battery": "استبدل البطارية قريبًا · آخر تحديث {time}",
    "last_updated": "آخر تحديث {time}",
    "low_value": "منخفض",
    "unknown_value": "—",
    "battery_unknown": "حالة البطارية غير معروفة",
    "percent_battery": "البطارية {value}%",
    "last_battery_change": "آخر استبدال للبطارية (تقديري): {date}",
    "battery_level": "مستوى البطارية",
    "binary_detail_aria": "حالة المستشعر الثنائي {status}. اضغط مطولًا لعرض التفاصيل",
    "device_detail_aria": "{name}. اضغط مطولًا لعرض التفاصيل",
    "rename_aria": "تغيير الاسم المعروض لـ {name}",
    "rename_title": "تغيير الاسم المعروض",
    "time_unknown": "الوقت غير معروف",
    "just_now": "الآن",
    "date_on": "في {date}",
    "notify_title": "البطارية منخفضة",
    "battery_low": "البطارية منخفضة",
    "generic_device": "جهاز يعمل بالبطارية",
    "last_change": "آخر استبدال للبطارية",
    "editor_title": "Modern Battery Monitor",
    "editor_hint": "تُقرأ الغرف والأجهزة تلقائيًا من تعيينات Home Assistant.",
    "editor_heading": "العنوان",
    "hidden_entities": "الكيانات المخفية (معرّف كيان واحد في كل سطر)",
    "custom_names": "أسماء مخصصة (اسم واحد في كل سطر: entity_id = الاسم)",
    "show_mobile_editor": "عرض الهواتف والأجهزة اللوحية والساعات الذكية وأساور اللياقة",
    "enable_notifications_short": "تفعيل الإشعارات",
    "notify_service_short": "خدمة الإشعارات"
  },
  "de": {
    "smart_home": "Smart Home",
    "default_title": "Batterien",
    "status_auto": "Automatisch erkannt",
    "waiting_ha": "Warte auf Home Assistant",
    "overview": "Geräteübersicht",
    "subtitle": "Alle Batterie- und Batteriewarnsensoren auf einen Blick, sortiert nach Räumen.",
    "detected_devices": "Erkannte Geräte",
    "device_unit": "Gerät",
    "devices": "Geräte",
    "shown_hidden": "{shown} angezeigt · {hidden} ausgeblendet",
    "low_battery": "Batterie niedrig",
    "under_binary": "unter {threshold} % oder Binärwarnung",
    "keep_watch": "Akkustand im Blick behalten",
    "rooms_with_devices": "Räume mit Geräten",
    "room_unit": "Raum",
    "rooms": "Räume",
    "no_area_separate": "Geräte ohne Bereich erscheinen separat",
    "all_devices": "Alle Geräte",
    "low_filter": "Niedriger Akkustand",
    "no_room": "Ohne Raum",
    "search": "Gerät oder Raum suchen…",
    "no_room_heading": "Geräte ohne Raum",
    "room_heading": "Geräte nach Raum",
    "one_device": "{count} Gerät",
    "many_devices": "{count} Geräte",
    "expand_all": "Alles aufklappen",
    "collapse_all": "Alles zuklappen",
    "area_assign": "Bereich in Home Assistant zuweisen",
    "batteries_in_room": "Batteriegeräte in diesem Raum",
    "no_matching": "Keine Geräte entsprechen dem aktuellen Filter.",
    "no_sensors": "Noch keine Sensoren mit Geräteklasse „Batterie“ gefunden.",
    "battery_change_note": "Der letzte Batterietausch wird nur geschätzt, wenn der Verlauf einen deutlichen Anstieg auf einen hohen Ladezustand oder den Wechsel von „niedrig“ zu „OK“ enthält. Fehlt der Verlauf, wird kein Datum angezeigt.",
    "configure_aria": "Batterie-Monitor konfigurieren",
    "configure_title": "Modern-Batterie-Monitor konfigurieren",
    "settings_button": "Konfiguration",
    "close": "Schließen",
    "display_notifications": "Anzeige und Benachrichtigung",
    "threshold": "Schwelle für niedrigen Akkustand (%)",
    "notify_service": "Home-Assistant-Benachrichtigungsdienst",
    "notify_note": "Benachrichtigungen laufen, solange diese Karte in Home Assistant geöffnet ist. Für dauerhaft aktive Meldungen eignet sich zusätzlich eine Home-Assistant-Automation.",
    "enable_notifications": "Benachrichtigungen bei neu niedrigem Akkustand aktivieren",
    "device_filter": "Gerätefilter",
    "show_mobile": "Handys, Tablets, Smartwatches und Fitness-Tracker anzeigen",
    "mobile_note": "Mobilgeräte werden standardmäßig anhand der Mobile-App-Integration sowie Name, Modell und Gerätekennung ausgeblendet. Diese Option zeigt sie wieder an, falls ein Gerät falsch erkannt wurde.",
    "customize_devices": "Geräte anpassen",
    "binary_sensor": "Binärsensor",
    "battery": "Batterie",
    "rename_placeholder": "Anzeigename nur in dieser Karte",
    "hide": "Ausblenden",
    "no_batteries": "Keine Batterie-Sensoren vorhanden.",
    "cancel": "Abbrechen",
    "save": "Speichern",
    "local_only": "Änderungen in diesem Schnellmenü werden in diesem Browserprofil gespeichert; die Kartenoptionen im Dashboard-Editor bleiben zusätzlich verfügbar.",
    "unavailable": "nicht verfügbar",
    "low": "niedrig",
    "ok": "OK",
    "unknown": "Unbekannt",
    "binary_status": "Binärsensor · Status {status} · Zuletzt aktualisiert {time}",
    "binary_low_line": "Binärsensor meldet niedrigen Stand · Zuletzt aktualisiert {time}",
    "level_unavailable": "Akkustand nicht verfügbar · Zuletzt aktualisiert {time}",
    "change_battery": "Batterie bald wechseln · Zuletzt aktualisiert {time}",
    "last_updated": "Zuletzt aktualisiert {time}",
    "low_value": "Niedrig",
    "unknown_value": "—",
    "battery_unknown": "Batteriestatus unbekannt",
    "percent_battery": "{value} Prozent Batterie",
    "last_battery_change": "Letzter Batterietausch (geschätzt): {date}",
    "battery_level": "Batterielevel",
    "binary_detail_aria": "Binärsensor-Status {status}. Für Gerätedetails länger drücken",
    "device_detail_aria": "{name}. Für Gerätedetails gedrückt halten",
    "rename_aria": "Anzeigename von {name} ändern",
    "rename_title": "Anzeigename ändern",
    "time_unknown": "Zeitpunkt unbekannt",
    "just_now": "gerade eben",
    "date_on": "am {date}",
    "notify_title": "Batteriestand niedrig",
    "battery_low": "Batterie niedrig",
    "generic_device": "Batteriegerät",
    "last_change": "Letzter Batterietausch",
    "editor_title": "Modern-Batterie-Monitor",
    "editor_hint": "Räume und Geräte werden automatisch aus der Home-Assistant-Geräte- und Bereichszuordnung gelesen.",
    "editor_heading": "Überschrift",
    "hidden_entities": "Ausgeblendete Entitäten (eine Entity-ID pro Zeile)",
    "custom_names": "Eigene Anzeigenamen (eine Zeile je Entität: entity_id = Anzeigename)",
    "show_mobile_editor": "Handys, Tablets, Smartwatches und Fitness-Tracker anzeigen",
    "enable_notifications_short": "Benachrichtigungen aktivieren",
    "notify_service_short": "Benachrichtigungsdienst"
  },
  "en": {
    "smart_home": "Smart Home",
    "default_title": "Batteries",
    "status_auto": "Detected automatically",
    "waiting_ha": "Waiting for Home Assistant",
    "overview": "Device overview",
    "subtitle": "All battery and battery-warning sensors at a glance, sorted by room.",
    "detected_devices": "Detected devices",
    "device_unit": "device",
    "devices": "devices",
    "shown_hidden": "{shown} shown · {hidden} hidden",
    "low_battery": "Low battery",
    "under_binary": "below {threshold}% or binary warning",
    "keep_watch": "Keep an eye on battery levels",
    "rooms_with_devices": "Rooms with devices",
    "room_unit": "room",
    "rooms": "rooms",
    "no_area_separate": "Devices without an area are listed separately",
    "all_devices": "All devices",
    "low_filter": "Low battery",
    "no_room": "No room",
    "search": "Search device or room…",
    "no_room_heading": "Devices without a room",
    "room_heading": "Devices by room",
    "one_device": "{count} device",
    "many_devices": "{count} devices",
    "expand_all": "Expand all",
    "collapse_all": "Collapse all",
    "area_assign": "Assign an area in Home Assistant",
    "batteries_in_room": "Battery devices in this room",
    "no_matching": "No devices match the current filter.",
    "no_sensors": "No sensors with the “battery” device class found yet.",
    "battery_change_note": "The last battery replacement is estimated only when history shows a clear rise to a high charge level or a change from low to OK. No date is shown when history is unavailable.",
    "configure_aria": "Configure Battery Monitor",
    "configure_title": "Configure Modern Battery Monitor",
    "settings_button": "Settings",
    "close": "Close",
    "display_notifications": "Display and notifications",
    "threshold": "Low battery threshold (%)",
    "notify_service": "Home Assistant notification service",
    "notify_note": "Notifications run while this card is open in Home Assistant. For alerts that run continuously, also create a Home Assistant automation.",
    "enable_notifications": "Notify when a battery first becomes low",
    "device_filter": "Device filters",
    "show_mobile": "Show phones, tablets, smartwatches and fitness trackers",
    "mobile_note": "Mobile devices are hidden by default using the Mobile App integration and their name, model and device identifiers. Enable this option if a device was detected incorrectly.",
    "customize_devices": "Customize devices",
    "binary_sensor": "Binary sensor",
    "battery": "Battery",
    "rename_placeholder": "Display name in this card",
    "hide": "Hide",
    "no_batteries": "No battery sensors found.",
    "cancel": "Cancel",
    "save": "Save",
    "local_only": "Changes in this quick menu are saved in this browser profile; dashboard editor options remain available too.",
    "unavailable": "unavailable",
    "low": "low",
    "ok": "OK",
    "unknown": "Unknown",
    "binary_status": "Binary sensor · Status {status} · Updated {time}",
    "binary_low_line": "Binary sensor reports low battery · Updated {time}",
    "level_unavailable": "Battery level unavailable · Updated {time}",
    "change_battery": "Replace battery soon · Updated {time}",
    "last_updated": "Updated {time}",
    "low_value": "Low",
    "unknown_value": "—",
    "battery_unknown": "Battery status unknown",
    "percent_battery": "{value} percent battery",
    "last_battery_change": "Last battery replacement (estimated): {date}",
    "battery_level": "Battery level",
    "binary_detail_aria": "Binary sensor status {status}. Long press for device details",
    "device_detail_aria": "{name}. Long press for device details",
    "rename_aria": "Change display name for {name}",
    "rename_title": "Change display name",
    "time_unknown": "Time unknown",
    "just_now": "just now",
    "date_on": "on {date}",
    "notify_title": "Low battery",
    "battery_low": "Battery low",
    "generic_device": "Battery device",
    "last_change": "Last battery replacement",
    "editor_title": "Modern Battery Monitor",
    "editor_hint": "Rooms and devices are read automatically from Home Assistant device and area assignments.",
    "editor_heading": "Heading",
    "hidden_entities": "Hidden entities (one entity ID per line)",
    "custom_names": "Custom display names (one per line: entity_id = display name)",
    "show_mobile_editor": "Show phones, tablets, smartwatches and fitness trackers",
    "enable_notifications_short": "Enable notifications",
    "notify_service_short": "Notification service"
  },
  "es": {
    "smart_home": "Smart Home",
    "default_title": "Baterías",
    "status_auto": "Detectado automáticamente",
    "waiting_ha": "Esperando a Home Assistant",
    "overview": "Resumen de dispositivos",
    "subtitle": "Todos los sensores de batería y avisos de batería, ordenados por habitación.",
    "detected_devices": "Dispositivos detectados",
    "device_unit": "dispositivo",
    "devices": "dispositivos",
    "shown_hidden": "{shown} visibles · {hidden} ocultos",
    "low_battery": "Batería baja",
    "under_binary": "por debajo del {threshold}% o aviso binario",
    "keep_watch": "Controla el nivel de batería",
    "rooms_with_devices": "Habitaciones con dispositivos",
    "room_unit": "habitación",
    "rooms": "habitaciones",
    "no_area_separate": "Los dispositivos sin habitación aparecen por separado",
    "all_devices": "Todos",
    "low_filter": "Batería baja",
    "no_room": "Sin habitación",
    "search": "Buscar dispositivo o habitación…",
    "no_room_heading": "Dispositivos sin habitación",
    "room_heading": "Dispositivos por habitación",
    "one_device": "{count} dispositivo",
    "many_devices": "{count} dispositivos",
    "expand_all": "Expandir todo",
    "collapse_all": "Contraer todo",
    "area_assign": "Asigna una habitación en Home Assistant",
    "batteries_in_room": "Dispositivos con batería en esta habitación",
    "no_matching": "Ningún dispositivo coincide con el filtro actual.",
    "no_sensors": "Aún no se han encontrado sensores con la clase «batería».",
    "battery_change_note": "El último cambio de batería solo se estima si el historial muestra una subida clara a un nivel alto o un cambio de bajo a OK. Si no hay historial, no se muestra ninguna fecha.",
    "configure_aria": "Configurar el monitor de batería",
    "configure_title": "Configurar Modern Battery Monitor",
    "settings_button": "Configuración",
    "close": "Cerrar",
    "display_notifications": "Visualización y notificaciones",
    "threshold": "Umbral de batería baja (%)",
    "notify_service": "Servicio de notificación de Home Assistant",
    "notify_note": "Las notificaciones funcionan mientras esta tarjeta está abierta en Home Assistant. Para recibir avisos continuos, crea también una automatización de Home Assistant.",
    "enable_notifications": "Avisar cuando una batería pase a nivel bajo",
    "device_filter": "Filtros de dispositivos",
    "show_mobile": "Mostrar móviles, tabletas, relojes inteligentes y pulseras de actividad",
    "mobile_note": "Los dispositivos móviles se ocultan por defecto según la integración Mobile App y su nombre, modelo e identificadores. Activa esta opción si un dispositivo se detectó incorrectamente.",
    "customize_devices": "Personalizar dispositivos",
    "binary_sensor": "Sensor binario",
    "battery": "Batería",
    "rename_placeholder": "Cambiar nombre mostrado",
    "hide": "Ocultar",
    "no_batteries": "No se encontraron sensores de batería.",
    "cancel": "Cancelar",
    "save": "Guardar",
    "local_only": "Los cambios de este menú rápido se guardan en este perfil del navegador; las opciones del editor del panel también están disponibles.",
    "unavailable": "no disponible",
    "low": "baja",
    "ok": "OK",
    "unknown": "Desconocido",
    "binary_status": "Sensor binario · Estado {status} · Actualizado {time}",
    "binary_low_line": "El sensor binario indica batería baja · Actualizado {time}",
    "level_unavailable": "Nivel de batería no disponible · Actualizado {time}",
    "change_battery": "Cambia pronto la batería · Actualizado {time}",
    "last_updated": "Actualizado {time}",
    "low_value": "Baja",
    "unknown_value": "—",
    "battery_unknown": "Estado de batería desconocido",
    "percent_battery": "Batería al {value}%",
    "last_battery_change": "Último cambio de batería (estimado): {date}",
    "battery_level": "Nivel de batería",
    "binary_detail_aria": "Estado del sensor binario {status}. Mantén pulsado para ver los detalles",
    "device_detail_aria": "{name}. Mantén pulsado para ver los detalles",
    "rename_aria": "Cambiar el nombre mostrado de {name}",
    "rename_title": "Cambiar nombre mostrado",
    "time_unknown": "Hora desconocida",
    "just_now": "justo ahora",
    "date_on": "el {date}",
    "notify_title": "Batería baja",
    "battery_low": "Batería baja",
    "generic_device": "Dispositivo con batería",
    "last_change": "Último cambio de batería",
    "editor_title": "Modern Battery Monitor",
    "editor_hint": "Las habitaciones y dispositivos se leen automáticamente de las asignaciones de Home Assistant.",
    "editor_heading": "Título",
    "hidden_entities": "Entidades ocultas (un ID de entidad por línea)",
    "custom_names": "Nombres personalizados (uno por línea: entity_id = nombre mostrado)",
    "show_mobile_editor": "Mostrar móviles, tabletas, relojes inteligentes y pulseras de actividad",
    "enable_notifications_short": "Activar notificaciones",
    "notify_service_short": "Servicio de notificación"
  },
  "fr": {
    "smart_home": "Smart Home",
    "default_title": "Batteries",
    "status_auto": "Détection automatique",
    "waiting_ha": "En attente de Home Assistant",
    "overview": "Vue des appareils",
    "subtitle": "Tous les capteurs de batterie et d’alerte batterie, classés par pièce.",
    "detected_devices": "Appareils détectés",
    "device_unit": "appareil",
    "devices": "appareils",
    "shown_hidden": "{shown} affichés · {hidden} masqués",
    "low_battery": "Batterie faible",
    "under_binary": "sous {threshold} % ou alerte binaire",
    "keep_watch": "Surveillez le niveau des batteries",
    "rooms_with_devices": "Pièces avec appareils",
    "room_unit": "pièce",
    "rooms": "pièces",
    "no_area_separate": "Les appareils sans pièce sont affichés séparément",
    "all_devices": "Tous",
    "low_filter": "Batterie faible",
    "no_room": "Sans pièce",
    "search": "Rechercher un appareil ou une pièce…",
    "no_room_heading": "Appareils sans pièce",
    "room_heading": "Appareils par pièce",
    "one_device": "{count} appareil",
    "many_devices": "{count} appareils",
    "expand_all": "Tout développer",
    "collapse_all": "Tout réduire",
    "area_assign": "Attribuez une pièce dans Home Assistant",
    "batteries_in_room": "Appareils à batterie dans cette pièce",
    "no_matching": "Aucun appareil ne correspond au filtre actuel.",
    "no_sensors": "Aucun capteur de classe « batterie » n’a encore été trouvé.",
    "battery_change_note": "Le dernier remplacement est estimé uniquement si l’historique montre une hausse nette jusqu’à un niveau élevé ou un passage de faible à OK. Aucune date n’est affichée sans historique.",
    "configure_aria": "Configurer le moniteur de batterie",
    "configure_title": "Configurer Modern Battery Monitor",
    "settings_button": "Configuration",
    "close": "Fermer",
    "display_notifications": "Affichage et notifications",
    "threshold": "Seuil de batterie faible (%)",
    "notify_service": "Service de notification Home Assistant",
    "notify_note": "Les notifications fonctionnent lorsque cette carte est ouverte dans Home Assistant. Pour des alertes continues, créez également une automatisation Home Assistant.",
    "enable_notifications": "Signaler une nouvelle batterie faible",
    "device_filter": "Filtres des appareils",
    "show_mobile": "Afficher les téléphones, tablettes, montres connectées et bracelets de fitness",
    "mobile_note": "Les appareils mobiles sont masqués par défaut grâce à l’intégration Mobile App, leur nom, leur modèle et leurs identifiants. Activez cette option si un appareil a été mal détecté.",
    "customize_devices": "Personnaliser les appareils",
    "binary_sensor": "Capteur binaire",
    "battery": "Batterie",
    "rename_placeholder": "Nom d’affichage personnalisé",
    "hide": "Masquer",
    "no_batteries": "Aucun capteur de batterie trouvé.",
    "cancel": "Annuler",
    "save": "Enregistrer",
    "local_only": "Les modifications de ce menu rapide sont enregistrées dans ce profil du navigateur ; les options de l’éditeur du tableau de bord restent disponibles.",
    "unavailable": "indisponible",
    "low": "faible",
    "ok": "OK",
    "unknown": "Inconnu",
    "binary_status": "Capteur binaire · État {status} · Mis à jour {time}",
    "binary_low_line": "Le capteur binaire signale une batterie faible · Mis à jour {time}",
    "level_unavailable": "Niveau de batterie indisponible · Mis à jour {time}",
    "change_battery": "Remplacez bientôt la batterie · Mis à jour {time}",
    "last_updated": "Mis à jour {time}",
    "low_value": "Faible",
    "unknown_value": "—",
    "battery_unknown": "État de batterie inconnu",
    "percent_battery": "Batterie à {value} %",
    "last_battery_change": "Dernier remplacement de batterie (estimé) : {date}",
    "battery_level": "Niveau de batterie",
    "binary_detail_aria": "État du capteur binaire : {status}. Appui long pour ouvrir les détails",
    "device_detail_aria": "{name}. Appui long pour ouvrir les détails",
    "rename_aria": "Modifier le nom d’affichage de {name}",
    "rename_title": "Modifier le nom d’affichage",
    "time_unknown": "Heure inconnue",
    "just_now": "à l’instant",
    "date_on": "le {date}",
    "notify_title": "Batterie faible",
    "battery_low": "Batterie faible",
    "generic_device": "Appareil à batterie",
    "last_change": "Dernier remplacement de batterie",
    "editor_title": "Modern Battery Monitor",
    "editor_hint": "Les pièces et appareils sont lus automatiquement depuis les affectations Home Assistant.",
    "editor_heading": "Titre",
    "hidden_entities": "Entités masquées (un ID d’entité par ligne)",
    "custom_names": "Noms personnalisés (un par ligne : entity_id = nom affiché)",
    "show_mobile_editor": "Afficher les téléphones, tablettes, montres connectées et bracelets de fitness",
    "enable_notifications_short": "Activer les notifications",
    "notify_service_short": "Service de notification"
  },
  "nl": {
    "smart_home": "Smart Home",
    "default_title": "Batterijen",
    "status_auto": "Automatisch herkend",
    "waiting_ha": "Wachten op Home Assistant",
    "overview": "Apparaatoverzicht",
    "subtitle": "Alle batterij- en batterijwaarschuwingssensoren, gesorteerd op ruimte.",
    "detected_devices": "Herkende apparaten",
    "device_unit": "apparaat",
    "devices": "apparaten",
    "shown_hidden": "{shown} zichtbaar · {hidden} verborgen",
    "low_battery": "Batterij bijna leeg",
    "under_binary": "onder {threshold}% of binaire waarschuwing",
    "keep_watch": "Houd het batterijniveau in de gaten",
    "rooms_with_devices": "Ruimtes met apparaten",
    "room_unit": "ruimte",
    "rooms": "ruimtes",
    "no_area_separate": "Apparaten zonder ruimte staan apart vermeld",
    "all_devices": "Alle apparaten",
    "low_filter": "Lage batterij",
    "no_room": "Geen ruimte",
    "search": "Zoek apparaat of ruimte…",
    "no_room_heading": "Apparaten zonder ruimte",
    "room_heading": "Apparaten per ruimte",
    "one_device": "{count} apparaat",
    "many_devices": "{count} apparaten",
    "expand_all": "Alles uitklappen",
    "collapse_all": "Alles inklappen",
    "area_assign": "Wijs een ruimte toe in Home Assistant",
    "batteries_in_room": "Batterijapparaten in deze ruimte",
    "no_matching": "Geen apparaten voldoen aan het huidige filter.",
    "no_sensors": "Nog geen sensoren met apparaatklasse ‘batterij’ gevonden.",
    "battery_change_note": "De laatste batterijvervanging wordt alleen geschat als de geschiedenis een duidelijke stijging naar een hoge lading of een omschakeling van laag naar OK laat zien. Zonder geschiedenis wordt geen datum getoond.",
    "configure_aria": "Batterijmonitor configureren",
    "configure_title": "Modern Battery Monitor configureren",
    "settings_button": "Configuratie",
    "close": "Sluiten",
    "display_notifications": "Weergave en meldingen",
    "threshold": "Drempel voor lage batterij (%)",
    "notify_service": "Home Assistant-meldingsservice",
    "notify_note": "Meldingen werken zolang deze kaart openstaat in Home Assistant. Maak voor blijvende meldingen ook een Home Assistant-automatisering.",
    "enable_notifications": "Melden wanneer een batterij voor het eerst laag is",
    "device_filter": "Apparaatfilters",
    "show_mobile": "Telefoons, tablets, smartwatches en fitnesstrackers tonen",
    "mobile_note": "Mobiele apparaten worden standaard verborgen op basis van de Mobile App-integratie, naam, model en apparaat-ID. Schakel deze optie in als een apparaat verkeerd is herkend.",
    "customize_devices": "Apparaten aanpassen",
    "binary_sensor": "Binaire sensor",
    "battery": "Batterij",
    "rename_placeholder": "Weergavenaam aanpassen",
    "hide": "Verbergen",
    "no_batteries": "Geen batterijsensoren gevonden.",
    "cancel": "Annuleren",
    "save": "Opslaan",
    "local_only": "Wijzigingen in dit snelmenu worden in dit browserprofiel opgeslagen; opties in de dashboard-editor blijven ook beschikbaar.",
    "unavailable": "niet beschikbaar",
    "low": "laag",
    "ok": "OK",
    "unknown": "Onbekend",
    "binary_status": "Binaire sensor · Status {status} · Bijgewerkt {time}",
    "binary_low_line": "Binaire sensor meldt lage batterij · Bijgewerkt {time}",
    "level_unavailable": "Batterijniveau niet beschikbaar · Bijgewerkt {time}",
    "change_battery": "Vervang de batterij binnenkort · Bijgewerkt {time}",
    "last_updated": "Bijgewerkt {time}",
    "low_value": "Laag",
    "unknown_value": "—",
    "battery_unknown": "Batterijstatus onbekend",
    "percent_battery": "Batterij {value}%",
    "last_battery_change": "Laatste batterijvervanging (geschat): {date}",
    "battery_level": "Batterijniveau",
    "binary_detail_aria": "Status binaire sensor {status}. Houd ingedrukt voor apparaatdetails",
    "device_detail_aria": "{name}. Houd ingedrukt voor apparaatdetails",
    "rename_aria": "Weergavenaam van {name} wijzigen",
    "rename_title": "Weergavenaam wijzigen",
    "time_unknown": "Tijdstip onbekend",
    "just_now": "zojuist",
    "date_on": "op {date}",
    "notify_title": "Batterij bijna leeg",
    "battery_low": "Batterij bijna leeg",
    "generic_device": "Batterijapparaat",
    "last_change": "Laatste batterijvervanging",
    "editor_title": "Modern Battery Monitor",
    "editor_hint": "Ruimtes en apparaten worden automatisch uit de Home Assistant-toewijzingen gelezen.",
    "editor_heading": "Koptekst",
    "hidden_entities": "Verborgen entiteiten (één entity-ID per regel)",
    "custom_names": "Aangepaste namen (één per regel: entity_id = weergavenaam)",
    "show_mobile_editor": "Telefoons, tablets, smartwatches en fitnesstrackers tonen",
    "enable_notifications_short": "Meldingen inschakelen",
    "notify_service_short": "Meldingsservice"
  },
  "pl": {
    "smart_home": "Smart Home",
    "default_title": "Baterie",
    "status_auto": "Wykryto automatycznie",
    "waiting_ha": "Oczekiwanie na Home Assistant",
    "overview": "Przegląd urządzeń",
    "subtitle": "Wszystkie czujniki baterii i ostrzeżenia o baterii, uporządkowane według pomieszczeń.",
    "detected_devices": "Wykryte urządzenia",
    "device_unit": "urządzenie",
    "devices": "urządzeń",
    "shown_hidden": "Widoczne: {shown} · Ukryte: {hidden}",
    "low_battery": "Niski poziom baterii",
    "under_binary": "poniżej {threshold}% lub ostrzeżenie binarne",
    "keep_watch": "Monitoruj poziom baterii",
    "rooms_with_devices": "Pomieszczenia z urządzeniami",
    "room_unit": "pomieszczenie",
    "rooms": "pomieszczeń",
    "no_area_separate": "Urządzenia bez pomieszczenia są wyświetlane osobno",
    "all_devices": "Wszystkie urządzenia",
    "low_filter": "Niski poziom baterii",
    "no_room": "Bez pomieszczenia",
    "search": "Szukaj urządzenia lub pomieszczenia…",
    "no_room_heading": "Urządzenia bez pomieszczenia",
    "room_heading": "Urządzenia według pomieszczeń",
    "one_device": "{count} urządzenie",
    "many_devices": "{count} urządzeń",
    "expand_all": "Rozwiń wszystko",
    "collapse_all": "Zwiń wszystko",
    "area_assign": "Przypisz obszar w Home Assistant",
    "batteries_in_room": "Urządzenia bateryjne w tym pomieszczeniu",
    "no_matching": "Żadne urządzenie nie pasuje do bieżącego filtra.",
    "no_sensors": "Nie znaleziono jeszcze czujników z klasą urządzenia „battery”.",
    "battery_change_note": "Ostatnia wymiana baterii jest szacowana tylko wtedy, gdy historia pokazuje wyraźny wzrost do wysokiego poziomu lub zmianę ze stanu niskiego na OK. Bez historii data nie jest wyświetlana.",
    "configure_aria": "Konfiguruj monitor baterii",
    "configure_title": "Konfiguruj Modern Battery Monitor",
    "settings_button": "Konfiguracja",
    "close": "Zamknij",
    "display_notifications": "Wyświetlanie i powiadomienia",
    "threshold": "Próg niskiego poziomu baterii (%)",
    "notify_service": "Usługa powiadomień Home Assistant",
    "notify_note": "Powiadomienia działają, gdy ta karta jest otwarta w Home Assistant. Aby otrzymywać je stale, utwórz także automatyzację Home Assistant.",
    "enable_notifications": "Powiadom o nowym niskim poziomie baterii",
    "device_filter": "Filtry urządzeń",
    "show_mobile": "Pokazuj telefony, tablety, smartwatche i opaski fitness",
    "mobile_note": "Urządzenia mobilne są domyślnie ukrywane na podstawie integracji Mobile App oraz nazwy, modelu i identyfikatorów. Włącz tę opcję, jeśli urządzenie zostało błędnie rozpoznane.",
    "customize_devices": "Dostosuj urządzenia",
    "binary_sensor": "Czujnik binarny",
    "battery": "Bateria",
    "rename_placeholder": "Ustaw nazwę wyświetlaną",
    "hide": "Ukryj",
    "no_batteries": "Nie znaleziono czujników baterii.",
    "cancel": "Anuluj",
    "save": "Zapisz",
    "local_only": "Zmiany w tym szybkim menu są zapisywane w tym profilu przeglądarki; opcje edytora pulpitu nawigacyjnego pozostają dostępne.",
    "unavailable": "niedostępny",
    "low": "niski",
    "ok": "OK",
    "unknown": "Nieznany",
    "binary_status": "Czujnik binarny · Stan {status} · Aktualizacja {time}",
    "binary_low_line": "Czujnik binarny zgłasza niski poziom baterii · Aktualizacja {time}",
    "level_unavailable": "Poziom baterii niedostępny · Aktualizacja {time}",
    "change_battery": "Wkrótce wymień baterię · Aktualizacja {time}",
    "last_updated": "Aktualizacja {time}",
    "low_value": "Niski",
    "unknown_value": "—",
    "battery_unknown": "Nieznany stan baterii",
    "percent_battery": "Bateria: {value}%",
    "last_battery_change": "Ostatnia wymiana baterii (szacowana): {date}",
    "battery_level": "Poziom baterii",
    "binary_detail_aria": "Stan czujnika binarnego: {status}. Przytrzymaj, aby otworzyć szczegóły urządzenia",
    "device_detail_aria": "{name}. Przytrzymaj, aby otworzyć szczegóły urządzenia",
    "rename_aria": "Zmień nazwę wyświetlaną {name}",
    "rename_title": "Zmień nazwę wyświetlaną",
    "time_unknown": "Nieznany czas",
    "just_now": "teraz",
    "date_on": "{date}",
    "notify_title": "Niski poziom baterii",
    "battery_low": "Niski poziom baterii",
    "generic_device": "Urządzenie bateryjne",
    "last_change": "Ostatnia wymiana baterii",
    "editor_title": "Modern Battery Monitor",
    "editor_hint": "Pomieszczenia i urządzenia są automatycznie pobierane z przypisań Home Assistant.",
    "editor_heading": "Nagłówek",
    "hidden_entities": "Ukryte encje (jeden identyfikator encji w wierszu)",
    "custom_names": "Własne nazwy (jedna w wierszu: entity_id = nazwa)",
    "show_mobile_editor": "Pokazuj telefony, tablety, smartwatche i opaski fitness",
    "enable_notifications_short": "Włącz powiadomienia",
    "notify_service_short": "Usługa powiadomień"
  },
  "ru": {
    "smart_home": "Smart Home",
    "default_title": "Батареи",
    "status_auto": "Обнаружено автоматически",
    "waiting_ha": "Ожидание Home Assistant",
    "overview": "Обзор устройств",
    "subtitle": "Все датчики батарей и предупреждений о батарее, отсортированные по комнатам.",
    "detected_devices": "Найденные устройства",
    "device_unit": "устройство",
    "devices": "устройств",
    "shown_hidden": "Показано: {shown} · Скрыто: {hidden}",
    "low_battery": "Низкий заряд",
    "under_binary": "ниже {threshold}% или бинарное предупреждение",
    "keep_watch": "Следите за уровнем заряда",
    "rooms_with_devices": "Комнаты с устройствами",
    "room_unit": "комната",
    "rooms": "комнат",
    "no_area_separate": "Устройства без комнаты показаны отдельно",
    "all_devices": "Все устройства",
    "low_filter": "Низкий заряд",
    "no_room": "Без комнаты",
    "search": "Поиск устройства или комнаты…",
    "no_room_heading": "Устройства без комнаты",
    "room_heading": "Устройства по комнатам",
    "one_device": "{count} устройство",
    "many_devices": "{count} устройств",
    "expand_all": "Развернуть все",
    "collapse_all": "Свернуть все",
    "area_assign": "Назначьте комнату в Home Assistant",
    "batteries_in_room": "Устройства с батареями в этой комнате",
    "no_matching": "Нет устройств, соответствующих текущему фильтру.",
    "no_sensors": "Датчики с классом устройства «батарея» пока не найдены.",
    "battery_change_note": "Дата замены батареи оценивается, только если история показывает заметный рост до высокого уровня или переход из низкого состояния в OK. Без истории дата не отображается.",
    "configure_aria": "Настроить монитор батарей",
    "configure_title": "Настроить Modern Battery Monitor",
    "settings_button": "Настройки",
    "close": "Закрыть",
    "display_notifications": "Отображение и уведомления",
    "threshold": "Порог низкого заряда (%)",
    "notify_service": "Служба уведомлений Home Assistant",
    "notify_note": "Уведомления работают, пока эта карточка открыта в Home Assistant. Для постоянных уведомлений также создайте автоматизацию Home Assistant.",
    "enable_notifications": "Сообщать о новом низком заряде",
    "device_filter": "Фильтры устройств",
    "show_mobile": "Показывать телефоны, планшеты, умные часы и фитнес-браслеты",
    "mobile_note": "Мобильные устройства скрыты по умолчанию на основе интеграции Mobile App, имени, модели и идентификаторов. Включите этот параметр, если устройство распознано неверно.",
    "customize_devices": "Настроить устройства",
    "binary_sensor": "Бинарный датчик",
    "battery": "Батарея",
    "rename_placeholder": "Отображаемое имя",
    "hide": "Скрыть",
    "no_batteries": "Датчики батареи не найдены.",
    "cancel": "Отмена",
    "save": "Сохранить",
    "local_only": "Изменения в этом меню сохраняются в профиле браузера; параметры редактора панели также доступны.",
    "unavailable": "недоступно",
    "low": "низкий",
    "ok": "OK",
    "unknown": "Неизвестно",
    "binary_status": "Бинарный датчик · Состояние {status} · Обновлено {time}",
    "binary_low_line": "Бинарный датчик сообщает о низком заряде · Обновлено {time}",
    "level_unavailable": "Уровень заряда недоступен · Обновлено {time}",
    "change_battery": "Скоро замените батарею · Обновлено {time}",
    "last_updated": "Обновлено {time}",
    "low_value": "Низкий",
    "unknown_value": "—",
    "battery_unknown": "Состояние батареи неизвестно",
    "percent_battery": "Заряд батареи: {value}%",
    "last_battery_change": "Последняя замена батареи (оценка): {date}",
    "battery_level": "Уровень заряда",
    "binary_detail_aria": "Состояние бинарного датчика: {status}. Нажмите и удерживайте для сведений",
    "device_detail_aria": "{name}. Нажмите и удерживайте для сведений",
    "rename_aria": "Изменить отображаемое имя {name}",
    "rename_title": "Изменить отображаемое имя",
    "time_unknown": "Время неизвестно",
    "just_now": "только что",
    "date_on": "{date}",
    "notify_title": "Низкий заряд батареи",
    "battery_low": "Низкий заряд батареи",
    "generic_device": "Устройство с батареей",
    "last_change": "Последняя замена батареи",
    "editor_title": "Modern Battery Monitor",
    "editor_hint": "Комнаты и устройства автоматически считываются из назначений Home Assistant.",
    "editor_heading": "Заголовок",
    "hidden_entities": "Скрытые сущности (один ID сущности в строке)",
    "custom_names": "Свои имена (по одному в строке: entity_id = имя)",
    "show_mobile_editor": "Показывать телефоны, планшеты, умные часы и фитнес-браслеты",
    "enable_notifications_short": "Включить уведомления",
    "notify_service_short": "Служба уведомлений"
  },
  "tr": {
    "smart_home": "Smart Home",
    "default_title": "Piller",
    "status_auto": "Otomatik algılandı",
    "waiting_ha": "Home Assistant bekleniyor",
    "overview": "Cihazlara genel bakış",
    "subtitle": "Oda adına göre sıralanmış tüm pil ve pil uyarı sensörleri.",
    "detected_devices": "Algılanan cihazlar",
    "device_unit": "cihaz",
    "devices": "cihaz",
    "shown_hidden": "{shown} gösteriliyor · {hidden} gizli",
    "low_battery": "Pil düşük",
    "under_binary": "%{threshold} altında veya ikili uyarı",
    "keep_watch": "Pil seviyelerini takip edin",
    "rooms_with_devices": "Cihaz bulunan odalar",
    "room_unit": "oda",
    "rooms": "oda",
    "no_area_separate": "Odası olmayan cihazlar ayrı listelenir",
    "all_devices": "Tüm cihazlar",
    "low_filter": "Düşük pil",
    "no_room": "Oda yok",
    "search": "Cihaz veya oda ara…",
    "no_room_heading": "Odası olmayan cihazlar",
    "room_heading": "Odaya göre cihazlar",
    "one_device": "{count} cihaz",
    "many_devices": "{count} cihaz",
    "expand_all": "Tümünü genişlet",
    "collapse_all": "Tümünü daralt",
    "area_assign": "Home Assistant'ta bir oda atayın",
    "batteries_in_room": "Bu odadaki pilli cihazlar",
    "no_matching": "Geçerli filtreyle eşleşen cihaz yok.",
    "no_sensors": "Henüz “pil” cihaz sınıfına sahip sensör bulunamadı.",
    "battery_change_note": "Son pil değişimi yalnızca geçmişte yüksek şarja belirgin bir yükseliş veya düşükten OK durumuna geçiş varsa tahmin edilir. Geçmiş yoksa tarih gösterilmez.",
    "configure_aria": "Pil Monitörünü yapılandır",
    "configure_title": "Modern Battery Monitor'ü yapılandır",
    "settings_button": "Yapılandırma",
    "close": "Kapat",
    "display_notifications": "Görünüm ve bildirimler",
    "threshold": "Düşük pil eşiği (%)",
    "notify_service": "Home Assistant bildirim hizmeti",
    "notify_note": "Bildirimler, bu kart Home Assistant'ta açıkken çalışır. Sürekli uyarılar için ayrıca bir Home Assistant otomasyonu oluşturun.",
    "enable_notifications": "Pil ilk kez düştüğünde bildirim gönder",
    "device_filter": "Cihaz filtreleri",
    "show_mobile": "Telefonları, tabletleri, akıllı saatleri ve fitness bilekliklerini göster",
    "mobile_note": "Mobil cihazlar varsayılan olarak Mobile App entegrasyonu, ad, model ve cihaz kimliklerine göre gizlenir. Bir cihaz yanlış algılandıysa bu seçeneği açın.",
    "customize_devices": "Cihazları özelleştir",
    "binary_sensor": "İkili sensör",
    "battery": "Pil",
    "rename_placeholder": "Görünen adı ayarla",
    "hide": "Gizle",
    "no_batteries": "Pil sensörü bulunamadı.",
    "cancel": "İptal",
    "save": "Kaydet",
    "local_only": "Bu hızlı menüdeki değişiklikler bu tarayıcı profiline kaydedilir; pano düzenleyicisi seçenekleri de kullanılabilir.",
    "unavailable": "kullanılamıyor",
    "low": "düşük",
    "ok": "OK",
    "unknown": "Bilinmiyor",
    "binary_status": "İkili sensör · Durum {status} · Güncellendi {time}",
    "binary_low_line": "İkili sensör düşük pil bildiriyor · Güncellendi {time}",
    "level_unavailable": "Pil seviyesi kullanılamıyor · Güncellendi {time}",
    "change_battery": "Pili yakında değiştirin · Güncellendi {time}",
    "last_updated": "Güncellendi {time}",
    "low_value": "Düşük",
    "unknown_value": "—",
    "battery_unknown": "Pil durumu bilinmiyor",
    "percent_battery": "Pil %{value}",
    "last_battery_change": "Son pil değişimi (tahmini): {date}",
    "battery_level": "Pil seviyesi",
    "binary_detail_aria": "İkili sensör durumu {status}. Cihaz ayrıntıları için basılı tutun",
    "device_detail_aria": "{name}. Cihaz ayrıntıları için basılı tutun",
    "rename_aria": "{name} görünen adını değiştir",
    "rename_title": "Görünen adı değiştir",
    "time_unknown": "Zaman bilinmiyor",
    "just_now": "şimdi",
    "date_on": "{date} tarihinde",
    "notify_title": "Pil düşük",
    "battery_low": "Pil düşük",
    "generic_device": "Pilli cihaz",
    "last_change": "Son pil değişimi",
    "editor_title": "Modern Battery Monitor",
    "editor_hint": "Odalar ve cihazlar Home Assistant oda ve cihaz atamalarından otomatik okunur.",
    "editor_heading": "Başlık",
    "hidden_entities": "Gizli varlıklar (her satıra bir varlık kimliği)",
    "custom_names": "Özel görünen adlar (her satıra bir tane: entity_id = ad)",
    "show_mobile_editor": "Telefonları, tabletleri, akıllı saatleri ve fitness bilekliklerini göster",
    "enable_notifications_short": "Bildirimleri etkinleştir",
    "notify_service_short": "Bildirim hizmeti"
  }
};
/* END EMBEDDED TRANSLATIONS */

const M_BATTERY_TRANSLATION_CACHE = new Map();

function mBatteryResolveLanguage(hass) {
  const requested=String(hass?.language || "en").toLowerCase().split("-")[0];
  return M_BATTERY_TRANSLATION_LANGUAGES.has(requested)?requested:"en";
}

function mBatteryLoadTranslation(language) {
  let promise=M_BATTERY_TRANSLATION_CACHE.get(language);
  if(!promise) {
    const url=new URL(`./translations/${language}.json`,import.meta.url);
    promise=fetch(url,{cache:"no-cache"}).then((response)=>{
      if(!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    }).catch((error)=>{
      const embedded=M_BATTERY_EMBEDDED_TRANSLATIONS[language];
      if(embedded) return embedded;
      throw error;
    });
    M_BATTERY_TRANSLATION_CACHE.set(language,promise);
  }
  return promise;
}

function mBatteryLoadLocale(language) {
  return mBatteryLoadTranslation("en").then((fallback)=>{
    if(language==="en") return fallback;
    return mBatteryLoadTranslation(language).then((translated)=>({...fallback,...translated})).catch(()=>fallback);
  });
}

function mBatteryTranslate(dictionary,key,values={}) {
  const text=dictionary?.[key] ?? key;
  return text.replace(/\{(\w+)\}/g,(_match,name)=>String(values[name] ?? ""));
}

const M_BATTERY_CSS = `
  :host { display:block; color:var(--primary-text-color,#f3f7fb); }
  * { box-sizing:border-box; }
  button,input,select,textarea { font:inherit; }
  :host { --ink:var(--primary-text-color,#f3f7fb); --muted:var(--secondary-text-color,#a7b4c1); --line:rgba(255,255,255,.11); --teal:#50e0d1; } 
  .shell { color:var(--ink); padding:clamp(16px,3vw,28px); border:1px solid rgba(255,255,255,.12); border-radius:24px; background:radial-gradient(700px 300px at 10% 0%,rgba(42,205,185,.16),transparent 65%),radial-gradient(620px 320px at 100% 0%,rgba(100,114,226,.16),transparent 64%),linear-gradient(145deg,rgba(23,32,43,.94),rgba(9,15,24,.96)); box-shadow:0 20px 60px rgba(0,0,0,.24); backdrop-filter:blur(18px); }
  .topbar,.hero,.toolbar,.section-head,.room-title,.device-main,.device-meta,.stats,.modal-head { display:flex; align-items:center; }
  .topbar,.hero,.section-head,.room-title { justify-content:space-between; gap:14px; }
  .topbar { margin-bottom:26px; }
  .brand { display:flex; align-items:center; gap:11px; min-width:0; }
  .mark { display:grid; place-items:center; width:40px; height:40px; flex:0 0 auto; border-radius:14px; color:#062723; font-size:12px; font-weight:850; background:linear-gradient(145deg,#72f0d9,#49c8c3); box-shadow:0 7px 24px rgba(55,211,192,.2); }
  .brand-copy { display:grid; gap:2px; }
  .brand-copy strong { font-size:13px; }
  .brand-copy span,.pill { color:var(--muted); font-size:11px; }
  .top-meta { display:flex; gap:8px; flex-wrap:wrap; justify-content:flex-end; }
  .pill { display:inline-flex; align-items:center; gap:7px; padding:8px 10px; border:1px solid var(--line); border-radius:999px; background:rgba(255,255,255,.045); white-space:nowrap; }
  .dot { width:7px; height:7px; border-radius:50%; background:#48d6a2; box-shadow:0 0 10px rgba(72,214,162,.65); }
  .hero { align-items:flex-end; margin-bottom:22px; }
  .eyebrow { margin:0 0 8px; color:var(--teal); font-size:10px; font-weight:750; letter-spacing:.14em; text-transform:uppercase; }
  h1 { margin:0; font-size:clamp(34px,5.4vw,48px); line-height:1.02; letter-spacing:-.045em; font-weight:720; }
  .subtitle { margin:9px 0 0; color:var(--muted); font-size:14px; line-height:1.5; }
  .button { position:relative; overflow:hidden; display:inline-flex; align-items:center; justify-content:center; gap:8px; min-height:38px; padding:8px 12px; border:1px solid rgba(255,255,255,.22); border-radius:11px; background:linear-gradient(145deg,rgba(255,255,255,.14),rgba(255,255,255,.045)); color:var(--muted); font-weight:400; font-size:12px; cursor:pointer; transition:all 150ms; backdrop-filter:blur(14px) saturate(135%); -webkit-backdrop-filter:blur(14px) saturate(135%); box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 5px 16px rgba(0,0,0,.12); }
  .button::before { content:""; position:absolute; inset:1px 9px auto; height:44%; border-radius:inherit; background:linear-gradient(180deg,rgba(255,255,255,.23),rgba(255,255,255,0)); opacity:.58; pointer-events:none; }
  .button:hover,.tab:hover,.button.primary:hover { background:linear-gradient(145deg,rgba(255,255,255,.2),rgba(255,255,255,.07)); border-color:rgba(255,255,255,.38); transform:translateY(-1px); }
  .button.state-active,.button.state-active:hover { color:#fff; border-color:rgba(70,223,155,.88); }
  .button:active,.tab:active { transform:scale(.97); }
  .button.primary { color:#e8f0f4; font-weight:400; background:linear-gradient(145deg,rgba(255,255,255,.18),rgba(255,255,255,.075)); border-color:rgba(255,255,255,.32); }
  @supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))) { .button { background:rgba(50,55,65,.92); } }
  .stats { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; margin-bottom:16px; }
  .stat { position:relative; min-height:100px; padding:16px 18px; overflow:hidden; border:1px solid var(--line); border-radius:21px; background:linear-gradient(140deg,rgba(255,255,255,.09),rgba(255,255,255,.045)); }
  .stat:after { content:""; position:absolute; width:130px; height:100px; right:-42px; top:-48px; border-radius:50%; background:var(--glow,rgba(80,224,209,.15)); filter:blur(22px); pointer-events:none; }
  .stat-label { color:var(--muted); font-size:11px; }
  .stat-value { margin-top:7px; font-size:25px; font-weight:760; line-height:1; }
  .stat-value small { margin-left:4px; color:var(--muted); font-size:11px; font-weight:550; }
  .stat-note { margin-top:7px; color:var(--muted); font-size:10px; }
  .toolbar { gap:12px; justify-content:space-between; margin-bottom:16px; padding:10px; border:1px solid var(--line); border-radius:18px; background:rgba(255,255,255,.045); }
  .tabs { display:flex; gap:4px; align-items:center; flex-wrap:wrap; }
  .tab { position:relative; overflow:hidden; border:1px solid rgba(255,255,255,.17); border-radius:11px; padding:9px 12px; background:linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.035)); color:var(--muted); font-size:11px; font-weight:400; cursor:pointer; transition:all 150ms; backdrop-filter:blur(12px) saturate(130%); -webkit-backdrop-filter:blur(12px) saturate(130%); box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 4px 12px rgba(0,0,0,.1); }
  .tab::before { content:""; position:absolute; inset:1px 8px auto; height:42%; border-radius:inherit; background:linear-gradient(180deg,rgba(255,255,255,.2),transparent); pointer-events:none; }
  .button,.tab { min-height:38px; border-color:rgba(255,255,255,.17); background:linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.035)); color:var(--muted); font-weight:400; transition:all 150ms; backdrop-filter:blur(12px) saturate(130%); -webkit-backdrop-filter:blur(12px) saturate(130%); box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 4px 12px rgba(0,0,0,.1); }
  .button::before,.tab::before { inset:1px 8px auto; height:42%; background:linear-gradient(180deg,rgba(255,255,255,.2),transparent); opacity:1; }
  .tab.active { color:#fff; border-color:rgba(70,223,155,.88); background:linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.035)); }
  .tab.active:hover { color:#fff; border-color:rgba(70,223,155,.88); background:linear-gradient(145deg,rgba(255,255,255,.2),rgba(255,255,255,.07)); }
  .tools { display:flex; align-items:center; gap:8px; min-width:0; margin-left:auto; }
  .search-settings { display:flex; align-items:center; gap:8px; min-width:0; }
  .search { min-height:38px; border:1px solid var(--line); border-radius:12px; background:rgba(7,12,19,.4); color:var(--ink); outline:none; }
  .search { width:min(250px,34vw); padding:0 12px; }
  .settings-button { flex:0 0 auto; white-space:nowrap; }
  .search::placeholder { color:#8292a1; }
  .section-head { margin:0 2px 10px; }
  .section-head strong { font-size:14px; }
  .section-head span { color:var(--muted); font-size:11px; }
  .tree-actions { display:flex; gap:7px; flex-wrap:wrap; justify-content:flex-end; }
  .tree { margin-top:15px; padding:5px 18px 12px; overflow:hidden; border:1px solid var(--line); border-radius:20px; background:linear-gradient(145deg,rgba(255,255,255,.085),rgba(255,255,255,.04)); box-shadow:0 16px 38px rgba(0,0,0,.16); backdrop-filter:blur(22px); -webkit-backdrop-filter:blur(22px); }
  .room { position:relative; margin:0; overflow:visible; border:0; border-radius:0; background:transparent; }
  .room + .room { border-top:1px solid rgba(255,255,255,.065); }
  .room summary { list-style:none; cursor:pointer; }
  .room summary::-webkit-details-marker { display:none; }
  .room-title { justify-content:flex-start; min-height:62px; margin:3px 0; padding:10px 9px; border:1px solid rgba(255,255,255,.17); border-radius:12px; color:var(--muted); background:linear-gradient(145deg,rgba(255,255,255,.095),rgba(255,255,255,.035)); box-shadow:inset 0 1px 0 rgba(255,255,255,.08); cursor:pointer; user-select:none; transition:all 150ms; font-weight:400; }
  .room-title:hover,.device-node summary:hover { border-color:rgba(255,255,255,.34); }
  .room[open] > .room-title { color:#e8f0f4; border-color:rgba(255,255,255,.28); background:linear-gradient(145deg,rgba(255,255,255,.13),rgba(255,255,255,.055)); }
  .room:not([open]) > .room-title { color:var(--muted); border-color:rgba(255,255,255,.16); background:linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.03)); }
  .room-name { display:block; color:inherit; font-size:13px; font-weight:400; }
  .room-copy { min-width:0; flex:1; }
  .room-meta { display:block; margin-top:3px; color:#82929f; font-size:10px; }
  .room-icon { width:36px; height:36px; flex:0 0 auto; display:grid; place-items:center; color:#b9f5eb; border:1px solid rgba(80,224,209,.12); border-radius:12px; background:rgba(80,224,209,.12); }
  .room-icon ha-icon,.device-icon ha-icon { --mdc-icon-size:18px; }
  .room-icon svg { width:18px; height:18px; }
  .room-count { margin-left:auto; padding:5px 8px; border-radius:999px; color:#9aa9b7; background:rgba(255,255,255,.055); font-size:11px; white-space:nowrap; }
  .room:not([open]) .room-count[data-warning="true"] { color:#ffe7a7; background:rgba(255,199,71,.28); box-shadow:inset 0 1px 0 rgba(255,245,195,.18),0 0 14px rgba(255,199,71,.12); }
  .chev { color:inherit; transition:transform .16s ease; }
  details[open] .chev { transform:rotate(90deg); }
  .room-list { position:relative; margin:0 0 10px 14px; padding:0 10px 9px 25px; border-left:1px solid rgba(255,255,255,.13); }
  .room-list::before { content:""; position:absolute; top:-8px; left:-1px; height:18px; border-left:1px solid rgba(255,255,255,.13); }
  .room-list .device { min-height:76px; padding:11px 8px; border-bottom:1px solid rgba(255,255,255,.065); }
  .room-list .device:last-child { border-bottom:0; }
  .room-list .device::before { content:""; position:absolute; left:-25px; top:50%; width:17px; border-top:1px solid rgba(255,255,255,.13); }
  .device-node { margin:3px 0 0 10px; padding-left:13px; border-left:1px solid rgba(180,202,220,.2); }
  .device-node summary { position:relative; display:flex; align-items:center; justify-content:space-between; gap:10px; min-height:45px; padding:7px 10px; border:1px solid rgba(255,255,255,.15); border-radius:11px; color:var(--muted); background:linear-gradient(145deg,rgba(255,255,255,.085),rgba(255,255,255,.025)); box-shadow:inset 0 1px 0 rgba(255,255,255,.07); list-style:none; cursor:pointer; transition:all 150ms; font-weight:400; }
  .device-node[open] > summary { color:#e8f0f4; border-color:rgba(255,255,255,.28); background:linear-gradient(145deg,rgba(255,255,255,.13),rgba(255,255,255,.055)); }
  .device-node:not([open]) > summary { color:var(--muted); border-color:rgba(255,255,255,.15); background:linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025)); }
  .device-node summary::-webkit-details-marker { display:none; }
  .device-node summary::before { content:""; position:absolute; left:-14px; top:50%; width:13px; border-top:1px solid rgba(180,202,220,.2); }
  .device-branch { margin-left:17px; padding-left:10px; border-left:1px solid rgba(180,202,220,.14); }
  .device-summary { min-width:0; display:flex; align-items:center; gap:9px; }
  .device-summary-copy { min-width:0; display:grid; gap:3px; }
  .device-summary-copy strong { overflow:hidden; color:inherit; text-overflow:ellipsis; white-space:nowrap; font-size:11px; font-weight:400; }
  .device-summary-copy small { color:var(--muted); font-size:9px; }
  .device-summary-icon { display:grid; place-items:center; flex:0 0 auto; width:27px; height:27px; color:#a8bdd0; border:1px solid rgba(255,255,255,.11); border-radius:9px; background:rgba(255,255,255,.055); }
  .device { position:relative; display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:center; gap:12px; min-height:76px; padding:11px 8px; }
  .device-main { min-width:0; gap:11px; }
  .device-icon { display:grid; place-items:center; flex:0 0 auto; width:37px; height:37px; color:#c6d5dc; border:1px solid rgba(255,255,255,.07); border-radius:13px; background:rgba(9,18,27,.3); }
  .device-icon svg { width:18px; height:18px; }
  .device-copy { min-width:0; display:grid; gap:4px; }
  .device-name-line { display:flex; align-items:center; gap:4px; min-width:0; }
  .device-name { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:360px; padding:2px 0; border:0; background:transparent; color:#dffcf7; text-align:left; font-size:13px; font-weight:400; cursor:pointer; touch-action:manipulation; -webkit-touch-callout:none; user-select:none; }
  .device-name:hover { color:var(--teal); }
  .device-sub { margin-top:4px; color:#8897a5; font-size:11px; line-height:1.35; }
  .edit-name { display:grid; place-items:center; width:25px; height:25px; flex:0 0 auto; padding:0; border:1px solid rgba(255,255,255,.15); border-radius:11px; color:#dffcf7; background:linear-gradient(145deg,rgba(255,255,255,.12),rgba(255,255,255,.035)); box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 3px 9px rgba(0,0,0,.1); opacity:.78; cursor:pointer; backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); transition:all 150ms; }
  .status-button { position:relative; overflow:hidden; display:inline-flex; align-items:center; justify-content:center; gap:8px; min-width:var(--indicator-width); min-height:38px; padding:8px 12px; border:1px solid rgba(255,255,255,.19); border-radius:11px; color:#e8f0f4; background:linear-gradient(145deg,rgba(255,255,255,.13),rgba(255,255,255,.045)); box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 5px 14px rgba(0,0,0,.12); font-size:11px; font-weight:400; cursor:pointer; backdrop-filter:blur(13px) saturate(135%); -webkit-backdrop-filter:blur(13px) saturate(135%); }
  .status-button::before { content:""; position:absolute; inset:1px 9px auto; height:44%; border-radius:inherit; background:linear-gradient(180deg,rgba(255,255,255,.23),transparent); pointer-events:none; }
  .status-button.status-ok { border-color:rgba(70,223,155,.3); }
  .status-button.status-low { border-color:rgba(255,102,127,.34); }
  .status-button.status-unknown { color:var(--muted); }
  .status-button.status-ok .status-mark { color:#46df9b; border-color:rgba(70,223,155,.55); }
  .status-button.status-low .status-mark { color:#ff667f; border-color:rgba(255,102,127,.6); }
  .status-button:hover { border-color:currentColor; filter:brightness(1.1); }
  .status-mark { display:grid; place-items:center; width:19px; height:19px; border:1px solid currentColor; border-radius:7px; font-size:12px; line-height:1; }
  .edit-name:hover { opacity:1; color:var(--teal); border-color:rgba(80,224,209,.36); background:rgba(80,224,209,.13); }
  .edit-name svg { width:14px; height:14px; }
  .pressable { cursor:pointer; touch-action:pan-y; user-select:none; }
  .device-meta { --indicator-width:104px; justify-content:flex-end; gap:10px; }
  .level-copy { min-width:70px; text-align:right; }
  .level-number { font-variant-numeric:tabular-nums; font-size:15px; font-weight:780; white-space:nowrap; }
  .level-state { margin-top:3px; color:var(--muted); font-size:9px; white-space:nowrap; }
  .battery { display:block; width:var(--indicator-width); height:38px; overflow:visible; cursor:pointer; touch-action:pan-y; filter:drop-shadow(0 3px 7px rgba(0,0,0,.28)) drop-shadow(0 0 4px hsl(var(--battery-hue) 92% 55% / .25)); }
  .battery .case { stroke:rgba(230,240,247,.72); stroke-width:.6; }
  .battery .terminal { stroke:rgba(226,236,243,.52); stroke-width:.55; }
  .battery .cell { fill:rgba(8,15,20,.86); }
  .battery .fill { transition:width .38s ease; }
  .battery .gloss { pointer-events:none; }
  .battery .divider { stroke:rgba(255,255,255,.16); stroke-width:.45; pointer-events:none; }
  .empty { padding:24px 12px; color:var(--muted); text-align:center; font-size:12px; }
  .foot { margin:14px 2px 0; color:var(--muted); font-size:10px; line-height:1.45; }
  .modal::backdrop { background:rgba(3,7,12,.72); backdrop-filter:blur(8px); }
  .modal { position:fixed; inset:0; margin:auto; padding:0; color:var(--ink); width:min(960px,calc(100% - 24px)); max-width:100%; max-height:calc(100vh - 24px); max-height:min(1100px,calc(100dvh - 24px)); overflow:auto; overscroll-behavior:contain; border:1px solid rgba(255,255,255,.18); border-radius:25px; background:linear-gradient(145deg,rgba(28,39,51,.97),rgba(10,16,25,.98)); box-shadow:0 30px 100px rgba(0,0,0,.58),inset 0 1px 0 rgba(255,255,255,.08); backdrop-filter:blur(22px) saturate(135%); }
  .modal-head { position:sticky; top:0; z-index:1; justify-content:space-between; padding:16px 18px; border-bottom:1px solid var(--line); background:rgba(18,25,34,.96); backdrop-filter:blur(14px); }
  .modal-head h2 { margin:0; font-size:17px; }
  .modal-body { padding:16px 18px; }
  .setting-card { margin-bottom:14px; padding:14px; border:1px solid var(--line); border-radius:15px; background:rgba(255,255,255,.04); }
  .setting-card h3 { margin:0 0 10px; font-size:12px; }
  .setting-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
  .field { display:grid; gap:6px; color:var(--muted); font-size:10px; }
  .field input { min-height:38px; width:100%; padding:8px 10px; color:var(--ink); border:1px solid var(--line); border-radius:10px; background:rgba(0,0,0,.22); }
  .field input[type=range] { min-height:0; padding:0; border:0; border-radius:0; background:transparent; accent-color:#50e0d1; }
  .range-row { display:grid; grid-template-columns:minmax(0,1fr) 44px; align-items:center; gap:10px; }
  .range-value { color:#dffcf7; text-align:right; font-size:12px; font-weight:700; font-variant-numeric:tabular-nums; }
  .field textarea { width:100%; padding:9px 10px; color:var(--ink); border:1px solid var(--line); border-radius:10px; background:rgba(0,0,0,.22); resize:vertical; }
  .toggle-line { display:flex; align-items:center; gap:9px; color:var(--ink); font-size:11px; }
  .toggle-line input { accent-color:#50d9d2; }
  .settings-list { display:grid; gap:7px; }
  .setting-row { display:grid; grid-template-columns:minmax(0,1fr) minmax(110px,.75fr) 50px; align-items:center; gap:9px; padding:8px; border-radius:10px; background:rgba(255,255,255,.035); }
  .setting-entity { min-width:0; display:grid; gap:3px; }
  .setting-entity strong { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:10px; }
  .setting-entity span { color:var(--muted); font-size:9px; }
  .setting-row input[type=text] { min-width:0; width:100%; min-height:34px; padding:6px 8px; color:var(--ink); border:1px solid var(--line); border-radius:8px; background:rgba(0,0,0,.2); font-size:10px; }
  .setting-row label { display:flex; gap:5px; align-items:center; color:var(--muted); font-size:9px; }
  .modal-actions { display:flex; justify-content:flex-end; gap:8px; padding-top:12px; }
  .note { margin:8px 0 0; color:var(--muted); font-size:10px; line-height:1.5; }
  @media(max-width:720px) { .stats{gap:8px}.stat{padding:13px;min-height:91px}.stat-value{font-size:22px}.toolbar{align-items:stretch;flex-direction:column}.tools{width:100%;margin-left:0}.search-settings{flex:1}.search{width:100%;flex:1;min-width:0}.tabs{justify-content:space-between}.tab{padding:8px 9px}.hero{align-items:flex-start}.subtitle{font-size:12px} }
  @media(max-width:520px) { .shell{padding:15px;border-radius:19px}.topbar{align-items:flex-start;margin-bottom:20px}.top-meta{gap:5px}.pill{padding:7px 8px;font-size:9px}.mark{width:36px;height:36px;border-radius:12px}.brand-copy strong{font-size:12px}.brand-copy span{font-size:10px}.hero{display:block}.stats{grid-template-columns:1fr;gap:8px}.stat{min-height:75px}.stat-value{font-size:20px}.toolbar{padding:8px}.tools{flex-direction:column;align-items:stretch}.search-settings{width:100%}.search{width:auto;min-width:0;min-height:40px;flex:1}.settings-button{padding:8px 10px;font-size:10px}.tree{padding:4px 11px 10px}.device{grid-template-columns:minmax(0,1fr) auto;gap:6px;padding:10px 3px}.device-main{gap:8px}.device-icon{width:34px;height:34px;border-radius:12px}.device-meta{--indicator-width:88px;justify-content:flex-end;gap:6px;padding-left:0}.level-copy{text-align:right;min-width:48px}.level-number{font-size:13px}.level-state{font-size:8px}.battery{width:var(--indicator-width);height:36px}.status-button{min-width:var(--indicator-width);min-height:36px;padding:7px 9px;font-size:11px}.setting-grid{grid-template-columns:1fr}.setting-row{grid-template-columns:minmax(0,1fr) 48px}.setting-row input[type=text]{grid-column:1}.setting-row label{grid-column:2;grid-row:1/3;justify-content:center;flex-direction:column}.room-title{padding:10px 2px;gap:8px}.room-icon{width:34px;height:34px}.room-list{margin-left:12px;padding:0 2px 8px 18px}.room-list .device::before{left:-18px;width:11px}.tree-actions{justify-content:flex-start}.tree-actions .button{font-size:10px;padding:8px 10px} }
`;

function mBatteryEsc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&#39;" }[c]));
}
function mBatteryFire(target, type, detail) {
  target.dispatchEvent(new CustomEvent(type, { detail, bubbles:true, composed:true }));
}
function mBatteryColor(level) {
  if (level == null) return "#83909a";
  const hue = Math.max(0, Math.min(120, Number(level) * 1.2));
  return `hsl(${hue} 76% 54%)`;
}
function mBatteryNumber(value) {
  if (value === "unknown" || value === "unavailable" || value === "none" || value == null || String(value).trim() === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, Math.min(100, parsed)) : null;
}
function mBatteryState(state) { return state?.state ?? state?.s ?? ""; }
function mBatteryTimestamp(state) { return state?.last_changed ?? state?.lc ?? state?.last_updated ?? state?.lu ?? null; }
const M_BATTERY_ICONS = {
  home:'<path d="M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z"/><path d="M8 11h8"/>',
  kitchen:'<path d="M4 10h16v10H4zM7 10V5h10v5M8 14h3m2 0h3M8 17h8"/>',
  living:'<path d="M4 12v7h16v-7a2 2 0 0 0-2-2h-1V6H7v4H6a2 2 0 0 0-2 2ZM7 19v2m10-2v2M7 10h10"/>',
  bedroom:'<path d="M3 19v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7M3 15h18M6 10V6h5v4m-8 9v2m18-2v2"/>',
  hall:'<path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18M15 12h.01"/>',
  office:'<path d="M4 5h16v11H4zM2 20h20M8 16l-1 4m9-4 1 4M8 9h8m-8 3h5"/>',
  bath:'<path d="M4 12V6a2 2 0 0 1 4 0v2m-4 4h17v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Zm3 8v2m10-2v2"/>',
  garage:'<path d="m3 10 9-7 9 7v10H3V10Zm4 1h10m-10 3h10m-10 3h10"/>',
  outdoor:'<path d="M20 4C11 4 5 7 5 14c0 3 2 5 5 5 7 0 10-6 10-15ZM4 21c2-5 5-8 10-11"/>',
  unassigned:'<circle cx="12" cy="12" r="9"/><path d="M9.2 9a2.9 2.9 0 0 1 5.6 1c0 2-2.8 2.2-2.8 4M12 17.5h.01"/>',
  smoke:'<path d="M6 16h12a3 3 0 0 0 .3-6 5.2 5.2 0 0 0-10-1.1A3.6 3.6 0 0 0 6 16Z"/><path d="M8 20h8m-6-7h.01m4 0h.01"/>',
  gas:'<path d="M12 3c1.4 3.2 4.5 4.5 4.5 9a4.5 4.5 0 1 1-9 0c0-1.9.8-3.4 2-4.7.2 2 1.1 2.5 1.5 2.8C12.6 8.2 13.2 6 12 3Z"/><path d="M10 16a2 2 0 0 0 4 0c0-1.1-.7-1.8-2-2.8-1.3 1-2 1.7-2 2.8Z"/>',
  door:'<path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18"/><circle cx="15.5" cy="12" r=".7" fill="currentColor"/>',
  window:'<rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M12 4v16M4 12h16"/>',
  motion:'<circle cx="12" cy="12" r="1.4" fill="currentColor"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4m8.4-8.4a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2m14.2-14.2a10 10 0 0 1 0 14.2"/>',
  climate:'<path d="M10 14.7V5a2 2 0 1 1 4 0v9.7a4 4 0 1 1-4 0Z"/><path d="M12 11v6"/>',
  water:'<path d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
  remote:'<rect x="7" y="3" width="10" height="18" rx="2.5"/><circle cx="12" cy="7" r="1.2"/><path d="M10 11h4m-4 3h4m-4 3h2"/>',
  light:'<path d="M9 18h6m-5 3h4m-5-6a7 7 0 1 1 6 0c-.7.5-1 1.1-1 2h-4c0-.9-.3-1.5-1-2Z"/>',
  switch:'<rect x="3" y="6" width="18" height="12" rx="6"/><circle cx="15" cy="12" r="4"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
  sensor:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h8M8 12h8m-8 4h5"/>'
};
function mBatteryIcon(name) { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${M_BATTERY_ICONS[name] || M_BATTERY_ICONS.sensor}</svg>`; }
function mBatteryHaIcon(icon) {
  return `<ha-icon icon="${mBatteryEsc(icon)}" aria-hidden="true"></ha-icon>`;
}
function mBatteryRoomIcon(room, icon) {
  if (icon) return mBatteryHaIcon(icon);
  const name=String(room || "").toLocaleLowerCase("de-DE");
  if(name.includes("ohne raum")) return mBatteryIcon("unassigned");
  if(/k[uü]che/.test(name)) return mBatteryIcon("kitchen");
  if(/wohnzimmer|living/.test(name)) return mBatteryIcon("living");
  if(/schlafzimmer|bedroom/.test(name)) return mBatteryIcon("bedroom");
  if(/flur|eingang|hall/.test(name)) return mBatteryIcon("hall");
  if(/arbeitszimmer|b[uü]ro|office/.test(name)) return mBatteryIcon("office");
  if(/bad|bath/.test(name)) return mBatteryIcon("bath");
  if(/garage/.test(name)) return mBatteryIcon("garage");
  if(/terrasse|garten|balkon|outdoor/.test(name)) return mBatteryIcon("outdoor");
  return mBatteryIcon("home");
}

class ModernBatterieMonitor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode:"open" });
    this._config = { ...M_BATTERY_DEFAULTS };
    this._hass = null;
    this._translation = null;
    this._translationLanguage = "";
    this._translationPromise = null;
    this._translationToken = 0;
    this._registry = null;
    this._registryLoading = false;
    this._registrySignature = null;
    this._history = new Map();
    this._historyKey = "";
    this._historyLoading = false;
    this._filter = "all";
    this._search = "";
    this._allExpanded = true;
    this._expandedNodes = new Map();
    this._openSettings = false;
    this._settingsDraft = null;
    this._pressTimer = null;
    this._notifiedCurrent = "";
    this._storageKey = "modern-batterie-monitor-overrides-v1";
    this._loadLocalOverrides();
    this.shadowRoot.innerHTML = `<style>${M_BATTERY_CSS}</style><div class="shell"></div>`;
    this.shadowRoot.addEventListener("click", (ev) => this._onClick(ev));
    this.shadowRoot.addEventListener("input", (ev) => this._onInput(ev));
    this.shadowRoot.addEventListener("pointerdown", (ev) => this._onPointerDown(ev));
    this.shadowRoot.addEventListener("toggle", (ev) => {
      const node=ev.target;
      if(node?.dataset?.nodeKey) {
        this._expandedNodes.set(node.dataset.nodeKey,node.open);
        this._syncExpansionButtons();
      }
    }, true);
    ["pointerup","pointerleave","pointercancel"].forEach((name) => this.shadowRoot.addEventListener(name, () => this._clearPress()));
  }

  setConfig(config) {
    this._config = { ...M_BATTERY_DEFAULTS, ...config };
    delete this._config.language;
    this._loadLocalOverrides();
    this._ensureTranslation();
    this._render();
  }
  set hass(hass) {
    this._captureLiveReplacement(this._hass, hass);
    this._hass = hass;
    this._ensureTranslation();
    this._loadRegistries(!!this._registry && this._batterySignature(hass) !== this._registrySignature);
    this._loadHistory();
    this._render();
  }
  get hass() { return this._hass; }
  getCardSize() { return 8; }
  getVersion() { return M_BATTERY_VERSION; }
  static getStubConfig() { return { ...M_BATTERY_DEFAULTS }; }
  static getConfigElement() { return document.createElement("modern-batterie-monitor-editor"); }

  _loadLocalOverrides() {
    try {
      const saved = JSON.parse(localStorage.getItem(this._storageKey) || "{}");
      if (saved.hidden_entities) this._config.hidden_entities = saved.hidden_entities;
      if (saved.name_overrides) this._config.name_overrides = saved.name_overrides;
      if (saved.low_threshold != null) this._config.low_threshold = saved.low_threshold;
      if (saved.notifications_enabled != null) this._config.notifications_enabled = saved.notifications_enabled;
      if (saved.notification_service != null) this._config.notification_service = saved.notification_service;
      if (saved.show_mobile_devices != null) this._config.show_mobile_devices = saved.show_mobile_devices;
    } catch (_err) { /* Keep dashboard configuration when browser storage is unavailable. */ }
  }

  _uiLanguage() {
    return mBatteryResolveLanguage(this._hass);
  }

  _ensureTranslation() {
    const language=this._uiLanguage();
    if(language===this._translationLanguage && (this._translation || this._translationPromise)) return;
    this._translationLanguage=language;
    this._translation=null;
    const token=++this._translationToken;
    const requested=mBatteryLoadLocale(language);
    this._translationPromise=requested;
    requested.then((dictionary)=>{
      if(token!==this._translationToken) return;
      this._translation=dictionary;
      this._translationPromise=null;
      this._render();
    }).catch((error)=>{
      if(token!==this._translationToken) return;
      this._translationPromise=null;
      this._translationLanguage="";
      console.error("[modern-batterie-monitor] Translation file could not be loaded:",error);
    });
  }

  _t(key, values={}) {
    return mBatteryTranslate(this._translation,key,values);
  }

  _batterySignature(hass=this._hass) {
    return Object.values(hass?.states || {}).filter((state)=>{
      const domain=state.entity_id?.split(".")[0];
      return (domain==="sensor" || domain==="binary_sensor") && state.attributes?.device_class==="battery";
    }).map((state)=>state.entity_id).sort().join("|");
  }

  async _loadRegistries(force=false) {
    if (!this._hass?.callWS || (this._registry && !force) || this._registryLoading) return;
    this._registryLoading = true;
    let succeeded=false;
    const requestedSignature=this._batterySignature(this._hass);
    try {
      const [entities, devices, areas] = await Promise.all([
        this._hass.callWS({ type:"config/entity_registry/list" }),
        this._hass.callWS({ type:"config/device_registry/list" }),
        this._hass.callWS({ type:"config/area_registry/list" }),
      ]);
      this._registry = {
        entities: new Map((entities || []).map((entry) => [entry.entity_id, entry])),
        devices: new Map((devices || []).map((entry) => [entry.id, entry])),
        areas: new Map((areas || []).map((entry) => [entry.area_id, entry])),
      };
      succeeded=true;
    } catch (_err) {
      this._registry = { entities:new Map(), devices:new Map(), areas:new Map() };
    } finally {
      this._registryLoading = false;
      this._registrySignature = succeeded ? requestedSignature : null;
      this._render();
      if(succeeded && this._batterySignature(this._hass)!==requestedSignature) this._loadRegistries(true);
    }
  }

  _isMobileBattery(state) {
    const entity=this._registry?.entities.get(state.entity_id);
    const device=entity?.device_id ? this._registry?.devices.get(entity.device_id) : null;
    const platform=(entity?.platform || "").toLowerCase();
    if(platform==="mobile_app" || platform==="companion_app") return true;
    const identifiers=(device?.identifiers || []).flatMap((item)=>Array.isArray(item)?item:[item]);
    const text=[
      state.entity_id,state.attributes?.friendly_name,state.attributes?.device_name,
      entity?.name,entity?.original_name,entity?.name_by_user,
      device?.name,device?.name_by_user,device?.manufacturer,device?.model,
      platform,...identifiers,
    ].filter(Boolean).join(" ").toLowerCase().replace(/[_-]+/g," ");
    return /\b(?:iphone|ipad|ipod|smartphone|mobile phone|cell ?phone|tablet|android|handy|mobiltelefon|telefon|smartwatch|wearable|apple watch)\b|\b(?:pixel|google pixel)\s*(?:[a-z]+\s*)?\d|\bgalaxy\s*(?:s|a|z|note|tab|fold)\s*\d*|\bsm\s*\-?\s*[a-z]\d{3,}[a-z0-9 ]*\b|\b(?:oneplus\s+\d|redmi\s+(?:note\s+)?\d|xiaomi\s+(?:mi\s+)?\d|poco\s+[a-z]?\d|motorola\s+(?:edge|razr|moto\s*[gex])\s*\d|huawei\s+(?:p|mate|nova)\s*\d|oppo\s+(?:find|reno|a)\s*\d|realme\s+\d)\b/i.test(text);
  }

  _batteryEntities() {
    if (!this._hass?.states) return [];
    const all = Object.values(this._hass.states);
    const candidates = all.filter((state) => {
      const domain = state.entity_id.split(".")[0];
      return (domain === "sensor" || domain === "binary_sensor") && state.attributes?.device_class === "battery" && (this._config.show_mobile_devices || !this._isMobileBattery(state));
    });
    const byDevice = new Map();
    for (const state of candidates) {
      const reg = this._registry?.entities.get(state.entity_id);
      const deviceId = reg?.device_id || state.attributes?.device_id || state.entity_id;
      if (!byDevice.has(deviceId)) byDevice.set(deviceId, { numeric:[], binary:[] });
      const group = byDevice.get(deviceId);
      if (state.entity_id.startsWith("sensor.")) group.numeric.push(state);
      else group.binary.push(state);
    }
    const entries = [];
    for (const [deviceId, group] of byDevice) {
      const lowBinary = group.binary.some((state) => state.state === "on");
      const binaryStatus = group.binary.some((state) => state.state === "on") ? "on" : (group.binary.length && group.binary.every((state) => state.state === "off") ? "off" : null);
      if (group.numeric.length) {
        const binaryEntityIds = group.binary.map((state) => state.entity_id);
        for (const state of group.numeric) entries.push(this._makeEntry(state, deviceId, lowBinary, false, binaryEntityIds, binaryStatus));
      } else if (group.binary.length) {
        const main = group.binary.find((state) => state.state === "on") || group.binary[0];
        entries.push(this._makeEntry(main, deviceId, main.state === "on", true, group.binary.map((state) => state.entity_id), main.state));
      }
    }
    return entries;
  }

  _makeEntry(state, deviceId, lowBinary, binaryOnly = false, binaryEntityIds = [], binaryStatus = null) {
    const entity = this._registry?.entities.get(state.entity_id);
    const device = this._registry?.devices.get(deviceId);
    const areaId = entity?.area_id || device?.area_id || state.attributes?.area_id;
    const level = binaryOnly ? null : mBatteryNumber(state.state);
    const threshold = Number(this._config.low_threshold ?? 25);
    const override = this._config.name_overrides?.[deviceId] || this._config.name_overrides?.[state.entity_id];
    const deviceName = device?.name_by_user || device?.name || state.attributes?.device_name || [device?.manufacturer,device?.model].filter(Boolean).join(" ") || this._t("generic_device");
    const displayName = override || deviceName;
    const area = this._hass?.areas?.[areaId] || this._registry?.areas.get(areaId);
    const room = area?.name || state.attributes?.area_name || "Ohne Raum";
    return {
      entityId:state.entity_id, deviceId, state, level, lowBinary, binaryStatus,
      binaryOnly, binaryEntityIds, room, roomIcon:area?.icon, deviceName, displayName, low: level != null ? level <= threshold : lowBinary,
      domain:state.entity_id.split(".")[0],
    };
  }

  _aggregateDevices(entries) {
    const groups=new Map();
    for(const entry of entries) {
      if(!groups.has(entry.deviceId)) groups.set(entry.deviceId,[]);
      groups.get(entry.deviceId).push(entry);
    }
    const threshold=Number(this._config.low_threshold ?? 25);
    return [...groups.entries()].map(([deviceId,group])=>{
      const numeric=group.filter((entry)=>!entry.binaryOnly);
      const validNumeric=numeric.filter((entry)=>entry.level!=null).sort((a,b)=>a.level-b.level || a.entityId.localeCompare(b.entityId,"de"));
      const representative=validNumeric[0] || numeric[0] || group.find((entry)=>entry.lowBinary) || group[0];
      const lowBinary=group.some((entry)=>entry.lowBinary);
      const binaryEntities=[...new Set(group.flatMap((entry)=>entry.binaryEntityIds || []))];
      const binaryEntries=group.filter((entry)=>(entry.binaryEntityIds || []).length);
      const binaryStatus=group.some((entry)=>entry.binaryStatus==="on")?"on":binaryEntries.length && binaryEntries.every((entry)=>entry.binaryStatus==="off")?"off":null;
      const allEntityIds=[...new Set(group.flatMap((entry)=>[entry.entityId,...(entry.binaryEntityIds || [])]))];
      const latestState=allEntityIds.map((id)=>this._hass?.states?.[id]).filter(Boolean).sort((a,b)=>new Date(b.last_updated || b.last_changed || 0)-new Date(a.last_updated || a.last_changed || 0))[0] || representative.state;
      const override=this._config.name_overrides?.[deviceId] || group.map((entry)=>this._config.name_overrides?.[entry.entityId]).find(Boolean);
      const level=validNumeric.length?validNumeric[0].level:null;
      const entry={
        ...representative,
        level,
        lowBinary,
        binaryStatus,
        binaryOnly:validNumeric.length===0 && (numeric.length===0 || group.some((item)=>item.binaryOnly || (item.binaryEntityIds || []).length>0)),
        binaryEntityIds:binaryEntities,
        allEntityIds,
        latestUpdated:latestState?.last_updated || latestState?.last_changed || null,
        currentOverride:override || "",
        displayName:override || representative.displayName || this._t("generic_device"),
        low:lowBinary || (level!=null && level<=threshold),
      };
      return entry;
    });
  }

  _deviceIcon(entry) {
    const device=this._registry?.devices.get(entry.deviceId);
    const related=[];
    for(const state of Object.values(this._hass?.states || {})) {
      const entity=this._registry?.entities.get(state.entity_id);
      const deviceId=entity?.device_id || state.attributes?.device_id;
      if(deviceId===entry.deviceId || state.entity_id===entry.entityId) related.push({state,entity});
    }
    const classes=related.map(({state})=>String(state.attributes?.device_class || "").toLowerCase());
    const domains=related.map(({state})=>state.entity_id.split(".")[0]);
    const text=[entry.deviceName,device?.name,device?.model,device?.manufacturer,...related.map(({state,entity})=>`${state.attributes?.friendly_name || ""} ${entity?.name || ""} ${entity?.original_name || ""}`)].join(" ").toLocaleLowerCase("de-DE");
    if(domains.includes("lock") || classes.includes("lock")) return mBatteryIcon("lock");
    if(domains.includes("climate") || /thermostat|heizkörper|radiator/.test(text)) return mBatteryHaIcon("mdi:thermostat");
    if(domains.includes("cover")) return mBatteryHaIcon("mdi:window-shutter");
    if(classes.includes("carbon_monoxide")) return mBatteryHaIcon("mdi:molecule-co");
    if(/doorbell|türklingel/.test(text)) return mBatteryHaIcon("mdi:doorbell");
    if(classes.includes("gas") || /gasmelder|gassensor/.test(text)) return mBatteryIcon("gas");
    if(classes.some((value)=>["smoke","carbon_monoxide"].includes(value)) || /rauch|smoke|brandmelder/.test(text)) return mBatteryIcon("smoke");
    if(classes.includes("window") || /fenster|window/.test(text)) return mBatteryIcon("window");
    if(classes.includes("door") || classes.includes("opening") || /t[uü]r|door|kontakt/.test(text)) return mBatteryIcon("door");
    if(classes.some((value)=>["motion","occupancy","presence"].includes(value)) || /beweg|bewmel|motion|occupancy|pr[aä]senz/.test(text)) return mBatteryIcon("motion");
    if(classes.some((value)=>["moisture","water","leak"].includes(value)) || /wassermelder|wasserleck|leak|wassersensor/.test(text)) return mBatteryIcon("water");
    if(domains.includes("remote") || /fernbedien|remote|taster/.test(text)) return mBatteryIcon("remote");
    if(/türschloss|door lock/.test(text)) return mBatteryIcon("lock");
    if(classes.some((value)=>["temperature","humidity","pressure","illuminance"].includes(value)) || /klima|temperatur|thermo|humidity|temperature/.test(text)) return mBatteryIcon("climate");
    if(domains.includes("light") || /lampe|licht|light|bulb/.test(text)) return mBatteryIcon("light");
    if(domains.includes("switch") || /steckdose|switch|schalter/.test(text)) return mBatteryIcon("switch");
    if(domains.includes("sensor") || domains.includes("binary_sensor")) return mBatteryIcon("sensor");
    return mBatteryIcon("sensor");
  }

  _captureLiveReplacement(previous, current) {
    if (!previous?.states || !current?.states) return;
    for (const [entityId, state] of Object.entries(current.states)) {
      if (state.attributes?.device_class !== "battery") continue;
      const oldState = previous.states[entityId];
      if (!oldState) continue;
      const oldLevel = mBatteryNumber(oldState.state), newLevel = mBatteryNumber(state.state);
      const numericReplacement = oldLevel != null && newLevel != null && oldLevel <= 50 && newLevel >= 80 && newLevel-oldLevel >= 40;
      const binaryReplacement = entityId.startsWith("binary_sensor.") && oldState.state === "on" && state.state === "off";
      if (numericReplacement || binaryReplacement) this._history.set(entityId, state.last_changed || state.last_updated);
    }
  }

  async _loadHistory() {
    if (!this._hass?.callWS || this._historyLoading) return;
    const entries = this._batteryEntities();
    const ids = [...new Set(entries.flatMap((entry) => [entry.entityId, ...(entry.binaryEntityIds || [])]))].sort();
    const key = ids.join("|");
    if (!key || key === this._historyKey) return;
    this._historyKey = key;
    this._historyLoading = true;
    try {
      const now = new Date();
      const start = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
      const batches = [];
      for (let i=0; i<ids.length; i+=30) batches.push(ids.slice(i,i+30));
      for (const batch of batches) {
        const response = await this._hass.callWS({
          type:"history/history_during_period",
          start_time:start.toISOString(), end_time:now.toISOString(),
          entity_ids:batch, minimal_response:true,
        });
        for (const [seriesIndex, series] of (response || []).entries()) {
          if (!series?.length) continue;
          const entityId = series[0].entity_id || series[0].e || batch[seriesIndex] || batch[0];
          let latest = null;
          for (let i=1; i<series.length; i++) {
            const before = series[i-1], after = series[i];
            const beforeState = mBatteryState(before), afterState = mBatteryState(after);
            const oldLevel = mBatteryNumber(beforeState), newLevel = mBatteryNumber(afterState);
            const numericReplacement = oldLevel != null && newLevel != null && oldLevel <= 50 && newLevel >= 80 && newLevel-oldLevel >= 40;
            const binaryReplacement = beforeState === "on" && afterState === "off";
            if (numericReplacement || binaryReplacement) latest = mBatteryTimestamp(after);
          }
          if (latest) this._history.set(entityId, latest);
        }
      }
    } catch (_err) {
      // Recorder history may be disabled or unavailable; live battery values still work.
    } finally {
      this._historyLoading = false;
      this._render();
    }
  }

  _date(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat(this._uiLanguage(), { day:"2-digit", month:"2-digit", year:"numeric" }).format(date);
  }

  _visibleEntries(devices=this._aggregateDevices(this._batteryEntities())) {
    const hidden = new Set(this._config.hidden_entities || []);
    const needle = this._search.trim().toLocaleLowerCase(this._uiLanguage());
    let rows = devices.filter((entry) => !hidden.has(entry.deviceId) && !(entry.allEntityIds || [entry.entityId]).some((id)=>hidden.has(id)));
    if (this._filter === "low") rows = rows.filter((entry) => entry.low);
    if (this._filter === "no-room") rows = rows.filter((entry) => entry.room === "Ohne Raum");
    if (needle) rows = rows.filter((entry) => `${entry.displayName} ${entry.room} ${entry.room==="Ohne Raum"?this._t("no_room"):""}`.toLocaleLowerCase(this._uiLanguage()).includes(needle));
    rows.sort((a,b) => a.displayName.localeCompare(b.displayName,this._uiLanguage()));
    return rows;
  }

  _syncExpansionButtons() {
    const rooms=[...this.shadowRoot.querySelectorAll("details.room")];
    const allOpen=rooms.length>0 && rooms.every((room)=>room.open);
    const allClosed=rooms.length>0 && rooms.every((room)=>!room.open);
    this.shadowRoot.querySelector('[data-action="expand-all"]')?.classList.toggle("state-active",allOpen);
    this.shadowRoot.querySelector('[data-action="collapse-all"]')?.classList.toggle("state-active",allClosed);
  }

  _relativeUpdated(entry) {
    const timestamp=entry.latestUpdated || entry.state?.last_updated || entry.state?.last_changed;
    if(!timestamp) return this._t("time_unknown");
    const date=new Date(timestamp);
    if(Number.isNaN(date.getTime())) return this._t("time_unknown");
    const minutes=Math.max(0,Math.floor((Date.now()-date.getTime())/60000));
    if(minutes<1) return this._t("just_now");
    const locale=this._uiLanguage();
    const relative=new Intl.RelativeTimeFormat(locale,{numeric:"auto"});
    if(minutes<60) return relative.format(-minutes,"minute");
    const hours=Math.floor(minutes/60);
    if(hours<24) return relative.format(-hours,"hour");
    const days=Math.floor(hours/24);
    if(days<30) return relative.format(-days,"day");
    return this._t("date_on",{date:this._date(date)});
  }

  _batteryGraphic(entry) {
    const value = entry.level == null ? 0 : entry.level;
    const hue = entry.level == null ? (entry.lowBinary ? 350 : 145) : Math.max(0,Math.min(120,Number(entry.level)*1.2));
    const fillWidth = Math.max(0,Math.min(1,value/100))*97.7;
    const label = entry.level == null ? (entry.lowBinary?this._t("battery_low"):this._t("battery_unknown")) : this._t("percent_battery",{value:Math.round(entry.level)});
    const uid = `mb-${entry.entityId.replace(/[^a-z0-9]/gi,"-")}`;
    return `<svg class="battery pressable" style="--battery-hue:${hue}" data-entity="${mBatteryEsc(entry.entityId)}" viewBox="0 0 108 39.46" preserveAspectRatio="none" role="img" aria-label="${mBatteryEsc(label)}"><defs><linearGradient id="${uid}-case" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7fbff"/><stop offset=".18" stop-color="#aab7c1"/><stop offset=".43" stop-color="#53616b"/><stop offset=".7" stop-color="#c7d0d6"/><stop offset="1" stop-color="#59656e"/></linearGradient><linearGradient id="${uid}-terminal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8eef2"/><stop offset=".5" stop-color="#66737c"/><stop offset="1" stop-color="#b9c4cb"/></linearGradient><linearGradient id="${uid}-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${hue} 100% 76%)"/><stop offset=".16" stop-color="hsl(${hue} 98% 63%)"/><stop offset=".48" stop-color="hsl(${hue} 94% 53%)"/><stop offset=".78" stop-color="hsl(${hue} 90% 43%)"/><stop offset="1" stop-color="hsl(${hue} 82% 34%)"/></linearGradient><linearGradient id="${uid}-gloss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".64"/><stop offset=".22" stop-color="#fff" stop-opacity=".2"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient><clipPath id="${uid}-clip"><rect x="1.3" y="1" width="97.7" height="37.46" rx="4"/></clipPath></defs><rect class="case" x="0.6" y="0.3" width="99.1" height="38.86" rx="4.5" fill="url(#${uid}-case)"/><rect class="terminal" x="100.5" y="11.2" width="7.2" height="17" rx="2" fill="url(#${uid}-terminal)"/><rect class="cell" x="1.3" y="1" width="97.7" height="37.46" rx="4"/><g clip-path="url(#${uid}-clip)"><rect class="fill" x="1.3" y="1" width="${fillWidth.toFixed(2)}" height="37.46" fill="url(#${uid}-fill)"/><rect class="gloss" x="1.3" y="1" width="97.7" height="37.46" fill="url(#${uid}-gloss)"/></g><path d="M2 0.8h94" stroke="#fff" stroke-opacity=".66" stroke-width=".95" stroke-linecap="round"/><path d="M8 38.7h84" stroke="#fff" stroke-opacity=".22" stroke-width=".65" stroke-linecap="round"/></svg>`;
  }

  _row(entry) {
    const detectedAt = (entry.allEntityIds || [entry.entityId,...(entry.binaryEntityIds || [])]).map((id)=>this._history.get(id)).find(Boolean);
    const date = this._date(detectedAt);
    const unknown = entry.level == null && entry.binaryStatus == null && (entry.state.state === "unknown" || entry.state.state === "unavailable");
    const updated=this._relativeUpdated(entry);
    const stateText = entry.binaryOnly
      ? this._t("binary_status",{status:unknown?this._t("unavailable"):entry.lowBinary?this._t("battery_low"):this._t("ok"),time:updated})
      : entry.binaryStatus==="on"
        ? this._t("binary_low_line",{time:updated})
        : unknown
          ? this._t("level_unavailable",{time:updated})
          : entry.low
            ? this._t("change_battery",{time:updated})
            : this._t("last_updated",{time:updated});
    const valueText = entry.level != null ? `${Math.round(entry.level)} %` : (entry.lowBinary ? this._t("low_value") : (unknown ? this._t("unknown_value") : this._t("ok")));
    const historyLine = date ? `<span class="device-sub">${mBatteryEsc(this._t("last_battery_change",{date}))}</span>` : "";
    const levelColor = entry.level != null ? mBatteryColor(entry.level) : entry.lowBinary ? "#ff617b" : unknown ? "#aab6c1" : "#46df9b";
    const rightSide=entry.binaryOnly
      ? `<button type="button" class="status-button ${unknown?"status-unknown":entry.lowBinary?"status-low":"status-ok"} pressable" data-entity="${mBatteryEsc(entry.entityId)}" aria-label="${mBatteryEsc(this._t("binary_detail_aria",{status:unknown?this._t("unavailable"):entry.lowBinary?this._t("low"):this._t("ok")}))}"><span class="status-mark" aria-hidden="true">${unknown?"?":entry.lowBinary?"!":"✓"}</span>${unknown?this._t("unknown"):entry.lowBinary?this._t("low_value"):this._t("ok")}</button>`
      : `<div class="level-copy pressable" data-entity="${mBatteryEsc(entry.entityId)}"><div class="level-number" style="color:${levelColor}">${mBatteryEsc(valueText)}</div><div class="level-state">${this._t("battery_level")}</div></div>${this._batteryGraphic(entry)}`;
    return `<article class="device"><div class="device-main"><span class="device-icon" aria-hidden="true">${this._deviceIcon(entry)}</span><div class="device-copy"><div class="device-name-line"><button class="device-name pressable" data-entity="${mBatteryEsc(entry.entityId)}" aria-label="${mBatteryEsc(this._t("device_detail_aria",{name:entry.displayName}))}">${mBatteryEsc(entry.displayName)}</button><button class="edit-name" data-rename-device="${mBatteryEsc(entry.deviceId)}" aria-label="${mBatteryEsc(this._t("rename_aria",{name:entry.displayName}))}" title="${mBatteryEsc(this._t("rename_title"))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m14 5 5 5M4 20l4.2-.9L19 8.3a2.1 2.1 0 0 0-3-3L5.2 16.1 4 20Z"/></svg></button></div><span class="device-sub">${mBatteryEsc(stateText)}</span>${historyLine}</div></div><div class="device-meta">${rightSide}</div></article>`;
  }

  _makeSettingsDraft() {
    return {
      threshold:String(this._config.low_threshold ?? 25),
      service:this._config.notification_service || "",
      notifications:!!this._config.notifications_enabled,
      showMobile:!!this._config.show_mobile_devices,
      hidden:[...(this._config.hidden_entities || [])],
      names:{...(this._config.name_overrides || {})},
    };
  }

  _captureSettingsDraft() {
    if (!this._openSettings) return;
    const draft=this._settingsDraft || this._makeSettingsDraft();
    const threshold=this.shadowRoot.querySelector('[data-setting="threshold"]');
    const service=this.shadowRoot.querySelector('[data-setting="service"]');
    const notifications=this.shadowRoot.querySelector('[data-setting="notifications"]');
    const showMobile=this.shadowRoot.querySelector('[data-setting="show-mobile"]');
    if (threshold) draft.threshold=threshold.value;
    if (service) draft.service=service.value;
    if (notifications) draft.notifications=notifications.checked;
    if (showMobile) draft.showMobile=showMobile.checked;
    const represented=new Set();
    this.shadowRoot.querySelectorAll("[data-rename]").forEach(input=>{
      represented.add(input.dataset.rename);
      for (const id of JSON.parse(input.dataset.entityIds)) represented.add(id);
    });
    draft.hidden=(this._config.hidden_entities || []).filter(id=>!represented.has(id));
    draft.names=Object.fromEntries(Object.entries(this._config.name_overrides || {}).filter(([id])=>!represented.has(id)));
    this.shadowRoot.querySelectorAll("[data-hide]:checked").forEach(input=>draft.hidden.push(input.dataset.hide));
    this.shadowRoot.querySelectorAll("[data-rename]").forEach(input=>{
      if(input.value.trim()) draft.names[input.dataset.rename]=input.value.trim();
    });
    this._settingsDraft=draft;
  }

  _render() {
    const root = this.shadowRoot?.querySelector(".shell");
    if (!root || !this._translation) return;
    root.dir=this._uiLanguage()==="ar"?"rtl":"ltr";
    const t=(key,values={})=>mBatteryEsc(this._t(key,values));
    const all = this._aggregateDevices(this._batteryEntities());
    const hidden = new Set(this._config.hidden_entities || []);
    const shown = all.filter((entry) => !hidden.has(entry.deviceId) && !(entry.allEntityIds || [entry.entityId]).some((id)=>hidden.has(id)));
    const rows = this._visibleEntries(all);
    const lowCount = new Set(shown.filter((entry) => entry.low).map((entry) => entry.deviceId)).size;
    const rooms = new Set(shown.map((entry) => entry.room).filter((room) => room !== "Ohne Raum"));
    const allDevices = new Set(all.map((entry) => entry.deviceId));
    const shownDevices = new Set(shown.map((entry) => entry.deviceId));
    const groups = new Map();
    for (const row of rows) {
      if (!groups.has(row.room)) groups.set(row.room, []);
      groups.get(row.room).push(row);
    }
    const roomNames = [...groups.keys()].sort((a,b) => a === "Ohne Raum" ? 1 : b === "Ohne Raum" ? -1 : a.localeCompare(b,this._uiLanguage()));
    const content = roomNames.map((room) => {
      const deviceGroups=new Map();
      for(const entry of groups.get(room)) {
        if(!deviceGroups.has(entry.deviceId)) deviceGroups.set(entry.deviceId,[]);
        deviceGroups.get(entry.deviceId).push(entry);
      }
      const sortedDevices=[...deviceGroups.entries()].sort((a,b)=>a[1][0].displayName.localeCompare(b[1][0].displayName,this._uiLanguage()));
      const devicesHtml=sortedDevices.flatMap(([,deviceRows])=>deviceRows).map((entry)=>this._row(entry)).join("");
      const roomKey=`room:${room}`;
      const roomOpen=this._expandedNodes.has(roomKey)?this._expandedNodes.get(roomKey):this._allExpanded;
      const roomWarning=shown.some((entry)=>entry.room===room && entry.low);
      const roomLabel=room==="Ohne Raum"?this._t("no_room"):room;
      return `<details class="room" data-node-key="${mBatteryEsc(roomKey)}" ${roomOpen?"open":""}><summary class="room-title"><span class="chev" aria-hidden="true">›</span><span class="room-icon" aria-hidden="true">${mBatteryRoomIcon(room, groups.get(room)[0].roomIcon)}</span><span class="room-copy"><span class="room-name">${mBatteryEsc(roomLabel)}</span><span class="room-meta">${room==="Ohne Raum"?t("area_assign"):t("batteries_in_room")}</span></span><span class="room-count" data-warning="${roomWarning?"true":"false"}">${t(deviceGroups.size===1?"one_device":"many_devices",{count:deviceGroups.size})}</span></summary><div class="room-list">${devicesHtml}</div></details>`;
    }).join("");
    const roomOpenStates=roomNames.map((room)=>{const key="room:"+room;return this._expandedNodes.has(key)?this._expandedNodes.get(key):this._allExpanded;});
    const expandAllActive=roomOpenStates.length>0 && roomOpenStates.every(Boolean);
    const collapseAllActive=roomOpenStates.length>0 && roomOpenStates.every((open)=>!open);
    root.innerHTML = `
      <div class="topbar"><div class="brand"><div class="mark">HA</div><div class="brand-copy"><strong>${t("smart_home")}</strong><span>Modern-Batterie-Monitor</span></div></div><div class="top-meta"><span class="pill"><span class="dot"></span>${this._hass?t("status_auto"):t("waiting_ha")}</span></div></div>
      <div class="hero"><div><div class="eyebrow">${t("overview")}</div><h1>${mBatteryEsc(!this._config.title || this._config.title===M_BATTERY_DEFAULTS.title?this._t("default_title"):this._config.title)}</h1><p class="subtitle">${t("subtitle")}</p></div></div>
      <div class="stats"><div class="stat" style="--glow:rgba(80,224,209,.2)"><div class="stat-label">${t("detected_devices")}</div><div class="stat-value">${allDevices.size}<small>${t(allDevices.size===1?"device_unit":"devices")}</small></div><div class="stat-note">${t("shown_hidden",{shown:shownDevices.size,hidden:allDevices.size-shownDevices.size})}</div></div><div class="stat" style="--glow:rgba(255,126,83,.21)"><div class="stat-label">${t("low_battery")}</div><div class="stat-value">${lowCount}<small>${t("under_binary",{threshold:this._config.low_threshold ?? 25})}</small></div><div class="stat-note">${t("keep_watch")}</div></div><div class="stat" style="--glow:rgba(120,136,255,.2)"><div class="stat-label">${t("rooms_with_devices")}</div><div class="stat-value">${rooms.size}<small>${t(rooms.size===1?"room_unit":"rooms")}</small></div><div class="stat-note">${t("no_area_separate")}</div></div></div>
      <div class="toolbar"><div class="tabs"><button class="tab ${this._filter==="all"?"active":""}" data-filter="all">${t("all_devices")}</button><button class="tab ${this._filter==="low"?"active":""}" data-filter="low">${t("low_filter")}</button><button class="tab ${this._filter==="no-room"?"active":""}" data-filter="no-room">${t("no_room")}</button></div><div class="tools"><div class="search-settings"><button class="button settings-button" data-action="settings" aria-label="${t("configure_aria")}">⚙ ${t("settings_button")}</button><input class="search" type="search" placeholder="${t("search")}" value="${mBatteryEsc(this._search)}" aria-label="${t("search")}"></div></div></div>
      <div class="section-head"><strong>${this._filter==="low"?t("low_filter"):this._filter==="no-room"?t("no_room_heading"):t("room_heading")} · ${t(rows.length===1?"one_device":"many_devices",{count:rows.length})}</strong><div class="tree-actions"><button class="button ${expandAllActive?"state-active":""}" data-action="expand-all">${t("expand_all")}</button><button class="button ${collapseAllActive?"state-active":""}" data-action="collapse-all">${t("collapse_all")}</button></div></div>
      <div class="tree">${content || `<div class="empty">${all.length ? t("no_matching") : t("no_sensors")}</div>`}</div>
      <div class="foot">${t("battery_change_note")}</div>
    `;
    this._maybeNotify(shown);
  }

  _showSettings(deviceId) {
    if (this._openSettings) return;
    const draft=this._makeSettingsDraft();
    const all=this._aggregateDevices(this._batteryEntities());
    const localOnly=this._t("local_only");
    const t=(key,values={})=>mBatteryEsc(this._t(key,values));
    const dialog=document.createElement("dialog");
    dialog.className="modal";
    dialog.dir=this._uiLanguage()==="ar"?"rtl":"ltr";
    dialog.setAttribute("aria-label",this._t("configure_aria"));
    dialog.innerHTML=`<div class="modal-head"><h2>${t("configure_title")}</h2><button class="button" data-action="close-settings" aria-label="${t("close")}">✕</button></div><div class="modal-body"><div class="setting-card"><h3>${t("display_notifications")}</h3><div class="setting-grid"><label class="field">${t("threshold")}<div class="range-row"><input data-setting="threshold" type="range" min="0" max="100" step="1" value="${mBatteryEsc(draft.threshold)}"><output class="range-value" data-threshold-value>${mBatteryEsc(draft.threshold)}%</output></div></label><label class="field">${t("notify_service")}<input data-setting="service" type="text" placeholder="notify.mobile_app_dein_handy" value="${mBatteryEsc(draft.service)}"></label></div><p class="note">${t("notify_note")}</p><label class="toggle-line"><input data-setting="notifications" type="checkbox" ${draft.notifications?"checked":""}> ${t("enable_notifications")}</label></div><div class="setting-card"><h3>${t("device_filter")}</h3><label class="toggle-line"><input data-setting="show-mobile" type="checkbox" ${draft.showMobile?"checked":""}> ${t("show_mobile")}</label><p class="note">${t("mobile_note")}</p></div><div class="setting-card"><h3>${t("customize_devices")}</h3><div class="settings-list">${all.map((entry)=>`<div class="setting-row"><div class="setting-entity"><strong>${mBatteryEsc(entry.displayName)}</strong><span>${mBatteryEsc(entry.room==="Ohne Raum"?this._t("no_room"):entry.room)}${entry.binaryOnly?` · ${t("binary_sensor")}`:` · ${t("battery")}`}</span></div><input type="text" data-rename="${mBatteryEsc(entry.deviceId)}" data-entity-ids="${mBatteryEsc(JSON.stringify(entry.allEntityIds))}" placeholder="${t("rename_placeholder")}" value="${mBatteryEsc(draft.names[entry.deviceId] || draft.names[entry.entityId] || entry.currentOverride || "")}"><label><input type="checkbox" data-hide="${mBatteryEsc(entry.deviceId)}" ${draft.hidden.includes(entry.deviceId) || (entry.allEntityIds || []).some((id)=>draft.hidden.includes(id))?"checked":""}> ${t("hide")}</label></div>`).join("") || `<div class="empty">${t("no_batteries")}</div>`}</div></div><div class="modal-actions"><button class="button" data-action="close-settings">${t("cancel")}</button><button class="button primary" data-action="save-settings">${t("save")}</button></div><p class="note">${mBatteryEsc(localOnly)}</p></div>`;
    this._openSettings=true;
    this._settingsDraft=draft;
    this._renameTarget=deviceId;
    dialog.addEventListener("cancel",(event)=>{
      event.preventDefault();
      this._closeSettings();
    });
    dialog.addEventListener("click",(event)=>{
      if (event.target!==dialog) return;
      const box=dialog.getBoundingClientRect();
      if (event.clientX<box.left || event.clientX>box.right || event.clientY<box.top || event.clientY>box.bottom) this._closeSettings();
    });
    this.shadowRoot.append(dialog);
    dialog.showModal();
    if (deviceId) {
      const input=[...dialog.querySelectorAll("[data-rename]")].find(item=>item.dataset.rename===deviceId);
      input?.focus();
      input?.select();
    }
  }

  _closeSettings() {
    const dialog=this.shadowRoot.querySelector("dialog");
    dialog?.close();
    dialog?.remove();
    this._openSettings=false;
    this._settingsDraft=null;
    this._render();
    const trigger=this._renameTarget
      ? [...this.shadowRoot.querySelectorAll("[data-rename-device]")].find(item=>item.dataset.renameDevice===this._renameTarget)
      : null;
    (trigger || this.shadowRoot.querySelector('[data-action="settings"]'))?.focus({preventScroll:true});
  }

  _onClick(ev) {
    const filter = ev.composedPath().find((node) => node?.dataset?.filter);
    if (filter) { this._filter = filter.dataset.filter; this._render(); return; }
    const renameDevice=ev.composedPath().find((node)=>node?.dataset?.renameDevice)?.dataset.renameDevice;
    if(renameDevice) { this._showSettings(renameDevice); return; }
    const action = ev.composedPath().find((node) => node?.dataset?.action)?.dataset.action;
    if (action === "settings") { this._showSettings(); return; }
    if (action === "close-settings") { this._closeSettings(); return; }
    if (action === "save-settings") { this._saveSettings(); return; }
    if (action === "expand-all") { this._allExpanded=true; this._expandedNodes.clear(); this._render(); return; }
    if (action === "collapse-all") { this._allExpanded=false; this._expandedNodes.clear(); this._render(); return; }

  }

  _onInput(ev) {
    if (ev.target.matches?.("[data-setting],[data-hide],[data-rename]")) {
      if(ev.target.dataset.setting==="threshold") {
        const output=this.shadowRoot.querySelector("[data-threshold-value]");
        if(output) output.textContent=`${ev.target.value}%`;
      }
      return;
    }
    if (ev.target.matches?.(".search")) {
      this._search = ev.target.value;
      const start = ev.target.selectionStart;
      this._render();
      const input = this.shadowRoot.querySelector(".search");
      input?.focus();
      try { input?.setSelectionRange(start,start); } catch (_err) { /* Search input type may not support selection. */ }
    }
  }
  _onPointerDown(ev) {
    const target = ev.composedPath().find((node) => node?.dataset?.entity);
    if (!target) return;
    const entityId = target.dataset.entity;
    this._pressTimer = setTimeout(() => {
      mBatteryFire(this, "hass-more-info", { entityId });
      this._pressTimer = null;
    }, 560);
  }
  _clearPress() { if (this._pressTimer) clearTimeout(this._pressTimer); this._pressTimer = null; }

  _saveSettings() {
    this._captureSettingsDraft();
    const draft=this._settingsDraft || this._makeSettingsDraft();
    const threshold = Number(draft.threshold ?? 25);
    const service = draft.service?.trim() || "";
    const notifications = !!draft.notifications;
    const showMobileDevices = !!draft.showMobile;
    const hidden = draft.hidden || [];
    const names = draft.names || {};
    this._config = { ...this._config, low_threshold:Math.max(0,Math.min(100,threshold)), notification_service:service, notifications_enabled:notifications, show_mobile_devices:showMobileDevices, hidden_entities:hidden, name_overrides:names };
    delete this._config.language;
    try { localStorage.setItem(this._storageKey, JSON.stringify({ low_threshold:this._config.low_threshold, notification_service:service, notifications_enabled:notifications, show_mobile_devices:showMobileDevices, hidden_entities:hidden, name_overrides:names })); } catch (_err) { /* Settings remain active until the card is reloaded. */ }
    mBatteryFire(this, "config-changed", { config:this._config });
    this._closeSettings();
  }

  async _maybeNotify(rows) {
    if (!this._hass || this._notifiedCurrent === rows.map((row)=>`${row.entityId}:${row.low}`).join("|")) return;
    this._notifiedCurrent = rows.map((row)=>`${row.entityId}:${row.low}`).join("|");
    const lowIds = rows.filter((row)=>row.low).map((row)=>row.entityId).sort();
    const notifyKey = `${this._storageKey}-notified`;
    let prior=[];
    try { prior=JSON.parse(localStorage.getItem(notifyKey)||"[]"); } catch (_err) { prior=[]; }
    const newlyLow = lowIds.filter((id)=>!prior.includes(id));
    try { localStorage.setItem(notifyKey,JSON.stringify(lowIds)); } catch (_err) { /* Optional dedupe only. */ }
    if (!this._config.notifications_enabled || !newlyLow.length || !this._config.notification_service) return;
    const [domain,service] = this._config.notification_service.split(".");
    if (!domain || !service) return;
    const details = rows.filter((row)=>newlyLow.includes(row.entityId)).map((row)=>`${row.deviceName}: ${row.level == null ? this._t("battery_low") : `${Math.round(row.level)} %`}${row.room !== "Ohne Raum" ? ` (${row.room})` : ""}`).join("\n");
    try { await this._hass.callService(domain,service,{title:this._t("notify_title"),message:details}); } catch (_err) { /* Invalid or unavailable notify services are ignored. */ }
  }
}

class ModernBatterieMonitorEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:"open"});
    this._config={...M_BATTERY_DEFAULTS};
    this._hass=null;
    this._translation=null;
    this._translationLanguage="";
    this._translationPromise=null;
    this._translationToken=0;
    this.shadowRoot.addEventListener("input",(ev)=>{
      if(ev.target.matches?.('[data-field="low_threshold"]')) {
        const output=this.shadowRoot.querySelector("[data-threshold-value]");
        if(output) output.textContent=`${ev.target.value}%`;
      }
    });
    this.shadowRoot.addEventListener("change",(ev)=>{
      this._changed();
    });
  }
  setConfig(config) { this._config={...M_BATTERY_DEFAULTS,...config}; delete this._config.language; this._ensureTranslation(); this._render(); }
  set hass(hass) { this._hass=hass; this._ensureTranslation(); }
  get hass() { return this._hass; }
  _uiLanguage() {
    return mBatteryResolveLanguage(this._hass);
  }
  _ensureTranslation() {
    const language=this._uiLanguage();
    if(language===this._translationLanguage && (this._translation || this._translationPromise)) return;
    this._translationLanguage=language;
    this._translation=null;
    const token=++this._translationToken;
    const requested=mBatteryLoadLocale(language);
    this._translationPromise=requested;
    requested.then((dictionary)=>{
      if(token!==this._translationToken) return;
      this._translation=dictionary;
      this._translationPromise=null;
      this._render();
    }).catch((error)=>{
      if(token!==this._translationToken) return;
      this._translationPromise=null;
      this._translationLanguage="";
      console.error("[modern-batterie-monitor] Translation file could not be loaded:",error);
    });
  }
  _t(key,values={}) {
    return mBatteryTranslate(this._translation,key,values);
  }
  _render() {
    if(!this._translation) return;
    const t=(key,values={})=>mBatteryEsc(this._t(key,values));
    const threshold=this._config.low_threshold ?? 25;
    const title=this._config.title===M_BATTERY_DEFAULTS.title?this._t("default_title"):this._config.title;
    this.shadowRoot.innerHTML = `<style>${M_BATTERY_CSS}:host{display:block}.shell{padding:16px}.edit-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.field{margin-bottom:12px}.hint{font-size:11px;color:var(--secondary-text-color,#8796a4)}@media(max-width:520px){.edit-grid{grid-template-columns:1fr}}</style><div class="shell" dir="${this._uiLanguage()==="ar"?"rtl":"ltr"}"><h2>${t("editor_title")}</h2><p class="hint">${t("editor_hint")}</p><div class="edit-grid"><label class="field">${t("editor_heading")}<input data-field="title" value="${mBatteryEsc(title)}"></label><label class="field">${t("threshold")}<div class="range-row"><input data-field="low_threshold" type="range" min="0" max="100" step="1" value="${mBatteryEsc(threshold)}"><output class="range-value" data-threshold-value>${mBatteryEsc(threshold)}%</output></div></label></div><label class="field">${t("hidden_entities")}<textarea data-field="hidden_entities" rows="4">${mBatteryEsc((this._config.hidden_entities||[]).join("\n"))}</textarea></label><label class="field">${t("custom_names")}<textarea data-field="name_overrides" rows="5">${mBatteryEsc(Object.entries(this._config.name_overrides||{}).map(([id,name])=>`${id} = ${name}`).join("\n"))}</textarea></label><label class="toggle-line"><input data-field="show_mobile_devices" type="checkbox" ${this._config.show_mobile_devices?"checked":""}> ${t("show_mobile_editor")}</label><label class="toggle-line"><input data-field="notifications_enabled" type="checkbox" ${this._config.notifications_enabled?"checked":""}> ${t("enable_notifications_short")}</label><label class="field">${t("notify_service_short")}<input data-field="notification_service" placeholder="notify.mobile_app_dein_handy" value="${mBatteryEsc(this._config.notification_service||"")}"></label></div>`;
  }
  _changed() {
    const get=(key)=>this.shadowRoot.querySelector(`[data-field="${key}"]`);
    const hidden=(get("hidden_entities")?.value||"").split(/\r?\n|,/).map((v)=>v.trim()).filter(Boolean);
    const names={};
    (get("name_overrides")?.value||"").split(/\r?\n/).forEach((line)=>{const split=line.indexOf("=");if(split>0){const id=line.slice(0,split).trim(),name=line.slice(split+1).trim();if(id&&name)names[id]=name;}});
    const config={...this._config,title:get("title")?.value||(this._uiLanguage()==="de"?"Batterien":"Batteries"),low_threshold:Number(get("low_threshold")?.value||25),hidden_entities:hidden,name_overrides:names,show_mobile_devices:!!get("show_mobile_devices")?.checked,notifications_enabled:!!get("notifications_enabled")?.checked,notification_service:get("notification_service")?.value?.trim()||""};
    this._config=config;
    mBatteryFire(this,"config-changed",{config});
  }
}

if (!customElements.get("modern-batterie-monitor")) customElements.define("modern-batterie-monitor",ModernBatterieMonitor);
if (!customElements.get("modern-batterie-monitor-editor")) customElements.define("modern-batterie-monitor-editor",ModernBatterieMonitorEditor);
window.customCards = window.customCards || [];
if (!window.customCards.some((card)=>card.type==="modern-batterie-monitor")) {
  window.customCards.push({type:"modern-batterie-monitor",name:"Modern-Batterie-Monitor",version:M_BATTERY_VERSION,description:"Raumübersicht für Prozent- und Binärsensoren mit Batterie-Geräteklasse.",preview:true});
}
