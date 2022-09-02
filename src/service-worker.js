self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// workbox.routing.registerRoute(
//   // Match all navigation requests, except those for URLs whose
//   // path starts with '/admin/'
//   ({request, url}) => request.mode === 'navigate' && request.url.indexOf( '.' ) !== -1 ,
//   new workbox.strategies.StaleWhileRevalidate()
// );

self.addEventListener('fetch', event => {

  const url = new URL(event.request.url)

  if (url.pathname == "/manifest.json") {

    event.respondWith(
      caches.match(event.request).then( _ => {
        return fetch(event.request).then( _ => {

          let manifest = {
            name: "pwa-test",
            short_name: "pwa-vue",
            theme_color: "#448aff",
            icons: [
              {
                src: "img/icons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any",
              }
            ],
            display: "standalone",
            background_color: "#448aff",
            share_target: {
              action: "/",
              enctype: "multipart/form-data",
              method: "POST",
              params: {
                title: "title",
                text: "text",
                url: "url",
                files: [
                  {
                  name: "media",
                  accept: [
                    "audio/*",
                    "image/*",
                    "video/*",
                  ],
                  }
                ],
              },
             },
            }

          let init = { "status" : 200 , "statusText" : "I am a custom service worker response!" };
          let res = new Response(JSON.stringify(manifest), init);
          return res
        })
      })
    )
  }

});

self.precacheManifest = [].concat(self.precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));