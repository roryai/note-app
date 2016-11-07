function storesTextOnCreation(){
  var note = new Note("text")

  if (note.textReturn() != "text") {
    throw "False"
  } else {
    console.log("true")
    }
  };

function noteListStoresNote() {
  var noteList = new NoteList();
  noteList.notePrinter();
  noteList.storeNote("testtext")

  if (!noteList.noteArray[0] instanceof Note) {
    throw "False"
  } else {
    console.log("true")
    }
};

function noteListPrintsNotes() {
  var noteList = new NoteList();
  noteList.storeNote("harry potter");
  console.log(noteList.notePrinter())
  if (noteList.notePrinter() == noteList.noteArray) {
    console.log("yer a wizard, 'arry'")
  } else {
    throw "False!"
  }
};


storesTextOnCreation();
noteListStoresNote();
noteListPrintsNotes();
