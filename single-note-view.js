(function(exports){
  function SingleNoteView(noteObj){
    this.noteObj = noteObj;
  };

  SingleNoteView.prototype.htmlNote = function () {
    var noteText = this.noteObj.text;
    return "<div>" + noteText + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
