(function(exports){

  function htmlList() {
    var noteList = new NoteList();
    var view = new NoteListView(noteList);
    noteList.storeNote("harry potter");
    noteList.storeNote("pray, eat, eat");
    view.stringExtractor();
    var joiner = view.htmlJoiner();
    return joiner;
  };

  exports.htmlList = htmlList;
})(this);


window.onload = function() {
  var test = document.getElementById('app');
  test.innerHTML = htmlList();

};
