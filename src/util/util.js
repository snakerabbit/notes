export const fetchNotes = ()=>{
  if(localStorage.getItem('notes')){
    return JSON.parse(localStorage.getItem('notes'));
  }
  else {
    let notes =localStorage.setItem('notes', JSON.stringify([]));
    return notes;
  }

};

export const fetchNote = id =>{
  let notes = JSON.parse(localStorage.getItem('notes'));
  return notes[id];
};


export const createNote = note => {
  let notes = JSON.parse(localStorage.getItem('notes'));
  console.log(notes);
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
  return note;
};

export const updateNote = note => {
  let notes = JSON.parse(localStorage.getItem('notes'));
  let oldNote = notes.find(n => n.objectID === note.objectID);
  notes[oldNote.objectID] = note;
  localStorage.setItem('notes', JSON.stringify(notes));
  return note;
};

export const deleteNote = id => {
  let notes = JSON.parse(localStorage.getItem('notes'));
  let newNotes = notes.filter(n => n.objectID !== id);
  localStorage.setItem('notes', JSON.stringify(newNotes));
  return newNotes;
};
