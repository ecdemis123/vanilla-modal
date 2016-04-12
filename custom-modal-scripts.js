(function() {

  var modal = document.getElementById("awesomeModal");
  var button = document.getElementById("openModalButton");


  window.alert = function(siteName, messageBody) {
    customAlertModal(siteName, messageBody)
  }

  customAlertModal = function(siteName, messageBody) {
    modal.className = "modal";
    document.querySelector('.modal-content p').innerHTML = siteName + " says " + messageBody;
    modal.style.display = "block";
  }

  closeModal = function() {
    modal.className += " fade-out";
  }

})();
