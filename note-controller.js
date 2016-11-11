(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    this.singleNoteView = new SingleNoteView();
    this.noteCounter = 0;
  }

  NoteController.prototype.divCreator = function (divId) {
    var div = document.createElement("div");
    div.setAttribute("id", divId);
    document.body.insertBefore(div, document.body.firstChild);
  };

  NoteController.prototype.divInit = function () {
    this.noteListView.divCreator("app");
    this.noteListView.divPopulator(noteController.testHtmlList(), "app");
  };

  NoteController.prototype.singleNoteDivInit = function () {
    this.noteListView.divCreator("single");
    this.noteListView.divPopulator(this.singleNoteView.htmlNote(), "single");
  };


  NoteController.prototype.testHtmlList = function () {
    this.newNote("pray, eat monkey, pray, jump, run");
    this.newNote("pray, eat, eat");
    var joiner = this.noteListView.htmlJoiner();
    return joiner;
  };

  NoteController.prototype.newNote = function (text) {
      this.noteList.storeNote(new Note(text));
  };

  exports.NoteController = NoteController;

})(this);
