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





// NoteList.prototype.getNoteTextById = function (id) {
//   for (i = 0; i < this.noteArray.length; i++) {
//     if (this.noteArray[i].id == [id]) {
//       return this.noteArray[i].text
//     }
//   }
// };

exports.NoteList = NoteList;

})(this);
