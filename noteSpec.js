function storesTextOnCreation(){
  var note = new Note("text")

  if (note.textReturn() != "text") {
    throw "False" }
};

storesTextOnCreation()
