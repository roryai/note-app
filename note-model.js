(function(exports){
  function Note(text, id){
    this.text = text;
    this.id = id;
  }

  Note.prototype.textReturn = function () {
    return this.text;
  };

  Note.prototype.idReturn = function () {
    return this.id;
  };

  exports.Note = Note;
})(this);
