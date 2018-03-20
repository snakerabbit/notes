import React from 'react';
import { fetchNotes, updateNote, createNote, deleteNote, fetchNote} from '../actions/actions';
import { connect } from 'react-redux';
 import App from './App';


const mapStateToProps = state =>{
  return({
    notes: state.notes
  });
};

const mapDispatchToProps = dispatch =>{
  return({
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: id => dispatch(fetchNote(id)),
    updateNote: note => dispatch(updateNote(note)),
    createNote: note => dispatch(createNote(note)),
    deleteNote: title => dispatch(deleteNote(title))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
