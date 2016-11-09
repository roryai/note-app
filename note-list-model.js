(function(exports){
function NoteList(){
  this.noteArray = [];
};

NoteList.prototype.storeNote = function(text) {
  this.noteArray.push(new Note(text));
};

NoteList.prototype.stringArray = function () {
  var stringArr = this.noteArray.map(function(noteObj){
    return noteObj.text
  })
  return stringArr;
};

exports.NoteList = NoteList;

})(this);
