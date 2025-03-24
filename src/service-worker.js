const LAST_VERSION = 3;
const BASE_URL = self.location.pathname.replace(/\/service-worker\.js$/, ''); // Obtiene el prefijo correcto
const CACHE_NAME = `mi-app-cache-v${LAST_VERSION}`;
const URLS_A_CACHEAR = [
  `${BASE_URL}/index.html`,
  `${BASE_URL}/assets/distribution.css`,
  `${BASE_URL}/assets/distribution.js`,
  `${BASE_URL}/boot.js`,
  `${BASE_URL}/importer.js`
  `${BASE_URL}/`,
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_A_CACHEAR);
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Ignorar peticiones de socket.io
  if (url.pathname.startsWith('/socket.io/')) {
    return; // No intercepta esta petición
  }
  // Ignorar peticiones WebSocket
  if (event.request.headers.get('Upgrade') === 'websocket') {
    return;
  }
  // Solo cacheamos peticiones GET (evita problemas con POST, WebSockets, etc.)
  if (event.request.method !== 'GET') {
    return;
  }
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
