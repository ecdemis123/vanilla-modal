(function() {

  var modal = document.getElementById("awesomeModal");

  window.alert = function(siteName, messageBody) {
    customAlertModal(siteName, messageBody)
  }

  customAlertModal = function(siteName, messageBody) {
    document.querySelector('.modal-content p').innerHTML = siteName + " says " + messageBody;
    modal.className = "modal slide-in";
    // modal.style.display = "block";
  }

  closeModal = function() {
    modal.className += " fade-out";
  }

})();
