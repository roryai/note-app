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

  NoteController.prototype.newNote = function (text) {
      this.noteList.storeNote(new Note(text));
  };

  exports.NoteController = NoteController;

})(this);
