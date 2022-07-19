importScripts("/precache-manifest.3920dcd15ce6e80d3a0fc25306686a89.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener("install", function () {
  console.log("[PWA----------------Builder] Install Event processing");
});

self.addEventListener('fetch', event => {
  console.log("URL ++++++++++++++++", event)

  const url = new URL(event.request.url);
  // If this is an incoming POST request for the
  // registered "action" URL, respond to it.
  if (event.request.method === 'POST' &&
      url.pathname === '/') {
    event.respondWith((async () => {
      const formData = await event.request.formData();
      const link = formData.get('link') || '';
      const text = formData.get('text') || '';
      console.log(link)
      console.log(text)
      // const responseUrl = await saveBookmark(link);
      // return Response.redirect(responseUrl, 303);
    })());
  }
});

self.precacheManifest = [].concat(self.precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));
