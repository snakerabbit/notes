import merge from 'lodash/merge';

import {
	RECEIVE_NOTES,
	RECEIVE_NOTE,
	REMOVE_NOTE
} from '../actions/actions';


const NotesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      return merge(newState, {notes: {[action.note.id]: action.note}});
    case REMOVE_ROOM:
      delete newState[action.note.id];
      return newState;
    default:
      return state;
  }
};

export default NotesReducer;
