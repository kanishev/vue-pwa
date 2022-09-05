importScripts("/precache-manifest.7545d970976a703889f167889d35d210.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
      (async () => {
        await caches.match(event.request)
        let fetchRes = await fetch(event.request)
        let manifest = await fetchRes.json()

        delete manifest['start_url']

        console.log('man2', manifest)
        console.log('res', fetchRes)

        let res = new Response(JSON.stringify(manifest), fetchRes);
        return res
      })()
    )
  }

});

self.precacheManifest = [].concat(self.precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));
