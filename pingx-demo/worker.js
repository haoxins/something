
self.addEventListener('activate', event => {
  console.info('worker activate')
})

self.addEventListener('fetch', event => {
  console.info('on fetch')
  console.info(event)
})
