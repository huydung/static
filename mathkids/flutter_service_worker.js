'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "76d86d1276f47a1e3dbf7a1cd260a605",
"index.html": "001d3b00c908bbe8478f1ec8025e00ad",
"/": "001d3b00c908bbe8478f1ec8025e00ad",
"main.dart.js": "f13114e1470b147551a88c619869b472",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7eeee5f3c3123d86ab6eb253a08c23e1",
"assets/AssetManifest.json": "7c52481e4391227a07cd7a11d40cab6e",
"assets/NOTICES": "84dabc2451698eca5d7a904927085106",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/m1_4_count_triangles/c_blue.png": "c2b3c659d44f0b4316d303152f413158",
"assets/assets/m1_4_count_triangles/b_blue.png": "73ae8b0b2f295674739c4996b41902c5",
"assets/assets/m1_4_count_triangles/square1.png": "b5aca818d6683c0747020c4c9824b6b7",
"assets/assets/m1_4_count_triangles/8.png": "dde0d2702307e5aaaa69d76ab51878a2",
"assets/assets/m1_4_count_triangles/d_blue.png": "9a53300b348b4906413390248fce8bf2",
"assets/assets/m1_4_count_triangles/1_blue.png": "bd50e2216d38aff6428b612703490c1e",
"assets/assets/m1_4_count_triangles/square1_blue.png": "08f67f2fcd864b1ac9eee33d49da8c58",
"assets/assets/m1_4_count_triangles/a_blue.png": "3277fafc102d46268d6607a1d4cbbf8c",
"assets/assets/m1_4_count_triangles/b.png": "b27fe1a947389839a329b4ca159d6d03",
"assets/assets/m1_4_count_triangles/c.png": "1f8bc5a5333c5e747082cb9430e551e0",
"assets/assets/m1_4_count_triangles/5.png": "694ffec7b7f55533fb9f566ce3040481",
"assets/assets/m1_4_count_triangles/7.png": "4642c6914f91b8c515f971f8a583c46a",
"assets/assets/m1_4_count_triangles/a.png": "7564fff7ddd44fd96268305255a8ace5",
"assets/assets/m1_4_count_triangles/6.png": "9fa0182ba3348f96214ae7cc80ff7f88",
"assets/assets/m1_4_count_triangles/2_blue.png": "0bbc8f0e62a949421ac4c0e0e9365e61",
"assets/assets/m1_4_count_triangles/3_blue.png": "b0b53fec8cbf7a5b7cf80b749e639b6b",
"assets/assets/m1_4_count_triangles/d.png": "e4e9d7e39a801269107ea1f57c848bcb",
"assets/assets/m1_4_count_triangles/2.png": "0ef61b365a39ffb272927098128339db",
"assets/assets/m1_4_count_triangles/3.png": "6b146af81931ce7edd7425c194fa6035",
"assets/assets/m1_4_count_triangles/1.png": "f23aa65390c93fff15e36a298672fa6f",
"assets/assets/m1_1_chon_manh_ghep/Option4.png": "dc6e03504749fd40eb30efd472c85653",
"assets/assets/m1_1_chon_manh_ghep/Option1.png": "8bf2360901f129e99d5a9387bb5ae85b",
"assets/assets/m1_1_chon_manh_ghep/DeBai.png": "bcc2ea6e2686911db10122395a926b62",
"assets/assets/m1_1_chon_manh_ghep/Option2.png": "7e4f211d07910d5268411065e006ad58",
"assets/assets/m1_1_chon_manh_ghep/Option3.png": "ff05dc64cbd7ce1c01b6b34d74406224",
"assets/assets/Mathkids.png": "a40f537450f8f6d2ff3dd000e8f780ce",
"assets/assets/m1_2_order_rotate/Presentation1.pptx": "cfa44fcd855e0dae0b917b57b292572b",
"assets/assets/m1_2_order_rotate/4.jpg": "17b06429c766873fc4c6bd381fde62e8",
"assets/assets/m1_2_order_rotate/2.jpg": "7e48f0b242b13bf213d19c0a9b198890",
"assets/assets/m1_2_order_rotate/3.jpg": "1801ba9947d814b251758eaa9dff48d2",
"assets/assets/m1_2_order_rotate/1.jpg": "88fa38f44dd9dda27f2aace490a8d8e0",
"assets/assets/m1_3_memory/rabbit.jpg": "37a851c6941a04556bb9ec1a652e7014",
"assets/assets/m1_3_memory/elephant.jpg": "8230718d839442a43a5b3a466e7dacd6",
"assets/assets/m1_3_memory/lion.jpg": "a11a8af6f8773f71c5adb54fd60904cb",
"assets/assets/m1_3_memory/zebra.jpg": "180c850e30a76577ca43557d86b4eed3",
"assets/assets/m1_3_memory/hippo.jpg": "e73d9466f29e3912a6a943c1566ef55d",
"assets/assets/m1_3_memory/penguin.jpg": "2cfbf2e688a9c8be5b03abd9482b5c55",
"assets/assets/m1_3_memory/animals.pptx": "428938ba67f74cc9ed94c4e2fd170bcc",
"assets/assets/m1_3_memory/monkey.jpg": "ae13fa5afab9016e369ef09bba899979",
"assets/assets/m1_3_memory/pig.jpg": "dca396b750aca7c41cfa05a6a411364d",
"assets/assets/m1_3_memory/card_back.jpg": "534647d33833a48b63672be8d8583d9f",
"assets/assets/sound/wrong1.mp3": "38245c337ba2d0ead309ceb416b750e7",
"assets/assets/sound/wrong2.mp3": "dc9f52688a7b826db0dfaf94ef50b528",
"assets/assets/sound/wrong3.mp3": "e7f50bdf7e625d82c474945753a1a0c8",
"assets/assets/sound/correct3.mp3": "23a8d4a7eba82e3e28a8f01bf0a5ea27",
"assets/assets/sound/correct2.mp3": "2e33e4fa43f347ec9ccde2e8e5b0e88c",
"assets/assets/sound/correct1.mp3": "8b59caef6aa7536bae23bdb892c341d1",
"assets/assets/sound/cheer1.mp3": "679cc4b0e75b75e569e77a4ab5e6dcfa",
"assets/assets/sound/cheer2.mp3": "49c338a2d866e66d1b6d371e1fd1ea50",
"assets/assets/lose3.gif": "7171e014b341982e52ea2c879cd41c8c",
"assets/assets/win1.gif": "efc403ea5c75af0af611f8333dcd2553",
"assets/assets/lose2.gif": "e0cf7558dc935c44ec0fd170b3babc76",
"assets/assets/win2.gif": "c05b06af6d0a60e3576c115e0f524d5c",
"assets/assets/win3.gif": "70f472d70799ee69bcb6fc0f72774410",
"assets/assets/lose1.gif": "1429d527e4577914b19bb2941ba461e1"
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
