const noteForm = document.querySelector('#note-form');

function addNote(event: Event) {
  event?.preventDefault();

  console.log('submit')

}

noteForm?.addEventListener('click', addNote);