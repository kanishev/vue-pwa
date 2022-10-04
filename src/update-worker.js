async function updateWorker() {
  const registration = await navigator.serviceWorker.ready
  registration.update()

  if (registration.waiting) {
      registration.waiting.postMessage('SKIP_WAITING')
  }

  // detect Service Worker update available and wait for it to become installed
  registration.addEventListener('updatefound', function() {
      console.log('updated')
      if (registration.installing) {
          // wait until the new Service worker is actually installed (ready to take over)
          registration.installing.addEventListener('statechange', function() {
              if (registration.waiting) {
                  // if there's an existing controller (previous Service Worker), show the prompt
                  if (navigator.serviceWorker.controller) {
                      registration.waiting.postMessage('SKIP_WAITING')
                  } else {
                      console.log('Service Worker initialized for the first time')
                  }
              }
          })
      }
  })

  let refreshing = false;

  navigator.serviceWorker.addEventListener('controllerchange', function() {
      if (!refreshing) {
          window.location.reload()
          refreshing = true
      }
  })
}

setInterval(updateWorker, 30000);