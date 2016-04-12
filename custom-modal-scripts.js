(function() {

  var modal = document.getElementById("awesomeModal");
  var modalText = document.getElementById("modal-text");

  window.alert = function(siteName, messageBody) {
    customAlertModal(siteName, messageBody)
  }

  customAlertModal = function(siteName, messageBody) {
    if(modal.classList.contains("fade-out")){
      modal.classList.remove("fade-out");
    }
    if(modal.classList.contains("slide-in")) {
      modal.classList.remove("slide-in");
    }
    modalText.innerHTML = siteName + " says " + messageBody;
    modal.classList.add("slide-in");
  }

  closeModal = function() {
    modal.classList.add("fade-out");
  }

})();
