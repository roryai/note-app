(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.view = new NoteListView(this.noteList);
  }

  NoteController.prototype.testHtmlList = function () {
    this.noteList.storeNote("do something that you like");
    this.noteList.storeNote("pray, eat monkey, pray, jump, run");
    this.noteList.storeNote("pray, eat monkey, eat, all right");
    this.noteList.storeNote("pray, monkey, eat");
    this.noteList.storeNote("pray, eat, eat");
    var joiner = this.view.htmlJoiner();
    return joiner;
  };

  NoteController.prototype.divPopulator = function () {


    var element = document.getElementById('app');
    element.innerHTML = noteController.testHtmlList();
  };

  exports.NoteController = NoteController;

})(this);
