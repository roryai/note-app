(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    this.singleNoteView = new SingleNoteView(new Note);
  }

  NoteController.prototype.divInit = function () {
    this.noteListView.divCreator("app");
    this.noteListView.divPopulator(this.noteListView.createsListOfLinks(), "app");
  };





  NoteController.prototype.eventListener = function () {
    window.addEventListener("hashchange", this.showClickedNoteOnPage())
  };

  NoteController.prototype.showClickedNoteOnPage = function () {
    console.log(this.noteListView.getNoteIdFromURL(window.location))
    console.log(this.noteList.getNoteTextById(this.noteListView.getNoteIdFromURL(window.location)))
    console.log(this.exportNoteTextToDiv(this.noteList.getNoteTextById(this.noteListView.getNoteIdFromURL(window.location))))
    this.exportNoteTextToDiv(this.noteList.getNoteTextById(this.noteListView.getNoteIdFromURL(window.location)));
  };

  NoteController.prototype.exportNoteTextToDiv = function (text) {
    console.log(text)
    console.log(document.getElementById("test"))

    var b =document.getElementById("test");
    b.innerHTML = text;
  };

  NoteController.prototype.newNote = function (text) {
      this.noteList.storeNote(new Note(text));
  };

  exports.NoteController = NoteController;

})(this);
