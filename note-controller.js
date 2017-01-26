(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.divInit = function () {
    this.noteListView.divCreator("app");
    this.noteListView.divTitleCreator();
    this.noteListView.divPopulator(this.noteListView.createsListOfLinks(), "app");
  };

  NoteController.prototype.newNote = function (text) {
      this.noteList.storeNote(new Note(text));
  };

  NoteController.prototype.eventListeners = function () {
    this.hashChangeListener();
    this.submitListener();
  };

  NoteController.prototype.hashChangeListener = function () {
    window.addEventListener("hashchange", this.showClickedNoteOnPage);
  };

  NoteController.prototype.submitListener = function () {
    window.addEventListener("submit", function(submitEvent) {
      submitEvent.preventDefault();
      noteController.newNote(submitEvent.target.text.value)
      noteController.noteListView.divPopulator(noteController.noteListView.createsListOfLinks(), "app")
    })
  };

  NoteController.prototype.showClickedNoteOnPage = function () {
    noteController.exportNoteTextToAppDiv(noteController.noteList.getNoteTextById(noteController.noteListView.getNoteIdFromURL(window.location)));
  };

  NoteController.prototype.exportNoteTextToAppDiv = function (text) {
    document.getElementById("note-display").innerHTML = text;
  };

  exports.NoteController = NoteController;

})(this);
