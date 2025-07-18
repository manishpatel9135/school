let bannerImages = [
  'images/banner1.jpg',
  'images/banner2.jpg',
  'images/banner3.jpg'
];

let currentIndex = 0;
let bannerElement = document.getElementById('banner-img');

function changeBanner() {
  currentIndex = (currentIndex + 1) % bannerImages.length;
  bannerElement.src = bannerImages[currentIndex];
}

// Change image every 4 seconds
setInterval(changeBanner, 4000);


