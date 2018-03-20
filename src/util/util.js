export const fetchNotes = ()=>{
  return JSON.parse(localStorage.getItem('notes'));
};

export const fetchNote = id =>{
  let notes = JSON.parse(localStorage.getItem('notes'));
  return notes[id];
};


export const createNote = note => {
  let notes = JSON.parse(localStorage.getItem('notes'));
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
  return note;
};

export const updateNote = note => {
  let notes = JSON.parse(localStorage.getItem('notes'));
  let newNotes = notes.delete(notes[note.id]);
  localStorage.setItem('notes', JSON.stringify(newNotes));
  return note;
};

export const deleteNote = id => {
  let notes = JSON.parse(localStorage.getItem('notes'));
  let newNotes = notes.delete(notes[id]);
  localStorage.setItem('notes', JSON.stringify(newNotes));
  return newNotes;
};
