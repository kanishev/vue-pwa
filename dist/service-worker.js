importScripts("/precache-manifest.7df8059f18d9f2b7024c9c873a7f935e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
