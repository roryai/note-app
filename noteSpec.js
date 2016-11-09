function storesTextOnCreation(){
  var note = new Note("text")
  if (note.textReturn() == "text") {
    console.log("storesTextOnCreation")
  } else {
    console.log("false")
  }
};

function noteListStoresNote() {
  var noteList = new NoteList();
  noteList.storeNote("test text")
  if (noteList.noteArray[0].text == "test text") {
    console.log("noteListStoresNote")
  } else {
    console.log("false")
  }
};

function noteListReturnsStringArray() {
  var noteList = new NoteList();
  noteList.storeNote("harry potter");
  if (noteList.stringArray() == noteList.noteArray[0].text) {
    console.log("noteListReturnsStringArray")
  } else {
    console.log("false")
  }
};


function ViewReturnHTMLstring() {
  var noteList = new NoteList();
  var view = new NoteListView(noteList);
  noteList.storeNote("harry potter");
  noteList.storeNote("pray, eat, eat");
  if (view.htmlJoiner() == "<ul><li><div>harry potter</li></div><li><div>pray, eat, eat</li></div></ul>") {
    console.log("ViewReturnHTMLstring")
  } else {
    console.log("false")
  }
};

function singleNoteViewReturnsHTML() {
  var note = new Note("harry potter");
  singleNote = new SingleNote(note);
  if (singleNote.htmlNote() == "<div>harry potter</div>") {
    console.log("singleNoteViewReturnsHTML")
  } else {
    console.log("false")
  }
};


storesTextOnCreation();
noteListStoresNote();
noteListReturnsStringArray();
ViewReturnHTMLstring();
singleNoteViewReturnsHTML();
