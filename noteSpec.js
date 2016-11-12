function assignUniqueIdToNote() {
  var noteController = new NoteController
  var note3 = noteController.newNote("text")
  var note4 = noteController.newNote("text")
  // console.log(noteController.noteList.noteArray)
  // console.log(noteController.noteList.noteArray[1].id)
  if (noteController.noteList.noteArray[1].id == 2) {
    console.log("assignUniqueIdToNote");
  } else {
    console.log("false")
  }
};

function storesTextOnCreation(){
  var note = new Note("text")
  if (note.textReturn() == "text") {
    console.log("storesTextOnCreation")
  } else {
    console.log("false")
  }
};

function noteListStoresNote() {
  var note = new Note("text");
  var noteList = new NoteList();
  noteList.storeNote(note)
  if (noteList.noteArray[0].text == "text") {
    console.log("noteListStoresNote")
  } else {
    console.log("false")
  }
};

function noteListReturnsStringArray() {
  var note = new Note("harry potter");
  var noteList = new NoteList();
  noteList.storeNote(note);
  if (noteList.getStringArray() == noteList.noteArray[0].text) {
    console.log("noteListReturnsStringArray")
  } else {
    console.log("false")
  }
};


function viewReturnHTMLstring() {
  var note = new Note("hi chris");
  var note2 = new Note("hi rory");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.storeNote(note);
  noteList.storeNote(note2);
  if (noteListView.createsListOfLinks() ==
  "<ul><li><a href='http://localhost:8080#notes/6'>hi chris</a></li>" +
  "<li><a href='http://localhost:8080#notes/7'>hi rory</a></li></ul>") {
    console.log("ViewReturnHTMLstring")
  } else {
    console.log("false")
  }
};

function singleNoteViewReturnsHTML() {
  var note = new Note("harry potter");
  singleNoteView = new SingleNoteView(note);
  if (singleNoteView.htmlNote() == "<div>harry potter</div>") {
    console.log("singleNoteViewReturnsHTML")
  } else {
    console.log("false")
  }
};

assignUniqueIdToNote();
storesTextOnCreation();
noteListStoresNote();
noteListReturnsStringArray();
viewReturnHTMLstring();
singleNoteViewReturnsHTML();
