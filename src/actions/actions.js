import * as APIUtil from '../util/util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

export const receiveNote = note => {
	return {
	type: RECEIVE_NOTE,
	note
};
};

export const receiveNotes = notes => {
	return {
	type: RECEIVE_NOTES,
	notes
};
};

export const removeNote = id => ({
	type: REMOVE_NOTE,
	id
});

export const fetchNotes = () => {
  const notes = APIUtil.fetchNotes();
  return receiveNotes(notes);
};

export const fetchNote = id =>{
  const note = APIUtil.fetchNote(id);
  return receiveNote(note);
};

export const createNote = note => {
  const newNote = APIUtil.createNote(newNote);
  return receiveNote(newNote);
};

export const updateNote = note => {
  const updatedNote = APIUtil.updateNote(note);
  return receiveNote(updatedNote);
};

export const deleteNote = id => {
  APIUtil.deleteNote(id);
  return removeNote(id);
};
