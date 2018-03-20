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
  console.log(note);
  localStorage.setItem('notes', JSON.stringify(notes));
  return note;
};

export const updateNote = note => {
  let notes = JSON.parse(localStorage.getItem('notes'));
  let oldNote = notes.find(n => n.title === note.title);
  notes[notes.indexOf(oldNote)] = note;
  localStorage.setItem('notes', JSON.stringify(notes));
  return note;
};

export const deleteNote = title => {
  let notes = JSON.parse(localStorage.getItem('notes'));
  let newNotes = notes.filter(n => n.title !== title);
  localStorage.setItem('notes', JSON.stringify(newNotes));
  return newNotes;
};
