
(function(exports){
  function Note(text){
    this.text = text
  };

  Note.prototype.textReturn = function () {
    return this.text
  };

  exports.Note = Note;
})(this);
