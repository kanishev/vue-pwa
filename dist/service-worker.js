importScripts("/precache-manifest.454a86909bd312a8c8bb91d4faa0f444.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

import {precacheAndRoute} from 'workbox-precaching';

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
      const link = formData.get('url') || '';
      const text = formData.get('text') || '';
      const image = formData.get('media') || '';

      console.log(link)
      console.log(text)
      console.log(image)

      return
      // const responseUrl = await saveBookmark(link);
      // return Response.redirect(responseUrl, 303);
    })());
  }
});

precacheAndRoute(self.__WB_MANIFEST);

