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

export const fetchNotes = dispatch => {
  const notes = APIUtil.fetchNotes();
  return dispatch(receiveNotes(notes));
};

export const fetchNote = id => dispatch =>{
  const note = APIUtil.fetchNote(id);
  return dispatch(receiveNote(note));
};

export const createNote = note => dispatch =>{
  const newNote = APIUtil.createNote(newNote);
  return dispatch(receiveNote(newNote));
};

export const updateNote = note => dispatch =>{
  const updatedNote = APIUtil.updateNote(note);
  return dispatch(receiveNote(updatedNote));
};

export const deleteNote = id => dispatch =>{
  APIUtil.deleteNote(id);
  return dispatch(removeNote(id));
};
