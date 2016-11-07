function NoteList(){
  this.noteArray = [];
};

NoteList.prototype.notePrinter = function () {
    return this.noteArray;
};

NoteList.prototype.storeNote = function(noteObj) {
  this.noteArray.push(new Note(noteObj));
};
