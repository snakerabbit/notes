import { createStore, applyMiddleware } from 'redux';
import NotesReducer from '../reducers/notes_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const configureStore = (preloadedState = {}) =>(
  createStore(
    NotesReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
 
