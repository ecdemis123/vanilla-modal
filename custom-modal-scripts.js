(function() {

  var modal = document.getElementById("awesomeModal");

  window.alert = function(siteName, messageBody) {
    customAlertModal(siteName, messageBody)
  }

  customAlertModal = function(siteName, messageBody) {
    modal.classList = "modal";
    console.log(modal.classList);
    if(modal.classList.contains("slide-in")) {
      modal.classList.remove("slide-in");
    }
    document.querySelector('.modal-content p').innerHTML = siteName + " says " + messageBody;
    modal.classList.add("slide-in");
    console.log(modal.classList);
  }

  closeModal = function() {
    modal.classList.remove("slide-in");
    modal.className += " fade-out";
    console.log(modal.classList);
  }

})();
