// Define an array of image URLs
const images = [
     'image1.jpg',
     'image2.jpg',
     'image3.jpg',
     // add more image URLs as needed
];

// Initialize an index to keep track of the currently displayed image
let imgIndex = 0;

// Get the image element by its ID
const img = document.getElementById('myimages');

// Set up an interval to change the image every 1000 milliseconds (1 second)
setInterval(() => {
     // Check if we have reached the end of the image array
     if (imgIndex === images.length) {
          imgIndex = 0; // If so, reset the index to the first image
     }

     // Get the URL of the current image
     const imgLink = images[imgIndex];

     // Set the 'src' attribute of the image element to display the current image
     img.setAttribute('src', imgLink);

     // Log the current image URL to the console (for debugging)
     console.log(imgLink);

     // Increment the index to move to the next image in the next iteration
     imgIndex++;
}, 1000); // The interval is set to 1000 milliseconds (1 second)
