(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    this.noteObj = new Note("Some stuff what i rote")
    this.singleNoteView = new SingleNoteView(this.noteObj)
  }

  NoteController.prototype.divCreator = function (divId) {
    var div = document.createElement("div");
    div.setAttribute("id", divId);
    document.body.insertBefore(div, document.body.firstChild);
  };

  NoteController.prototype.divPopulator = function (html, divId) {
    var element = document.getElementById(divId);
    element.innerHTML = html;
  };

  NoteController.prototype.divInit = function () {
    noteController.divCreator("app");
    noteController.divPopulator(noteController.testHtmlList(), "app");
  };

  NoteController.prototype.singleNoteDivInit = function () {
    noteController.divCreator("single");
    noteController.divPopulator(this.singleNoteView.htmlNote(), "single");
  };

  NoteController.prototype.testHtmlList = function () {
    this.noteList.storeNote("pray, eat monkey, pray, jump, run");
    this.noteList.storeNote("pray, eat, eat");
    var joiner = this.noteListView.htmlJoiner();
    return joiner;
  };

  // NoteController.prototype.singleNoteTest = function () {
  //   this.singleNoteView.htmlNote()
  // };

  exports.NoteController = NoteController;

})(this);
