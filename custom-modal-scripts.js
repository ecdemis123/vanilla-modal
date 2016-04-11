(function() {

  window.alert = function(text) {
    customAlertModal(text)
  }

  customAlertModal = function(text) {
    //append div to the body
    document.getElementById('test').innerHTML = text;
  }

})();
