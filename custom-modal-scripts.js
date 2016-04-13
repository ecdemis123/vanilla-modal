var modal = (function() {

  var modal = document.getElementById("awesomeModal");
  var modalText = document.getElementById("modal-text");

  function openModal(siteName, messageBody) {
    if(modal.classList.contains("fade-out")){
      modal.classList.remove("fade-out");
    }
    modalText.innerHTML = siteName + " says: " + messageBody;
    modal.classList.add("slide-in");
  }

  function closeModal() {
    modal.classList.add("fade-out");
    setTimeout(function() {
      modal.classList.remove("slide-in");
    }, 500);
  }

  var publicAPI = {
    open: openModal,
    close: closeModal
  }
  return publicAPI;

})();
