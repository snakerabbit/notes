import React from 'react';
import { fetchNotes } from './actions/actions';
import { connect } from 'react-redux';
 import App from './App';


const mapStateToProps = state =>{
  return({
    notes: state.notes
  });
};

const mapDispatchToProps = dispatch =>{
  return({
    fetchNotes: () => dispatch(fetchNotes())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
