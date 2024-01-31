'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8b0a638afc47f2619a04f5f9d9260524",
"assets/AssetManifest.bin.json": "e1e8279f1d01d1e3fbd04a7d58b5f892",
"assets/AssetManifest.json": "cecb6dabaf524342e550753b53a9f217",
"assets/assets/add_icon.svg": "6c483fded732a99fd1d914954b15c239",
"assets/assets/avatar.jpg": "9fcf68b5e9ea1e05823c85e1b0343168",
"assets/assets/history_icon.svg": "92d406ef4bb96944b4b5cdf34695035f",
"assets/assets/ic_avatar.png": "129692c1e0fe63ba63be8992aa895d59",
"assets/assets/ic_avatar.svg": "7d7d20d2a9580a572b406ed8cd62bb97",
"assets/assets/ic_back.svg": "54893e86c91f06b3316b57867df9fd55",
"assets/assets/ic_btn_close.png": "638c8f5ba2425c0662c77202de1d32a4",
"assets/assets/ic_checked.svg": "4f9d2f65ff48c3c552e43ae125e8a76e",
"assets/assets/ic_checkmark.svg": "6b5423cc4fb267727cfd3b857f7bd69f",
"assets/assets/ic_circle_camera.svg": "a1ce9a8989335b8e28de2fd0fbfc4227",
"assets/assets/ic_close.svg": "134d5d013dc5a3c19aa4b134a8fa3bc5",
"assets/assets/ic_component.svg": "b034f8b0cd8e3471786fcd2a9c3e4b0c",
"assets/assets/ic_delete.svg": "53db3dbf30bd1870136d8a58624ea9b5",
"assets/assets/ic_drop.svg": "745f95c29520923168d252cacf74a73d",
"assets/assets/ic_expel.svg": "8e68ee943a54b6ef3c367680d7fd4d57",
"assets/assets/ic_field_account.svg": "97ee3b3f0ed41f74b5ce68b633b6d27d",
"assets/assets/ic_field_password.svg": "6aa45c42499dca9f24661ac406f69187",
"assets/assets/ic_food.png": "59019a16b5f909dcac4f2e32d941321c",
"assets/assets/ic_group.png": "4a8175ec03ff4e9033d0950d4c8ea9df",
"assets/assets/ic_hide_password.svg": "92292cf67b9550c393e08870885daecd",
"assets/assets/ic_icon_app.png": "993a4c0a09907c3df1f41f2aff55ed70",
"assets/assets/ic_leave_group.svg": "11a9b8e4f49d88b5311c05b15c022a23",
"assets/assets/ic_like.svg": "3ac13848076180dc18352caf233263da",
"assets/assets/ic_next.svg": "c03253395b5ee0c31479529d50b64920",
"assets/assets/ic_order.svg": "8bf30651417e0d8aa4b72fa34be43de3",
"assets/assets/ic_out.svg": "924a5eb4a5b168ba0d7fa47195246077",
"assets/assets/ic_profile.svg": "98861379ce0bd60a05b3912e3492b8d9",
"assets/assets/ic_rectangle.svg": "4ec814f7c4bc480f25eb5a263ec1d7c4",
"assets/assets/ic_rename.svg": "3f4979417c67d582ff99324972616341",
"assets/assets/ic_shop.png": "d30e92c0e2f0ae64fcebb3bc292284f3",
"assets/assets/ic_show_password.svg": "7ef2f897fd50a1e3973a06dbc6df986e",
"assets/assets/ic_square_camera.svg": "a19e42f7587a6a85c01970e3e97193e6",
"assets/assets/ic_star.svg": "1830cfe640419bd52e267275bba32bb8",
"assets/assets/ic_three_dot.svg": "e15102b5f877e7349f811bfd0633c12f",
"assets/assets/ic_unchecked.svg": "72bd09352174268258899599b0b1b7b2",
"assets/assets/ic_x.svg": "13f756f9c8d44081b46e7601db5aa87c",
"assets/assets/menu_icon.svg": "bd466bfb3dd06be669cdbd1fd559aef4",
"assets/assets/png/1.5x/ic_avatar_default.png": "76b4eaa6fc290a2e9f3ebed10b2df176",
"assets/assets/png/1.5x/ic_create_group.png": "2c478d7d79cf3d948b556d2c3176fff8",
"assets/assets/png/1.5x/ic_group_ordering.png": "fbb5e320c8c278227dc4f8e75a14fd88",
"assets/assets/png/1.5x/ic_join_group.png": "9118f771b1545cc4d075f8b567d0b30f",
"assets/assets/png/2.0x/ic_avatar_default.png": "dab29bb70bb30901d0fc17a72299901a",
"assets/assets/png/2.0x/ic_create_group.png": "52edd8616e794929a1e5602ba906d4ca",
"assets/assets/png/2.0x/ic_group_ordering.png": "8e8be311d78fb3ea20a88125167d6375",
"assets/assets/png/2.0x/ic_join_group.png": "77a5c1ba7cbd7c4864d2ccbf4056de9e",
"assets/assets/png/3.0x/ic_avatar_default.png": "f55d2711b3a1dbd7a541299292c8b100",
"assets/assets/png/3.0x/ic_create_group.png": "ebae5a1eee61607d0a93288649814ff3",
"assets/assets/png/3.0x/ic_group_ordering.png": "3b8787962c68db8bca511e795402977b",
"assets/assets/png/3.0x/ic_join_group.png": "e8c74c73b5842b93b4caa366907cb479",
"assets/assets/png/4.0x/ic_avatar_default.png": "08ca70ff408d1db3891235804cdeefb2",
"assets/assets/png/4.0x/ic_create_group.png": "020d1b00e804e332a5d2283703124260",
"assets/assets/png/4.0x/ic_group_ordering.png": "65e3bf696ac3c1c59cb3cc23db16df8e",
"assets/assets/png/4.0x/ic_join_group.png": "9e9c54bc487b9aa992bb900804f730de",
"assets/assets/png/ic_avatar_default.png": "cd35240b345769b75ad9c733cbfb9c5b",
"assets/assets/png/ic_create_group.png": "687c69594cf6a95743c5bbefc32b076c",
"assets/assets/png/ic_group_ordering.png": "819ba2f35937ab84dbbf4af450f1e721",
"assets/assets/png/ic_join_group.png": "1456e640bccc1a2d820d533e5950be06",
"assets/assets/setting_icon.svg": "f7acd856f35ceda21dfb3efe1fd323dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c74cf05b829808aa29b65a6bc9109e79",
"assets/NOTICES": "7e3491e019938670ee8a9c5d1f95da63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "830e42b69f6819fdd7a55821a3cb8b21",
"/": "830e42b69f6819fdd7a55821a3cb8b21",
"main.dart.js": "eb65da0015c5e3b7907ead4b946e0327",
"manifest.json": "bd888126f3b99ea74f9195879c961e37",
"version.json": "6d2d15325df5ec84711852d684b1ebea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
