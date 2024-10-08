import getNotes from "./getNotes";

function outputNotes() {
    const notesArray = getNotes();
    const noteOutput = document.querySelector<HTMLElement>('#note-output');



    if (!notesArray.length && noteOutput) {
        noteOutput.innerHTML = '<p>No notes have been added...</p>';
    } else if (notesArray.length && noteOutput) {
        noteOutput.innerHTML = '';
    };

    // type Note = {       // This defines the format of the noteObj type, that can be used in the forEach method
    //     text: string,
    //     date: string
    // }
    // Loop over the array of note objects and output an article element into the section output for each object in the array

    // notesArray.forEach((noteObj: Note, index: number) => {
    //     noteOutput?.insertAdjacentHTML('beforeend', `
    //         <article class="mb-4">
    //             <h3>${noteObj.text}</h3>
    //             <p>Added On: ${noteObj.date}</p>
    //             <button data-index="${index}" class="btn btn-danger">Delete</button>
    //             <hr>
    //         </article>`)
    // });

    for (let index = 0; index < notesArray.length; index++) {
        const noteObj = notesArray[index];

        noteOutput?.insertAdjacentHTML('beforeend', `
            <article class="mb-4">
                <h3>${noteObj.text}</h3>
                <p>Added On: ${noteObj.date}</p>
                <button data-index="${index}" class="btn btn-danger">Delete</button>
                <hr>
            </article>`);
    };  // take note of the 'data-index="${index}" - this is a way to create a custom attribute on an element

}

export default outputNotes;