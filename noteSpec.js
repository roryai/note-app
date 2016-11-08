function storesTextOnCreation(){
  var note = new Note("text")
  if (note.textReturn() != "text") {
    console.log("false")
  } else {
    console.log("true")
  }
};

function noteListStoresNote() {
  var noteList = new NoteList();
  noteList.storeNote("test text")
  if (noteList.noteArray[0].text != "test text") {
    console.log("false")
  } else {
    console.log("true")
  }
};

function noteListPrintsNotes() {
  var noteList = new NoteList();
  noteList.storeNote("harry potter");
  if (noteList.notePrinter() == noteList.noteArray) {
    console.log("yer a wizard, 'arry'")
  } else {
    console.log("false")
  }
};


function ViewReturnHTMLstring() {
  var noteList = new NoteList();
  var view = new NoteListView(noteList);
  noteList.storeNote("harry potter");
  noteList.storeNote("pray, eat, eat");
  view.stringExtractor();
  if (view.stringJoiner() == "<ul><li><div>harry potter</div></li><li><div>pray, eat, eat</div></li></ul>") {
    console.log("html success'")
  } else {
    console.log("false")
  }
};

storesTextOnCreation();
noteListStoresNote();
noteListPrintsNotes();
ViewReturnHTMLstring();
