var noteController = new NoteController();

////// TEST NOTES ///////
var note1 = noteController.newNote("Harry Potter");
var note2 = noteController.newNote("Dirty Harry");

noteController.divInit();
noteController.eventListeners();
