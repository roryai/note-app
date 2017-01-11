var noteController = new NoteController();

////// TEST NOTES ///////
var note1 = noteController.newNote("Harry Potter and the Wizard of Azkaban");
var note2 = noteController.newNote("One two three four five six seven eight nine ten");

noteController.divInit();
noteController.eventListeners();
