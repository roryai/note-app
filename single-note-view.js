(function(exports){
  function SingleNote(noteObj){
    this.noteObj = noteObj;
  };

  SingleNote.prototype.htmlNote = function () {
    var noteText = this.noteObj.text;
    return "<div>" + noteText + "</div>";
  };

  exports.SingleNote = SingleNote;
})(this);
