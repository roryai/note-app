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

  NoteListView.prototype.htmlWrapper = function () {
    var stringArr = this.noteList.stringArray();
    var resultArray = stringArr.map(function(string) {
      return ("<li><div>") + twentyCharacters(string) + ("</li></div>");
    }).join("");
    return resultArray;
  };

  NoteListView.prototype.htmlJoiner = function () {
    return ("<ul>" + this.htmlWrapper() + "</ul>");
  };

  exports.NoteListView = NoteListView;

})(this);
