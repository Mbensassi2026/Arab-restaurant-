document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.getElementById("submitButton");
  var closePopupButton = document.getElementById("closePopup");

  submitButton.addEventListener("click", function() {
    sendEmail();
  });

  closePopupButton.addEventListener("click", function() {
    closePopup();
  });

  function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:edwardshallowis227@gmail.com.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

    window.location.href = mailtoLink;
  }

  function closePopup() {
    var popupBox = document.getElementById("popup-box");
    popupBox.style.display = "none";
  }
});
