(function() {

  var modal = document.getElementById("awesomeModal");

  window.alert = function(siteName, messageBody) {
    customAlertModal(siteName, messageBody)
  }

  customAlertModal = function(siteName, messageBody) {
    modal.className = "modal";
    document.querySelector('.modal-content p').innerHTML = siteName + " says " + messageBody;
    modal.className += " slide-in";
  }

  closeModal = function() {
    modal.className += " fade-out";
  }

})();
