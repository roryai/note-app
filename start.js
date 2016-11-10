window.onload = (function() {

  var div = document.createElement("div");
  div.setAttribute("id", "app");
  var div_text = document.createTextNode("Hello");
  div.appendChild(div_text);
  document.body.insertBefore(div, document.body.firstChild);

})();
var noteController = new NoteController();
noteController.divPopulator();
