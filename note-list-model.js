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
// exports.notePrinter = this.notePrinter;
// exports.storeNote = this.storeNote;

})(this);

string = array.join(</div></li><li><div>)
return "<ul><li><div>" + string + "</div></li></ul>"
