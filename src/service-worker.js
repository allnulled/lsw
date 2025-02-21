const LAST_VERSION = 1;
const BASE_URL = self.location.pathname.replace(/\/sw\.js$/, ''); // Obtiene el prefijo correcto
const CACHE_NAME = `mi-app-cache-v${LAST_VERSION}`;
const URLS_A_CACHEAR = [
  `${BASE_URL}/`,           
  `${BASE_URL}/index.html`,
  `${BASE_URL}/distribution.css`,
  `${BASE_URL}/distribution.js`,
  `${BASE_URL}/boot.js`,
  `${BASE_URL}/importer.js`
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_A_CACHEAR);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});
