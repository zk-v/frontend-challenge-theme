(function() {
  const header = document.querySelector('header');
  // On scroll make main navigation stick to the top of the screen
  window.addEventListener('scroll', () => {
    // Get the height of the header
    var height = header.offsetTop; 
    // Make navigation stick if user scrolls the height of the navigation
    if (window.pageYOffset > height) { 
      header.classList.add("fixed");
    } else { // Remove stuck navigation if user scrolls back to the top of the screen
      header.classList.remove("fixed"); 
    }
  })
})();