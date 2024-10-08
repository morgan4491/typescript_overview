import getNotes from "./getNotes";
import outputNotes from "./outputNotes";

function deleteNote(index: string) {

    // Get the notes array from localStorage
    const notesArray = getNotes();
    const confirmDelete = confirm('are you sure you want to delete this note?')

    if (confirmDelete) {
        notesArray.splice(Number(index), 1); // the '1' is used to say 'remove 1 item', no more than one

    localStorage.setItem('notes', JSON.stringify(notesArray));

    outputNotes();
    }

};

export default deleteNote;