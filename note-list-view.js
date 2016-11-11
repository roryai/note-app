(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  var twentyCharacters = function (string) {
    if (string.length > 20) {
      return (string.slice(0, 20) + "...");
    } else {
      return string;
    }
  };

  NoteListView.prototype.htmlArrayWrapper = function () {
    var stringArr = this.noteList.stringArray();
    var resultArray = stringArr.map(function(string) {
      return ("<div><li>") + twentyCharacters(string) + ("</li></div>");
    }).join("");
    return resultArray;
  };

  NoteListView.prototype.singleNoteLinkCreator = function (noteObj) {
    anchor =  "<a href='http://localhost:8080notes/" + noteObj.idReturn() + "'>"
              + twentyCharacters(noteObj.textReturn()) + "</a>";
    return "<div><li>" + anchor + "</li></div>";
  };

  // <div><li><a href="http://localhost:8080#notes/1"></a></li></div>

  NoteListView.prototype.htmlJoiner = function () {
    return ("<ul>" + this.htmlArrayWrapper() + "</ul>");
  };

  // NoteListView.prototype.linkCreator = function (noteObj) {
  //   var wrapped = this.htmlSingleNoteWrapper(noteObj);
  //
  // };

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
