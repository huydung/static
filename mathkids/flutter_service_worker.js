'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "76d86d1276f47a1e3dbf7a1cd260a605",
"index.html": "8c16aae2c62e89e151a272c42e5ec3db",
"/": "8c16aae2c62e89e151a272c42e5ec3db",
"main.dart.js": "3b135f4047d4a45d1f09724be0dfdc6b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7eeee5f3c3123d86ab6eb253a08c23e1",
"assets/m1_1_chon_manh_ghep/Option4.png": "dc6e03504749fd40eb30efd472c85653",
"assets/m1_1_chon_manh_ghep/Option1.png": "f4d58c4ed8144760d3fc39ae86db6551",
"assets/m1_1_chon_manh_ghep/DeBai.png": "bcc2ea6e2686911db10122395a926b62",
"assets/m1_1_chon_manh_ghep/Option2.png": "7e4f211d07910d5268411065e006ad58",
"assets/m1_1_chon_manh_ghep/Option3.png": "ff05dc64cbd7ce1c01b6b34d74406224",
"assets/Mathkids.png": "a40f537450f8f6d2ff3dd000e8f780ce",
"assets/AssetManifest.json": "361245c98a98cd00893fcffe2a5398d8",
"assets/NOTICES": "12eedb478fd21c16113b18d2688109af",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/m1_1_chon_manh_ghep/Option4.png": "dc6e03504749fd40eb30efd472c85653",
"assets/assets/m1_1_chon_manh_ghep/Option1.png": "f4d58c4ed8144760d3fc39ae86db6551",
"assets/assets/m1_1_chon_manh_ghep/DeBai.png": "bcc2ea6e2686911db10122395a926b62",
"assets/assets/m1_1_chon_manh_ghep/Option2.png": "7e4f211d07910d5268411065e006ad58",
"assets/assets/m1_1_chon_manh_ghep/Option3.png": "ff05dc64cbd7ce1c01b6b34d74406224",
"assets/assets/Mathkids.png": "a40f537450f8f6d2ff3dd000e8f780ce",
"assets/assets/sound/wrong1.mp3": "38245c337ba2d0ead309ceb416b750e7",
"assets/assets/sound/wrong2.mp3": "dc9f52688a7b826db0dfaf94ef50b528",
"assets/assets/sound/wrong3.mp3": "e7f50bdf7e625d82c474945753a1a0c8",
"assets/assets/sound/correct3.mp3": "23a8d4a7eba82e3e28a8f01bf0a5ea27",
"assets/assets/sound/correct2.mp3": "2e33e4fa43f347ec9ccde2e8e5b0e88c",
"assets/assets/sound/correct1.mp3": "8b59caef6aa7536bae23bdb892c341d1",
"assets/assets/sound/cheer1.mp3": "679cc4b0e75b75e569e77a4ab5e6dcfa",
"assets/assets/sound/cheer2.mp3": "49c338a2d866e66d1b6d371e1fd1ea50",
"assets/sound/wrong1.mp3": "38245c337ba2d0ead309ceb416b750e7",
"assets/sound/wrong2.mp3": "dc9f52688a7b826db0dfaf94ef50b528",
"assets/sound/wrong3.mp3": "e7f50bdf7e625d82c474945753a1a0c8",
"assets/sound/correct3.mp3": "23a8d4a7eba82e3e28a8f01bf0a5ea27",
"assets/sound/correct2.mp3": "2e33e4fa43f347ec9ccde2e8e5b0e88c",
"assets/sound/correct1.mp3": "8b59caef6aa7536bae23bdb892c341d1",
"assets/sound/cheer1.mp3": "679cc4b0e75b75e569e77a4ab5e6dcfa",
"assets/sound/cheer2.mp3": "49c338a2d866e66d1b6d371e1fd1ea50"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
