(function() {

  var modal = document.getElementById("awesomeModal");

  window.alert = function(siteName, messageBody) {
    customAlertModal(siteName, messageBody)
  }

  customAlertModal = function(siteName, messageBody) {
    modal.classList.remove("fade-out");
    modal.classList.remove("slide-in");
    console.log("modal class list should just be modal", modal.classList);
    document.querySelector('.modal-content p').innerHTML = siteName + " says " + messageBody;
    modal.classList.add("slide-in");
    console.log(modal.classList);
  }

  closeModal = function() {
    // modal.classList.remove("slide-in");
    modal.className += " fade-out";
    console.log(modal.classList);
  }

})();
