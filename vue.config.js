module.exports = {
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    },
    manifestOptions: {
      theme_color: "#448aff",
      background_color: "#448aff",
      display: "standalone",
      start_url: "/",
      share_target: {
        action: "/",
        enctype: "multipart/form-data",
        method: "POST",
        params: {
            title: "title",
            text: "text",
            url: "url",
            files: [{
                name: "media",
                accept: [
                  "audio/*",
                  "image/*",
                  "video/*"
                ]
              }]
        }
      },
      icons: [
        {
          "src": "img/icons/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
      ]
    }
  }
}