const CACHE_NAME = "flight-assessment-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./styles.css", // include your CSS if any
  "./main.js",    // include your JS if any
  "./signatures/jack.png",
  "./signatures/chris.png",
  "./signatures/bradley.png",
  "./signatures/odysseus.png",
  "./libs/html2pdf.bundle.min.js",
  "./libs/jspdf.umd.min.js",
  "./libs/jspdf.plugin.autotable.min.js",
  "./libs/html2pdf.bundle.min.js"

];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
