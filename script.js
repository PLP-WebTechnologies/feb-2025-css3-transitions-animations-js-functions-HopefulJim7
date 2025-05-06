// Function to animate an image on click
function animateImage(event) {
    const image = event.target;
    image.classList.add('animate');
  
    // Remove the animation class after animation duration
    setTimeout(() => {
      image.classList.remove('animate');
    }, 1000);
  
    // Save the clicked image ID for persistence
    savePreference('lastClickedImage', image.id);
  }
  
  // Function to save user preference in localStorage
  function savePreference(key, value) {
    localStorage.setItem(key, value);
  }
  
  // Function to retrieve a saved preference from localStorage
  function getPreference(key) {
    return localStorage.getItem(key);
  }
  
  // Apply click event to all images
  document.querySelectorAll('.image-container img').forEach(img => {
    img.addEventListener('click', animateImage);
  });
  
  // On page load, check if there's a stored image preference and simulate a click
  window.addEventListener('load', function () {
    const lastClicked = getPreference('lastClickedImage');
    if (lastClicked) {
      document.getElementById(lastClicked).click();
    }
  });