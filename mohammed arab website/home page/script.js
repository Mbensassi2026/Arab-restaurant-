
// Function to close the pop-up
function closePopup() {
  var popup = document.getElementById("popup-box");
  popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  var menuLink = document.getElementById("menu-link");
  var contactLink = document.getElementById("contact-link");
  var aboutLink = document.getElementById("about");
  var closePopupButton = document.getElementById("closePopup");

  menuLink.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent the default link behavior
      showPopup("menu");
  });

  contactLink.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent the default link behavior
      showPopup("contact");
  });

  aboutLink.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent the default link behavior
      showPopup("about");
  });

  closePopupButton.addEventListener("click", function() {
      closePopup();
  });
});

  

  
