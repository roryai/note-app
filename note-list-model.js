(function(exports){
function NoteList(){
  this.noteArray = [];
};

NoteList.prototype.notePrinter = function () {
    return this.noteArray;
};

NoteList.prototype.storeNote = function(text) {
  this.noteArray.push(new Note(text));
};

exports.NoteList = NoteList;

})(this);
