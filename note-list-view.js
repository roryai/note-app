(function(exports){

  function NoteListView(noteList){
    this.stringArray = [];
    this.noteList = noteList;
  }

  NoteListView.prototype.stringExtractor = function() {
    for(i = 0; i < this.noteList.noteArray.length; i++){
      this.stringArray.push(this.noteList.noteArray[i].text);
    }
  };

  NoteListView.prototype.htmlWrapper = function () {
    var array = this.stringArray.map(function(string) {
      return ("<li><div>") + string + ("</li></div>");
    }).join("");
    return array;
  };

  NoteListView.prototype.htmlJoiner = function () {
    return ("<ul>" + this.htmlWrapper() + "</ul>");
  };

exports.NoteListView = NoteListView;

})(this);
