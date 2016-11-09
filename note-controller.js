(function(exports){

  function Instantiate(noteList, view){
    this.noteList = new NoteList();
    this.view = new NoteListView(this.noteList);
  }

  Instantiate.prototype.htmlList = function () {
    this.noteList.storeNote("input=id text, do somenthing that you like");
    this.noteList.storeNote("pray, eat monkey, pray, jump, run");
    this.noteList.storeNote("pray, eat monkey, eat, all right");
    this.noteList.storeNote("pray, monkey, eat");
    this.noteList.storeNote("pray, eat, eat");
    var joiner = this.view.htmlJoiner();
    return joiner;
  };

  exports.Instantiate = Instantiate;

})(this);

window.onload = function() {
  var noteController = new Instantiate();
  var test = document.getElementById('app');
  test.innerHTML = noteController.htmlList();

};
