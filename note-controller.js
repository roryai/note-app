(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.view = new NoteListView(this.noteList);
  }

  NoteController.prototype.divCreator = function () {
    var div = document.createElement("div");
    div.setAttribute("id", "app");
    document.body.insertBefore(div, document.body.firstChild);
  };

  NoteController.prototype.divPopulator = function () {
    var element = document.getElementById('app');
    element.innerHTML = noteController.testHtmlList();
  };

  NoteController.prototype.divInit = function () {
    noteController.divCreator();
    noteController.divPopulator();
  };

  NoteController.prototype.testHtmlList = function () {
    this.noteList.storeNote("pray, eat monkey, pray, jump, run");
    this.noteList.storeNote("pray, eat, eat");
    var joiner = this.view.htmlJoiner();
    return joiner;
  };

  exports.NoteController = NoteController;

})(this);
