// Build inserts the production assets and a content-based cache version.
const CACHE_PREFIX = `flashker-${self.registration.scope}-`;
const CACHE_NAME = CACHE_PREFIX + "5a43e20b06d64c20";
const ASSETS = ["./index.html","./","./manifest.json","./icon.svg","./favicon-32.png","./apple-touch-icon.png","./icon-192.png","./icon-512.png"];
const scope = new URL(self.registration.scope);

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener("fetch", event => {
    const url = new URL(event.request.url);
    if (event.request.method !== "GET" || url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
    event.respondWith(caches.open(CACHE_NAME).then(async cache => {
        if (event.request.mode === "navigate") {
            try { return await fetch(event.request); }
            catch { return (await cache.match(new URL("index.html", scope).href)) || Response.error(); }
        }
        // Precached static files are identical across Origin-header variants (e.g. Vite's Vary: Origin).
        return (await cache.match(event.request, { ignoreVary: true })) || fetch(event.request);
    }));
});

self.addEventListener("activate", event => {
    event.waitUntil(caches.keys().then(keys => Promise.all(
        keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim()));
});
