// const imgElements = [
//   document.querySelector('.firstimg'),
//   ...document.querySelectorAll('.slide')
// ];

// let currentIndex = 0;

// // Initialize all images
// imgElements.forEach((img, index) => {
//   img.style.opacity = index === 0 ? 1 : 0;
//   img.style.zIndex = index === 0 ? 1 : 0;
// });

// function showNextImage() {
//   // Hide current image
//   imgElements[currentIndex].style.opacity = 0;
//   imgElements[currentIndex].style.zIndex = 0;

//   // Move to next
//   currentIndex = (currentIndex + 1) % imgElements.length;

//   // Show next image
//   imgElements[currentIndex].style.opacity = 1;
//   imgElements[currentIndex].style.zIndex = 1;

//   // Decide delay: 10s for first image, 4s for others
//   const delay = currentIndex === 0 ? 10000 : 4000;

//   // Call function again after delay
//   setTimeout(showNextImage, delay);
// }

// // Start slideshow
// setTimeout(showNextImage, 10000); // show first image for 10 seconds

