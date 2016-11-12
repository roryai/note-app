(function(exports){

function NoteList(){
  this.noteArray = [];
};

NoteList.prototype.storeNote = function(noteObj) {
  this.noteArray.push(noteObj);
};

NoteList.prototype.getNoteArray = function () {
  return this.noteArray;
};

NoteList.prototype.getStringArray = function () {
  var stringArr = this.noteArray.map(function(noteObj){
    return noteObj.text
  })
  return stringArr;
};

exports.NoteList = NoteList;

})(this);
