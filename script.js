document.addEventListener('DOMContentLoaded', function() {
  const addNoteButton = document.getElementById('add-note-button');
  const addNoteForm = document.getElementById('add-note-form');
  const saveNoteButton = document.getElementById('save-note-button');
  const noteContent = document.getElementById('note-content');
  const notesContainer = document.getElementById('notes-container');
  const colorOptions = document.querySelectorAll('.color-option');

  let selectedColor = '#ffffcc';

  addNoteButton.addEventListener('click', () => {
    addNoteForm.classList.toggle('active');
    noteContent.value = '';
  });

  addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const note = document.createElement('div');
    note.classList.add('note');
    note.style.backgroundColor = selectedColor;

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = noteContent.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      notesContainer.removeChild(note);
    });

    note.appendChild(content);
    note.appendChild(deleteButton);
    notesContainer.appendChild(note);

    noteContent.value = '';
    addNoteForm.classList.remove('active');
  });

  colorOptions.forEach((option) => {
    option.addEventListener('click', () => {
      selectedColor = option.style.backgroundColor;
    });
  });
});
