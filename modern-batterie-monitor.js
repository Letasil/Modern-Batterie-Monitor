/* Modern-Batterie-Monitor · Lovelace custom card · 1.0.0 */
const M_BATTERY_DEFAULTS = {
  type: "custom:modern-batterie-monitor",
  title: "Batterien",
  low_threshold: 25,
  hidden_entities: [],
  name_overrides: {},
  notifications_enabled: false,
  notification_service: "",
};

const M_BATTERY_CSS = `
  :host { display:block; color:var(--primary-text-color,#f3f7fb); }
  * { box-sizing:border-box; }
  button,input,select,textarea { font:inherit; }
  .shell { --ink:var(--primary-text-color,#f3f7fb); --muted:var(--secondary-text-color,#a7b4c1); --line:rgba(255,255,255,.11); --teal:#50e0d1; color:var(--ink); padding:clamp(16px,3vw,28px); border:1px solid rgba(255,255,255,.12); border-radius:24px; background:radial-gradient(700px 300px at 10% 0%,rgba(42,205,185,.16),transparent 65%),radial-gradient(620px 320px at 100% 0%,rgba(100,114,226,.16),transparent 64%),linear-gradient(145deg,rgba(23,32,43,.94),rgba(9,15,24,.96)); box-shadow:0 20px 60px rgba(0,0,0,.24); backdrop-filter:blur(18px); }
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
  .button { display:inline-flex; align-items:center; justify-content:center; gap:8px; min-height:40px; padding:9px 13px; border:1px solid var(--line); border-radius:13px; background:rgba(255,255,255,.07); color:var(--ink); font-weight:650; font-size:12px; cursor:pointer; transition:background .18s ease,border .18s ease,transform .18s ease; backdrop-filter:blur(12px); }
  .button:hover { background:rgba(255,255,255,.13); border-color:rgba(255,255,255,.2); transform:translateY(-1px); }
  .button.primary { color:#05292a; background:#50d9d2; border-color:#50d9d2; }
  .stats { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; margin-bottom:16px; }
  .stat { position:relative; min-height:100px; padding:16px 18px; overflow:hidden; border:1px solid var(--line); border-radius:21px; background:linear-gradient(140deg,rgba(255,255,255,.09),rgba(255,255,255,.045)); }
  .stat:after { content:""; position:absolute; width:130px; height:100px; right:-42px; top:-48px; border-radius:50%; background:var(--glow,rgba(80,224,209,.15)); filter:blur(22px); pointer-events:none; }
  .stat-label { color:var(--muted); font-size:11px; }
  .stat-value { margin-top:7px; font-size:25px; font-weight:760; line-height:1; }
  .stat-value small { margin-left:4px; color:var(--muted); font-size:11px; font-weight:550; }
  .stat-note { margin-top:7px; color:var(--muted); font-size:10px; }
  .toolbar { gap:12px; justify-content:space-between; margin-bottom:16px; padding:10px; border:1px solid var(--line); border-radius:18px; background:rgba(255,255,255,.045); }
  .tabs { display:flex; gap:4px; align-items:center; flex-wrap:wrap; }
  .tab { border:1px solid transparent; border-radius:11px; padding:9px 12px; background:transparent; color:var(--muted); font-size:11px; cursor:pointer; }
  .tab.active { color:#dffcf7; border-color:rgba(80,224,209,.25); background:rgba(80,224,209,.12); }
  .tools { display:flex; gap:8px; min-width:0; }
  .search,.sort { min-height:38px; border:1px solid var(--line); border-radius:12px; background:rgba(7,12,19,.4); color:var(--ink); outline:none; }
  .search { width:min(250px,34vw); padding:0 12px; }
  .sort { min-width:145px; padding:0 10px; }
  .search::placeholder { color:#8292a1; }
  .section-head { margin:0 2px 10px; }
  .section-head strong { font-size:14px; }
  .section-head span { color:var(--muted); font-size:11px; }
  .room { margin-top:10px; overflow:hidden; border:1px solid var(--line); border-radius:18px; background:linear-gradient(135deg,rgba(255,255,255,.07),rgba(255,255,255,.025)); }
  .room summary { list-style:none; cursor:pointer; }
  .room summary::-webkit-details-marker { display:none; }
  .room-title { min-height:52px; padding:12px 16px; }
  .room-name { display:flex; align-items:center; gap:10px; font-size:13px; font-weight:700; }
  .room-icon { width:27px; height:27px; display:grid; place-items:center; color:#93a5ff; border:1px solid rgba(147,165,255,.18); border-radius:9px; background:rgba(105,120,237,.1); }
  .chev { color:#8191a2; transition:transform .16s ease; }
  details[open] .chev { transform:rotate(90deg); }
  .room-list { padding:0 10px 10px; }
  .device { display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:center; gap:12px; min-height:67px; padding:10px 11px; border-top:1px solid rgba(255,255,255,.07); }
  .device-main { min-width:0; gap:11px; }
  .device-icon { display:grid; place-items:center; flex:0 0 auto; width:35px; height:35px; color:#bacbd4; border:1px solid rgba(255,255,255,.08); border-radius:12px; background:rgba(255,255,255,.05); }
  .device-copy { min-width:0; display:grid; gap:4px; }
  .device-name { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:12px; font-weight:650; }
  .device-sub { color:var(--muted); font-size:10px; line-height:1.35; }
  .pressable { cursor:pointer; touch-action:pan-y; user-select:none; }
  .device-meta { justify-content:flex-end; gap:10px; }
  .level-copy { min-width:70px; text-align:right; }
  .level-number { font-variant-numeric:tabular-nums; font-size:13px; font-weight:760; white-space:nowrap; }
  .level-state { margin-top:3px; color:var(--muted); font-size:9px; white-space:nowrap; }
  .battery { display:block; width:82px; height:28px; overflow:visible; cursor:pointer; touch-action:pan-y; }
  .battery .outline { fill:rgba(255,255,255,.025); stroke:rgba(226,236,243,.64); stroke-width:1.6; }
  .battery .terminal { fill:rgba(226,236,243,.7); }
  .battery .slot { fill:rgba(255,255,255,.09); }
  .battery .fill { transition:width .3s ease; }
  .empty { padding:24px 12px; color:var(--muted); text-align:center; font-size:12px; }
  .foot { margin:14px 2px 0; color:var(--muted); font-size:10px; line-height:1.45; }
  .overlay { position:fixed; inset:0; z-index:999; display:grid; place-items:center; padding:18px; background:rgba(3,7,12,.72); backdrop-filter:blur(8px); }
  .overlay[hidden] { display:none; }
  .modal { width:min(680px,100%); max-height:min(86vh,820px); overflow:auto; border:1px solid rgba(255,255,255,.14); border-radius:22px; background:linear-gradient(145deg,#18212b,#0c121a); box-shadow:0 30px 100px rgba(0,0,0,.55); }
  .modal-head { position:sticky; top:0; z-index:1; justify-content:space-between; padding:16px 18px; border-bottom:1px solid var(--line); background:rgba(18,25,34,.96); backdrop-filter:blur(14px); }
  .modal-head h2 { margin:0; font-size:17px; }
  .modal-body { padding:16px 18px; }
  .setting-card { margin-bottom:14px; padding:14px; border:1px solid var(--line); border-radius:15px; background:rgba(255,255,255,.04); }
  .setting-card h3 { margin:0 0 10px; font-size:12px; }
  .setting-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
  .field { display:grid; gap:6px; color:var(--muted); font-size:10px; }
  .field input { min-height:38px; width:100%; padding:8px 10px; color:var(--ink); border:1px solid var(--line); border-radius:10px; background:rgba(0,0,0,.22); }
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
  @media(max-width:720px) { .stats{gap:8px}.stat{padding:13px;min-height:91px}.stat-value{font-size:22px}.toolbar{align-items:stretch;flex-direction:column}.tools{width:100%}.search{width:100%;flex:1}.sort{min-width:132px}.tabs{justify-content:space-between}.tab{padding:8px 9px}.hero{align-items:flex-start}.subtitle{font-size:12px} }
  @media(max-width:520px) { .shell{padding:15px;border-radius:19px}.topbar{align-items:flex-start;margin-bottom:20px}.top-meta{gap:5px}.pill{padding:7px 8px;font-size:9px}.mark{width:36px;height:36px;border-radius:12px}.brand-copy strong{font-size:12px}.brand-copy span{font-size:10px}.hero{display:block}.hero .button{margin-top:13px}.stats{grid-template-columns:1fr;gap:8px}.stat{min-height:75px}.stat-value{font-size:20px}.toolbar{padding:8px}.tools{flex-direction:column}.search,.sort{width:100%;min-height:40px}.device{grid-template-columns:minmax(0,1fr);gap:8px}.device-meta{justify-content:space-between;padding-left:46px}.level-copy{text-align:left;min-width:unset}.battery{width:86px}.setting-grid{grid-template-columns:1fr}.setting-row{grid-template-columns:minmax(0,1fr) 48px}.setting-row input[type=text]{grid-column:1}.setting-row label{grid-column:2;grid-row:1/3;justify-content:center;flex-direction:column}.room-title{padding:11px 12px}.room-list{padding:0 7px 7px} }
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

class ModernBatterieMonitor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode:"open" });
    this._config = { ...M_BATTERY_DEFAULTS };
    this._hass = null;
    this._registry = null;
    this._registryLoading = false;
    this._history = new Map();
    this._historyKey = "";
    this._historyLoading = false;
    this._filter = "all";
    this._search = "";
    this._sort = "name";
    this._openSettings = false;
    this._pressTimer = null;
    this._notifiedCurrent = "";
    this._storageKey = "modern-batterie-monitor-overrides-v1";
    this._loadLocalOverrides();
    this.shadowRoot.innerHTML = `<style>${M_BATTERY_CSS}</style><div class="shell"></div>`;
    this.shadowRoot.addEventListener("click", (ev) => this._onClick(ev));
    this.shadowRoot.addEventListener("input", (ev) => this._onInput(ev));
    this.shadowRoot.addEventListener("change", (ev) => this._onChange(ev));
    this.shadowRoot.addEventListener("pointerdown", (ev) => this._onPointerDown(ev));
    ["pointerup","pointerleave","pointercancel"].forEach((name) => this.shadowRoot.addEventListener(name, () => this._clearPress()));
  }

  setConfig(config) {
    this._config = { ...M_BATTERY_DEFAULTS, ...config };
    this._loadLocalOverrides();
    this._render();
  }
  set hass(hass) {
    this._hass = hass;
    this._loadRegistries();
    this._loadHistory();
    this._render();
  }
  get hass() { return this._hass; }
  getCardSize() { return 8; }
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
    } catch (_err) { /* Keep dashboard configuration when browser storage is unavailable. */ }
  }

  async _loadRegistries() {
    if (!this._hass?.callWS || this._registry || this._registryLoading) return;
    this._registryLoading = true;
    try {
      const [entities, devices, areas] = await Promise.all([
        this._hass.callWS({ type:"config/entity_registry/list" }),
        this._hass.callWS({ type:"config/device_registry/list" }),
        this._hass.callWS({ type:"config/area_registry/list" }),
      ]);
      this._registry = {
        entities: new Map((entities || []).map((entry) => [entry.entity_id, entry])),
        devices: new Map((devices || []).map((entry) => [entry.id, entry])),
        areas: new Map((areas || []).map((entry) => [entry.area_id, entry.name])),
      };
    } catch (_err) {
      this._registry = { entities:new Map(), devices:new Map(), areas:new Map() };
    } finally {
      this._registryLoading = false;
      this._render();
    }
  }

  _batteryEntities() {
    if (!this._hass?.states) return [];
    const all = Object.values(this._hass.states);
    const candidates = all.filter((state) => {
      const domain = state.entity_id.split(".")[0];
      return (domain === "sensor" || domain === "binary_sensor") && state.attributes?.device_class === "battery";
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
      if (group.numeric.length) {
        for (const state of group.numeric) entries.push(this._makeEntry(state, deviceId, lowBinary));
      } else if (group.binary.length) {
        const main = group.binary.find((state) => state.state === "on") || group.binary[0];
        entries.push(this._makeEntry(main, deviceId, main.state === "on", true));
      }
    }
    return entries;
  }

  _makeEntry(state, deviceId, lowBinary, binaryOnly = false) {
    const entity = this._registry?.entities.get(state.entity_id);
    const device = this._registry?.devices.get(deviceId);
    const areaId = entity?.area_id || device?.area_id || state.attributes?.area_id;
    const level = binaryOnly ? null : mBatteryNumber(state.state);
    const threshold = Number(this._config.low_threshold ?? 25);
    const override = this._config.name_overrides?.[state.entity_id];
    const registeredName = entity?.name || entity?.original_name;
    const displayName = override || registeredName || state.attributes?.friendly_name || device?.name_by_user || device?.name || state.entity_id.split(".")[1].replace(/_/g," ");
    const room = this._registry?.areas.get(areaId) || state.attributes?.area_name || "Ohne Raum";
    return {
      entityId:state.entity_id, deviceId, state, level, lowBinary,
      binaryOnly, room, displayName, low: level != null ? level <= threshold : lowBinary,
      domain:state.entity_id.split(".")[0],
    };
  }

  async _loadHistory() {
    if (!this._hass?.callWS || this._historyLoading) return;
    const entries = this._batteryEntities();
    const ids = entries.map((entry) => entry.entityId).sort();
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
    return new Intl.DateTimeFormat("de-DE", { day:"2-digit", month:"2-digit", year:"numeric" }).format(date);
  }

  _visibleEntries() {
    const hidden = new Set(this._config.hidden_entities || []);
    const needle = this._search.trim().toLocaleLowerCase("de-DE");
    let rows = this._batteryEntities().filter((entry) => !hidden.has(entry.entityId));
    if (this._filter === "low") rows = rows.filter((entry) => entry.low);
    if (this._filter === "no-room") rows = rows.filter((entry) => entry.room === "Ohne Raum");
    if (needle) rows = rows.filter((entry) => `${entry.displayName} ${entry.room} ${entry.entityId}`.toLocaleLowerCase("de-DE").includes(needle));
    rows.sort((a,b) => {
      if (this._sort === "level") return (a.level ?? (a.low?0:101)) - (b.level ?? (b.low?0:101)) || a.displayName.localeCompare(b.displayName,"de");
      if (this._sort === "room") return a.room.localeCompare(b.room,"de") || a.displayName.localeCompare(b.displayName,"de");
      return a.displayName.localeCompare(b.displayName,"de");
    });
    return rows;
  }

  _batteryGraphic(entry) {
    const value = entry.level == null ? (entry.lowBinary ? 2 : 0) : entry.level;
    const color = entry.lowBinary && entry.level == null ? "#ff617b" : mBatteryColor(entry.level);
    const count = Math.max(0, Math.min(10, value / 10));
    const slots = Array.from({length:10}, (_v,i) => {
      const fraction = Math.max(0,Math.min(1,count-i));
      const x = 4 + i*7.05;
      return `<rect class="slot" x="${x}" y="8" width="6.05" height="12" rx="1.2"/><rect class="fill" x="${x}" y="8" width="${(6.05*fraction).toFixed(2)}" height="12" rx="1.2" fill="${color}"/>`;
    }).join("");
    return `<svg class="battery pressable" data-entity="${mBatteryEsc(entry.entityId)}" viewBox="0 0 84 28" role="img" aria-label="${entry.level == null ? (entry.lowBinary?"Batterie niedrig":"Batteriestatus unbekannt") : `${Math.round(entry.level)} Prozent Batterie`}"><rect class="outline" x="1.2" y="4.6" width="76" height="18.8" rx="4.1"/><rect class="terminal" x="78.5" y="9.2" width="4" height="9.6" rx="1.4"/>${slots}</svg>`;
  }

  _row(entry) {
    const date = this._date(this._history.get(entry.entityId));
    const stateText = entry.level != null ? (entry.low ? "Niedriger Akkustand" : "Batteriestand") : (entry.lowBinary ? "Batterie leer / niedrig" : "Kein Prozentwert · Status OK");
    const valueText = entry.level != null ? `${Math.round(entry.level)} %` : (entry.lowBinary ? "Niedrig" : "OK");
    const historyLine = date ? `<span class="device-sub">Letzter Batterietausch (geschätzt): ${mBatteryEsc(date)}</span>` : "";
    return `<article class="device"><div class="device-main"><span class="device-icon" aria-hidden="true">${entry.binaryOnly ? "◉" : "⌁"}</span><div class="device-copy"><span class="device-name pressable" data-entity="${mBatteryEsc(entry.entityId)}">${mBatteryEsc(entry.displayName)}</span><span class="device-sub">${mBatteryEsc(stateText)} · <code>${mBatteryEsc(entry.entityId)}</code></span>${historyLine}</div></div><div class="device-meta">${this._batteryGraphic(entry)}<div class="level-copy pressable" data-entity="${mBatteryEsc(entry.entityId)}"><div class="level-number" style="color:${entry.level == null ? (entry.lowBinary?"#ff7182":"#aab6c1") : mBatteryColor(entry.level)}">${mBatteryEsc(valueText)}</div><div class="level-state">${entry.level == null ? "Binärsensor" : "Batterielevel"}</div></div></div></article>`;
  }

  _render() {
    const root = this.shadowRoot?.querySelector(".shell");
    if (!root) return;
    const all = this._batteryEntities();
    const shown = all.filter((entry) => !(this._config.hidden_entities || []).includes(entry.entityId));
    const rows = this._visibleEntries();
    const lowCount = shown.filter((entry) => entry.low).length;
    const rooms = new Set(shown.map((entry) => entry.room).filter((room) => room !== "Ohne Raum"));
    const groups = new Map();
    for (const row of rows) {
      if (!groups.has(row.room)) groups.set(row.room, []);
      groups.get(row.room).push(row);
    }
    const roomNames = [...groups.keys()].sort((a,b) => a.localeCompare(b,"de"));
    const content = roomNames.map((room) => {
      const roomRows = groups.get(room).sort((a,b) => this._sort === "level"
        ? ((a.level ?? (a.low?0:101)) - (b.level ?? (b.low?0:101)) || a.displayName.localeCompare(b.displayName,"de"))
        : a.displayName.localeCompare(b.displayName,"de"));
      return `<details class="room" open><summary class="room-title"><span class="room-name"><span class="room-icon">⌂</span>${mBatteryEsc(room)} <span class="section-head span">${roomRows.length}</span></span><span class="chev">›</span></summary><div class="room-list">${roomRows.map((entry) => this._row(entry)).join("")}</div></details>`;
    }).join("");
    const localOnly = "Änderungen in diesem Schnellmenü werden in diesem Browserprofil gespeichert; die Kartenoptionen im Dashboard-Editor bleiben zusätzlich verfügbar.";
    root.innerHTML = `
      <div class="topbar"><div class="brand"><div class="mark">HA</div><div class="brand-copy"><strong>Smart Home</strong><span>Modern-Batterie-Monitor</span></div></div><div class="top-meta"><span class="pill"><span class="dot"></span>${this._hass ? "Automatisch erkannt" : "Warte auf Home Assistant"}</span></div></div>
      <div class="hero"><div><div class="eyebrow">Geräteübersicht</div><h1>${mBatteryEsc(this._config.title || "Batterien")}</h1><p class="subtitle">Alle Batterie- und Batteriewarnsensoren auf einen Blick, sortiert nach Räumen.</p></div><button class="button" data-action="settings" aria-label="Konfiguration öffnen">⚙　Konfiguration</button></div>
      <div class="stats"><div class="stat" style="--glow:rgba(80,224,209,.2)"><div class="stat-label">Erkannte Geräte</div><div class="stat-value">${all.length}<small>Geräte</small></div><div class="stat-note">${shown.length} angezeigt · ${all.length-shown.length} ausgeblendet</div></div><div class="stat" style="--glow:rgba(255,126,83,.21)"><div class="stat-label">Batterie niedrig</div><div class="stat-value">${lowCount}<small>unter ${mBatteryEsc(this._config.low_threshold ?? 25)} % oder Binärwarnung</small></div><div class="stat-note">Akkustand im Blick behalten</div></div><div class="stat" style="--glow:rgba(120,136,255,.2)"><div class="stat-label">Räume mit Geräten</div><div class="stat-value">${rooms.size}<small>Räume</small></div><div class="stat-note">Geräte ohne Bereich erscheinen separat</div></div></div>
      <div class="toolbar"><div class="tabs"><button class="tab ${this._filter==="all"?"active":""}" data-filter="all">Alle Geräte</button><button class="tab ${this._filter==="low"?"active":""}" data-filter="low">Niedriger Akkustand</button><button class="tab ${this._filter==="no-room"?"active":""}" data-filter="no-room">Ohne Raum</button></div><div class="tools"><input class="search" type="search" placeholder="Gerät oder Raum suchen…" value="${mBatteryEsc(this._search)}" aria-label="Gerät oder Raum suchen"><select class="sort" aria-label="Sortierung"><option value="name" ${this._sort==="name"?"selected":""}>Gerät A–Z</option><option value="level" ${this._sort==="level"?"selected":""}>Niedrigster Stand</option><option value="room" ${this._sort==="room"?"selected":""}>Raum A–Z</option></select></div></div>
      <div class="section-head"><strong>${this._filter==="low"?"Niedriger Akkustand":this._filter==="no-room"?"Geräte ohne Raum":"Geräte nach Raum"}</strong><span>${rows.length} ${rows.length===1?"Gerät":"Geräte"}</span></div>
      <div class="tree">${content || `<div class="empty">${all.length ? "Keine Geräte entsprechen dem aktuellen Filter." : "Noch keine Sensoren mit Geräteklasse „Batterie“ gefunden."}</div>`}</div>
      <div class="foot">Der letzte Batterietausch wird nur geschätzt, wenn der Verlauf einen deutlichen Anstieg auf einen hohen Ladezustand oder den Wechsel von „niedrig“ zu „OK“ enthält. Fehlt der Verlauf, wird kein Datum angezeigt.</div>
      <div class="overlay" data-overlay hidden><section class="modal" role="dialog" aria-modal="true" aria-label="Batterie-Monitor konfigurieren"><div class="modal-head"><h2>Modern-Batterie-Monitor konfigurieren</h2><button class="button" data-action="close-settings" aria-label="Schließen">✕</button></div><div class="modal-body"><div class="setting-card"><h3>Anzeige und Benachrichtigung</h3><div class="setting-grid"><label class="field">Schwelle für niedrigen Akkustand (%)<input data-setting="threshold" type="number" min="0" max="100" value="${mBatteryEsc(this._config.low_threshold ?? 25)}"></label><label class="field">Home-Assistant-Benachrichtigungsdienst<input data-setting="service" type="text" placeholder="notify.mobile_app_dein_handy" value="${mBatteryEsc(this._config.notification_service || "")}"></label></div><p class="note">Benachrichtigungen laufen, solange diese Karte in Home Assistant geöffnet ist. Für dauerhaft aktive Meldungen eignet sich zusätzlich eine Home-Assistant-Automation.</p><label class="toggle-line"><input data-setting="notifications" type="checkbox" ${this._config.notifications_enabled?"checked":""}> Benachrichtigungen bei neu niedrigem Akkustand aktivieren</label></div><div class="setting-card"><h3>Geräte anpassen</h3><div class="settings-list">${all.map((entry)=>`<div class="setting-row"><div class="setting-entity"><strong>${mBatteryEsc(entry.displayName)}</strong><span>${mBatteryEsc(entry.entityId)} · ${mBatteryEsc(entry.room)}</span></div><input type="text" data-rename="${mBatteryEsc(entry.entityId)}" placeholder="Anzeigename anpassen" value="${mBatteryEsc(this._config.name_overrides?.[entry.entityId] || "")}"><label><input type="checkbox" data-hide="${mBatteryEsc(entry.entityId)}" ${(this._config.hidden_entities||[]).includes(entry.entityId)?"checked":""}> Ausblenden</label></div>`).join("") || `<div class="empty">Keine Batterie-Sensoren vorhanden.</div>`}</div></div><div class="modal-actions"><button class="button" data-action="close-settings">Abbrechen</button><button class="button primary" data-action="save-settings">Speichern</button></div><p class="note">${mBatteryEsc(localOnly)}</p></div></section></div>`;
    this._maybeNotify(shown);
  }

  _onClick(ev) {
    const filter = ev.composedPath().find((node) => node?.dataset?.filter);
    if (filter) { this._filter = filter.dataset.filter; this._render(); return; }
    const action = ev.composedPath().find((node) => node?.dataset?.action)?.dataset.action;
    if (action === "settings") { this._openSettings = true; this.shadowRoot.querySelector("[data-overlay]").hidden = false; return; }
    if (action === "close-settings") { this._openSettings = false; this.shadowRoot.querySelector("[data-overlay]").hidden = true; return; }
    if (action === "save-settings") { this._saveSettings(); return; }
    const overlay = ev.composedPath().find((node) => node?.dataset?.overlay != null);
    if (overlay && ev.target === overlay) { overlay.hidden = true; this._openSettings = false; }
  }

  _onInput(ev) {
    if (ev.target.matches?.(".search")) {
      this._search = ev.target.value;
      const start = ev.target.selectionStart;
      this._render();
      const input = this.shadowRoot.querySelector(".search");
      input?.focus();
      try { input?.setSelectionRange(start,start); } catch (_err) { /* Search input type may not support selection. */ }
    }
  }
  _onChange(ev) {
    if (ev.target.matches?.(".sort")) { this._sort = ev.target.value; this._render(); }
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
    const threshold = Number(this.shadowRoot.querySelector('[data-setting="threshold"]')?.value ?? 25);
    const service = this.shadowRoot.querySelector('[data-setting="service"]')?.value?.trim() || "";
    const notifications = !!this.shadowRoot.querySelector('[data-setting="notifications"]')?.checked;
    const hidden = [];
    const names = {};
    this.shadowRoot.querySelectorAll("[data-hide]").forEach((input) => { if (input.checked) hidden.push(input.dataset.hide); });
    this.shadowRoot.querySelectorAll("[data-rename]").forEach((input) => { if (input.value.trim()) names[input.dataset.rename] = input.value.trim(); });
    this._config = { ...this._config, low_threshold:Math.max(0,Math.min(100,threshold)), notification_service:service, notifications_enabled:notifications, hidden_entities:hidden, name_overrides:names };
    try { localStorage.setItem(this._storageKey, JSON.stringify({ low_threshold:this._config.low_threshold, notification_service:service, notifications_enabled:notifications, hidden_entities:hidden, name_overrides:names })); } catch (_err) { /* Settings remain active until the card is reloaded. */ }
    mBatteryFire(this, "config-changed", { config:this._config });
    this._openSettings = false;
    this._render();
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
    const details = rows.filter((row)=>newlyLow.includes(row.entityId)).map((row)=>`${row.displayName}: ${row.level == null ? "Batterie niedrig" : `${Math.round(row.level)} %`}${row.room !== "Ohne Raum" ? ` (${row.room})` : ""}`).join("\n");
    try { await this._hass.callService(domain,service,{title:"Batteriestand niedrig",message:details}); } catch (_err) { /* Invalid or unavailable notify services are ignored. */ }
  }
}

class ModernBatterieMonitorEditor extends HTMLElement {
  constructor() { super(); this.attachShadow({mode:"open"}); this._config={...M_BATTERY_DEFAULTS}; this.shadowRoot.addEventListener("change",(ev)=>this._changed(ev)); }
  setConfig(config) { this._config={...M_BATTERY_DEFAULTS,...config}; this._render(); }
  set hass(hass) { this._hass=hass; this._render(); }
  get hass() { return this._hass; }
  _render() {
    this.shadowRoot.innerHTML = `<style>${M_BATTERY_CSS}:host{display:block}.shell{padding:16px}.edit-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.field{margin-bottom:12px}.hint{font-size:11px;color:var(--secondary-text-color,#8796a4)}@media(max-width:520px){.edit-grid{grid-template-columns:1fr}}</style><div class="shell"><h2>Modern-Batterie-Monitor</h2><p class="hint">Räume und Geräte werden automatisch aus der Home-Assistant-Geräte- und Bereichszuordnung gelesen.</p><div class="edit-grid"><label class="field">Überschrift<input data-field="title" value="${mBatteryEsc(this._config.title)}"></label><label class="field">Schwelle für niedrigen Akkustand (%)<input data-field="low_threshold" type="number" min="0" max="100" value="${mBatteryEsc(this._config.low_threshold)}"></label></div><label class="field">Ausgeblendete Entitäten (eine Entity-ID pro Zeile)<textarea data-field="hidden_entities" rows="4">${mBatteryEsc((this._config.hidden_entities||[]).join("\n"))}</textarea></label><label class="field">Eigene Anzeigenamen (eine Zeile je Entität: entity_id = Anzeigename)<textarea data-field="name_overrides" rows="5">${mBatteryEsc(Object.entries(this._config.name_overrides||{}).map(([id,name])=>`${id} = ${name}`).join("\n"))}</textarea></label><label class="toggle-line"><input data-field="notifications_enabled" type="checkbox" ${this._config.notifications_enabled?"checked":""}> Benachrichtigungen aktivieren</label><label class="field">Benachrichtigungsdienst<input data-field="notification_service" placeholder="notify.mobile_app_dein_handy" value="${mBatteryEsc(this._config.notification_service||"")}"></label></div>`;
  }
  _changed() {
    const get=(key)=>this.shadowRoot.querySelector(`[data-field="${key}"]`);
    const hidden=(get("hidden_entities")?.value||"").split(/\r?\n|,/).map((v)=>v.trim()).filter(Boolean);
    const names={};
    (get("name_overrides")?.value||"").split(/\r?\n/).forEach((line)=>{const split=line.indexOf("=");if(split>0){const id=line.slice(0,split).trim(),name=line.slice(split+1).trim();if(id&&name)names[id]=name;}});
    const config={...this._config,title:get("title")?.value||"Batterien",low_threshold:Number(get("low_threshold")?.value||25),hidden_entities:hidden,name_overrides:names,notifications_enabled:!!get("notifications_enabled")?.checked,notification_service:get("notification_service")?.value?.trim()||""};
    this._config=config;
    mBatteryFire(this,"config-changed",{config});
  }
}

if (!customElements.get("modern-batterie-monitor")) customElements.define("modern-batterie-monitor",ModernBatterieMonitor);
if (!customElements.get("modern-batterie-monitor-editor")) customElements.define("modern-batterie-monitor-editor",ModernBatterieMonitorEditor);
window.customCards = window.customCards || [];
if (!window.customCards.some((card)=>card.type==="modern-batterie-monitor")) {
  window.customCards.push({type:"modern-batterie-monitor",name:"Modern-Batterie-Monitor",description:"Raumübersicht für Prozent- und Binärsensoren mit Batterie-Geräteklasse.",preview:true});
}

