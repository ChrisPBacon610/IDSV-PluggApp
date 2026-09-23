/* IDSV Tentaplugg — offline cache.
   Cache-first: after the first visit the app opens instantly and works with no
   signal. CACHE is rebuilt from the file contents on every build, so publishing
   a new version replaces the old cache rather than serving it forever. */
const CACHE = 'idsv-a2f24a3ccc';
const ASSETS = [
  "./",
  "index.html",
  "questions.js",
  "context.js",
  "flashcards.js",
  "python.js",
  "compendium.js",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png",
  "favicon.ico",
  "fig/fig01-dark.png",
  "fig/fig01-light.png",
  "fig/fig02-dark.png",
  "fig/fig02-light.png",
  "fig/fig03-dark.png",
  "fig/fig03-light.png",
  "fig/fig04-dark.png",
  "fig/fig04-light.png",
  "fig/fig05-dark.png",
  "fig/fig05-light.png",
  "fig/fig06-dark.png",
  "fig/fig06-light.png",
  "fig/fig07-dark.png",
  "fig/fig07-light.png",
  "fig/fig08-dark.png",
  "fig/fig08-light.png",
  "fig/fig09-dark.png",
  "fig/fig09-light.png",
  "fig/fig13-dark.png",
  "fig/fig13-light.png",
  "fig/fig14-dark.png",
  "fig/fig14-light.png",
  "fig/fig15-dark.png",
  "fig/fig15-light.png",
  "fig/fig16-dark.png",
  "fig/fig16-light.png",
  "fig/fig18-dark.png",
  "fig/fig18-light.png",
  "fig/fig19-dark.png",
  "fig/fig19-light.png",
  "fig/fig20-dark.png",
  "fig/fig20-light.png",
  "fig/fig22-dark.png",
  "fig/fig22-light.png",
  "fig/fig23-dark.png",
  "fig/fig23-light.png",
  "fig/fig24-dark.png",
  "fig/fig24-light.png",
  "fig/fig25-dark.png",
  "fig/fig25-light.png",
  "fig/fig26-dark.png",
  "fig/fig26-light.png"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;           /* fonts: let the network handle them */
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match('index.html')))
  );
});
