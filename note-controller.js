(function(exports){

  function Instantiate(noteList, view){
    this.noteList = new NoteList();
    this.view = new NoteListView(this.noteList);
  }

  Instantiate.prototype.htmlList = function () {
    this.noteList.storeNote("harry potter");
    this.noteList.storeNote("pray, eat, eat");
    this.view.stringExtractor();
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
