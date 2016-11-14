(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.divInit = function () {
    this.noteListView.divCreator("app");
    this.noteListView.divPopulator(this.noteListView.createsListOfLinks(), "app");
  };

  NoteController.prototype.newNote = function (text) {
      this.noteList.storeNote(new Note(text));
  };

  NoteController.prototype.eventListener = function () {
    window.addEventListener("hashchange", this.showClickedNoteOnPage);
  };

  NoteController.prototype.showClickedNoteOnPage = function () {
    noteController.exportNoteTextToAppDiv(noteController.noteList.getNoteTextById(noteController.noteListView.getNoteIdFromURL(window.location)));
  };

  NoteController.prototype.exportNoteTextToAppDiv = function (text) {
    document.getElementById("test").innerHTML = text;
  };

  exports.NoteController = NoteController;

})(this);
