(function(exports){

  var noteIndex = 0;

  function Note(text){
    this.text = text;
    this.id = noteIndex++;
  }

  Note.prototype.textReturn = function () {
    return this.text;
  };

  Note.prototype.idReturn = function () {
    return this.id;
  };

  exports.Note = Note;
})(this);
