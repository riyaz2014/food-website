self.addEventListener('install' , (event)=>{
    console.log("sw is installed")
    event.waitUntil(
    caches.open("static")
    .then((Cache)=>{
        Cache.addAll([
            '/',
            '/js/script.js',
            '/css/style.css',
            'images/about-icon-1.png',
            'images/about-icon-2.png',
            'images/about-icon-3.png',
            'images/about-icon-4.png',
            'images/about-img-1.png',
            'images/about-img.png',
            'images/blog-img-1.jpg',
            'images/blog-img-2.jpg',
            'images/blog-img-3.jpg',
            'images/blog-img-4.jpg',
            'images/blog-img-5.jpg',
            'images/blog-img-6.jpg',
            'images/food-galler-img-1.jpg',
            'images/food-galler-img-2.jpg',
            'images/food-galler-img-3.jpg',
            'images/food-galler-img-4.jpg',
            'images/food-galler-img-5.jpg',
            'images/food-galler-img-6.jpg',
            'images/food-img-1.png',
            'images/food-img-2.png',
            'images/food-img-3.png',
            'images/food-img-4.png',
            'images/food-img-5.png',
            'images/home-slide-1.jpg',
            'images/home-slide-2.jpg',
            'images/home-slide-3.jpg'
        ]).catch((error)=>{
            console.log(error)
        })
    })
    );
})

self.addEventListener('activate' , ()=>{
    console.log("sw is Activated")
})


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // The responce is in the cache
        if (response) {
          return response;
        }

        // No cache match, we attempt to fetch it from the network
        return fetch(event.request);
      }
    )
  );
});