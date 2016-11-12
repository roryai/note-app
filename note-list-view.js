(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  var twentyCharacters = function (string) {
    if (string.length > 20) {
      return (string.slice(0, 20) + "...");
    } else {return string};
  };

  var noteToAnchor = function (noteObj) {
    return "<a href='http://localhost:8080#notes/" + noteObj.idReturn() + "'>"
           + twentyCharacters(noteObj.textReturn()) + "</a>";
  };

  NoteListView.prototype.returnsArrayOfAnchors = function () {
    return this.noteList.noteArray.map(function(noteObj) {
      return noteToAnchor(noteObj);
    })
  };

  NoteListView.prototype.eachIntoLi = function (array) {
    return array.map(function(anchor) {
      return "<li>" + anchor + "</li>";;
    }).join("");
  };

  NoteListView.prototype.intoDiv = function (string) {
    return "<div>" + string + "</div>";
  };

  NoteListView.prototype.intoUl = function (string) {
    return "<ul>" + string + "</ul>";
  };

  NoteListView.prototype.createsListOfLinks = function () {
    return this.intoUl((this.eachIntoLi(this.returnsArrayOfAnchors())));
  };

  NoteListView.prototype.divCreator = function (divId) {
    div = document.createElement("div");
    div.setAttribute("id", divId);
    document.body.insertBefore(div, document.body.firstChild);
  };

  NoteListView.prototype.divPopulator = function (html, divId) {
    element = document.getElementById(divId);
    element.innerHTML = html;
  };

  exports.NoteListView = NoteListView;

})(this);
