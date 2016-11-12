(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    // this.singleNoteView = new SingleNoteView(new Note);
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

    var aa = this.getNoteTextById(this.getNoteIdFromURL(window.location));
    console.log(aa);
    this.exportNoteTextToAppDiv(aa);
  };

  NoteController.prototype.getNoteIdFromURL = function (location) {
    return location.hash.split("#")[1];
  };

  NoteController.prototype.getNoteTextById = function (id) {
    for (i = 0; i < this.noteList.noteArray.length; i++) {
      if (this.noteList.noteArray[i].id == [id]) {
        return this.noteList.noteArray[i].text
      }
    }
  };

  NoteController.prototype.exportNoteTextToAppDiv = function (text) {
    document.getElementById("test").innerHTML = text;
  };

  exports.NoteController = NoteController;

})(this);
