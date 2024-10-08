import addNote from './lib/addNotes';
import outputNotes from './lib/outputNotes';
import deleteNote from './lib/deleteNotes';

const noteForm = document.querySelector<HTMLFormElement>('#note-form');
const noteOutput = document.querySelector<HTMLElement>('#note-output');

// [{text: 'Note one', date: '10/8/2024'}, {text: 'Note Two', date: '10/9/2024}, {}]

outputNotes();
noteForm?.addEventListener('submit', addNote);
noteOutput?.addEventListener('click', (event: Event) => {
  const el = event?.target as HTMLElement;

  if (el?.tagName === 'BUTTON') {
    const index = el.dataset.index || '';

    deleteNote(index);
  };
});