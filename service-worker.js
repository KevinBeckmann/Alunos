const CACHE_NAME = "alunos-v1";
const ASSETS = [
  "index.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "exercicios-db.js",
  "professor.html",
  "reservaprofessor.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).catch(() => {
        // If both cache and network fail, return a fallback
        return new Response('Offline - resource not available', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});
