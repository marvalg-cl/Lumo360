const CACHE='lumo360-final-unico';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('lumo360-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const r=event.request;if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin)return;event.respondWith(caches.match(r).then(cached=>cached||fetch(r).then(response=>{const copy=response.clone();caches.open(CACHE).then(c=>c.put(r,copy)).catch(()=>{});return response;}).catch(()=>caches.match('./index.html'))));});
