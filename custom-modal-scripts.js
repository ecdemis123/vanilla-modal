var modal = document.getElementById("awesomeModal");
var placeholderText = document.getElementById("placeholderText");

var alertModal  = function(siteName, messageBody) {
  if (modal.classList.contains("fade-out")) {
    modal.classList.remove("fade-out");
  }
  if (!messageBody){
    messageBody = 'No message set!';
  }
  if (!siteName){
    messageBody = 'No site-name set!';
  }
  placeholderText.innerHTML = siteName + " says " + messageBody;
  modal.classList.add("slide-in");
}

var closeModal = function () {
  modal.classList.add("fade-out");
  setTimeout(function () {
    modal.classList.remove("slide-in");
  }, 500);
}
