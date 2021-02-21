const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
    "/",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/index.html",
    "/style.css",
    "/index.js",
    "/manifest.webmanifest",

];


self.addEventListener("install", function (evt) {    
    // pre cache all static assets
    evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
    );
  
    // tell the browser to activate this service worker immediately once it
    // has finished installing
    self.skipWaiting();
  });
  

  self.addEventListener("activate", function(evt) {
    evt.waitUntil(
      caches.keys().then(keyList => {
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
              console.log("Removing old cache data", key);
              return caches.delete(key);
            }
          })
        );
      })
    );
  
    self.clients.claim();
  });
  

  self.addEventListener('fetch', function(evt) {
    // code to handle requests goes here

    

    
    });
    
