(function() {

  var modal = document.getElementById("awesomeModal");
  var button = document.getElementById("openModalButton");


  window.alert = function(siteName, messageBody) {
    customAlertModal(siteName, messageBody)
  }

  customAlertModal = function(siteName, messageBody) {
    document.querySelector('#awesomeModal p').innerHTML = siteName + " says " + messageBody;
    modal.style.display = "block";
  }

  closeModal = function() {
    modal.style.display = "none";
  }

})();
