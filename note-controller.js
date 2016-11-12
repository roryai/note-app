(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    this.singleNoteView = new SingleNoteView(new Note);
  }

  NoteController.prototype.divInit = function () {
    this.noteListView.divCreator("app");
    console.log(44)
    this.noteListView.divPopulator(this.noteListView.createsListOfLinks(), "app");
  };

  NoteController.prototype.newNote = function (text) {
      this.noteList.storeNote(new Note(text));
  };

  NoteController.prototype.eventListener = function () {
    // console.log(99)
    window.addEventListener("hashchange", this.showClickedNoteOnPage());
  };

  NoteController.prototype.showClickedNoteOnPage = function () {
    //   console.log(this.getNoteIdFromURL(window.location))
    // console.log(this.getNoteTextById(this.getNoteIdFromURL(window.location)))
    //
    // console.log(this.exportNoteTextToDiv(this.getNoteTextById(this.getNoteIdFromURL(window.location))))
    this.exportNoteTextToDiv(this.getNoteTextById(this.getNoteIdFromURL(window.location)));
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

  NoteController.prototype.exportNoteTextToDiv = function (text) {
    // console.log(document.getElementById("test"))
    console.log(text)
    console.log(document)
    console.log(3)
    console.log(document.getElementById("test"))
    document.getElementById("test").innerHTML = text;
  };

  exports.NoteController = NoteController;

})(this);
