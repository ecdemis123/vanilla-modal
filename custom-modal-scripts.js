var modal = document.getElementById("awesomeModal");
var placeholderText = document.getElementById("placeholderText");

var alertModal  = function(siteName, messageBody) {
  // modal.classList = "modal";
  // console.log(modal.classList);
  if(modal.classList.contains("fade-out")) {
    modal.classList.remove("fade-out");
  }

  if(modal.classList.contains("slide-in")) {
    modal.classList.remove("slide-in");
  }
  if(!messageBody){
    messageBody = 'No message set!';
  }
  // document.querySelector('.modal-content p').innerHTML = siteName + " says " + messageBody;
  placeholderText.innerHTML = siteName + " says " + messageBody;
  modal.classList.add("slide-in");
  // console.log(modal.classList);
}

var closeModal = function() {
  modal.classList.remove("slide-in");
  modal.className += " fade-out";
  // console.log(modal.classList);
}
