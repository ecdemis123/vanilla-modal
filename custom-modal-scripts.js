(function() {

  var modal = document.getElementById("awesomeModal");

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
    document.querySelector('.modal-content p').innerHTML = siteName + " says " + messageBody;
    modal.classList.add("slide-in");
  }

  closeModal = function() {
    console.log(modal.classList);
    modal.classList.add("fade-out");
    console.log(modal.classList);
  }

})();
