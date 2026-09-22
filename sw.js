const CACHE_NAME = "lumo360-core-v1";
const CORE = ["./", "./index.html", "./manifest.json", "./icons/icon.svg", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-512-maskable.png"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME && k.startsWith("lumo360-")).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => {
    if (cached) return cached;
    return fetch(event.request).then(response => {
      if (response && response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); }
      return response;
    }).catch(() => { if (event.request.mode === "navigate") return caches.match("./index.html"); throw new Error("Offline resource unavailable"); });
  }));
});
