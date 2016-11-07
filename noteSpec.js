function storesTextOnCreation(){
  var note = new Note("text")

  if (note.textReturn() != "text") {
    throw "False" }
    else {
      console.log("true")
    }
  };

  storesTextOnCreation()
