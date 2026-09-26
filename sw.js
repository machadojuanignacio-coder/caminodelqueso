// Programamos jugando: guarda los juegos para que abra rápido y funcione sin internet.
// Al publicar una versión nueva o sumar un juego, cambiá VERSION y agregá sus archivos a la lista.
const VERSION = 'juegos-v4';
const ARCHIVOS = [
  './', './index.html', './juegos.js', './camino.html', './tv.html', './manifest.webmanifest',
  './peerjs.min.js', './qrcode.js',
  './baloo2-600.woff2', './baloo2-800.woff2',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png',
  './azules.html', './azules-tv.html',
  './azules-192.png', './azules-512.png', './azules-maskable-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Primero lo guardado (rápido y sin internet); en segundo plano se actualiza para la próxima vez.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.open(VERSION).then((cache) =>
      cache.match(req, { ignoreSearch: true }).then((guardado) => {
        const red = fetch(req).then((resp) => {
          if (resp && resp.ok) cache.put(req, resp.clone());
          return resp;
        }).catch(() => guardado);
        return guardado || red;
      })
    )
  );
});
