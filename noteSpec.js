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

storesTextOnCreation();
noteListStoresNote();
noteListPrintsNotes();
