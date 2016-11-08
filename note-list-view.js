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

  NoteListView.prototype.stringJoiner = function () {
    var string = [];
    string = this.stringArray.join("</div></li><li><div>");
    return ("<ul><li><div>" + string + "</div></li></ul>");
};

exports.NoteListView = NoteListView;

})(this);
